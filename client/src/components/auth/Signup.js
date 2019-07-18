import React, { Component } from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types'

class Signup extends Component {
  state = {
    firstName: '',
    username:'',
    email: '',
    password:'',
    password2:''
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/v1.0/users/signup',this.state)
    .then(response => {
      this.props.history.push('/signin')
    })
    .catch(err => {
      console.log(err)
    })
    
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">First Name</label>
          <input
            type="text" name="firstName"
            className="form-control" placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text"
            name="username"
            className="form-control" placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className="form-control" placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="form-control" placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input type="password" name="password2" className="form-control" placeholder="Confirm Password"
            value={this.state.password2}
            onChange={this.handleChange}
          />
        </div>
        <button className="btn btn-primary" type="submit">Sign Up</button> {}
        <NavLink to="/signin" className="btn btn-secondary">Sign In</NavLink>

      </form>
    )
  }
}

export default Signup;
