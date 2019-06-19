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
    axios.post('/api/v1.0/users/signin', this.state)
      .then(response => {
        console.log(response)
        const token = response.data.token;
        localStorage.setItem('jwtToken', token)
        this.props.history.push('/students')
      })
      .catch(error => console.log(error))

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        
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
        
        <button className="btn btn-primary" type="submit">Sign In</button> {' '}
        <NavLink to="/signup" className="btn btn-primary">Sign Up </NavLink>

      </form>
    )
  }
}

export default Signin
