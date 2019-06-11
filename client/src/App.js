import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Link, NavLink, Switch}  from 'react-router-dom';
import './App.css';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import Navbar from './components/Navbar';
import LandingPage from './components/Index'

// yarn add bootstrap
// npm install bootstrap

class App extends Component{
  render () {
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Switch>
            <Route path = "/students" component = {StudentList} />
            <Route path = "/add-student" component = {AddStudent} />
            <Route path = "/edit/:id" component = {EditStudent} />
            <Route path = "/" component = {LandingPage} />
          </Switch>
         
        </div>
      </BrowserRouter>
      
    );

  }
  
}

export default App;
