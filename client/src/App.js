import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch}  from 'react-router-dom';
import './App.css';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import Navbar from './components/Navbar';
import LandingPage from './components/Index'
import StudentDetail from './components/StudentDetail';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import PrivateRoute from './components/PrivateRoute';
import setAuthHeader from './shared/setAuthHeader';
import jwtDecode from 'jwt-decode';
import axios from 'axios'

class App extends Component{
  state = {
    auth:{
      isAuthenticated:false,
      currentUser:{}
    },
    errors:{}
  }
  loginUser = (data, history) => {
    axios.post('/api/v1.0/users/signin', data)
      .then(response => {
        console.log(response.data);
        
        const token = response.data.token;
        setAuthHeader(token)
        const currentUser = jwtDecode(token)
        localStorage.setItem('jwtToken', token)
        this.setState({
          auth:{...this.state.auth,isAuthenticated:true, currentUser:currentUser}
        })
        history.push('/')
      })
      .catch(err => {
        console.log(err);   
        console.log(err.response.data)
        this.setState({
          errors:err.response.data
        })
       
      })
  }
  logoutUser = () => {
      localStorage.removeItem('jwtToken');
      setAuthHeader(false);
      this.setState({
        auth: { ...this.state.auth, isAuthenticated: false, currentUser: {} }
      })
      window.location.href = '/login'
  
   
  }
  render () {
    const {auth, errors} = this.state;
  
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar auth = {auth} logoutUser = {this.logoutUser} />
          <Switch>
  
            <PrivateRoute auth={auth} path = "/add-student" component = {AddStudent} />
            <PrivateRoute auth={auth} path = "/edit/:id" component = {EditStudent} />
            <PrivateRoute auth = {auth} path = "/students/:id" component = {StudentDetail} />
            <PrivateRoute auth={auth} path = "/students" component = {StudentList} />
            <Route path="/signup" component = {Signup} />
            <Route path="/signin" component={(props) => <Signin {...props} loginUser={this.loginUser} errors={errors}/> } />
            <PrivateRoute auth={auth} path = "/" component = {LandingPage} />
          </Switch>
        </div>
      </BrowserRouter>
      
    );

  }
  
}

export default App;
