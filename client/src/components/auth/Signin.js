import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import axios from 'axios';
import PropTypes from 'prop-types'


class Signin extends Component {
  state = {
    email: '',
    password: '',
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.loginUser(this.state, this.props.history);
  }
  render() {
    const {errors} = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" class="form-control is-invalid" id="validationServer03" placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div class="invalid-feedback">
            {errors.email}
      </div>
         
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="form-control is-invalid" placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <p className="invalid-feedback">{errors.password}</p>
        </div>
        
        <button className="btn btn-primary" type="submit">Sign In</button> {' '}
        <NavLink to="/signup" className="btn btn-secondary">Sign Up </NavLink>

      </form>
    )
  }
}

export default Signin
