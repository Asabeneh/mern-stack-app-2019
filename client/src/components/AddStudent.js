import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'

class AddStudent extends Component {
  state = {
    name:'',
    country:'',
    age: '',
    bio:''
  }
  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]:value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios.post('/api/v1.0/students', this.state)
    .then(response => {
      this.props.history.push('/students')

    })
    .catch(error => console.log(error))
    this.setState({
      name:'',
      country:'',
      age:'',
      bio:''
    })
  }
  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
      <div class="form-group">
        <label for="name">Name</label>
        <input 
        type="text" name = "name"
        class="form-control" placeholder="Enter Name" 
        value = {this.state.name}
        onChange = {this.handleChange}
        />
      </div>
      <div class="form-group">
        <label for="country">Country</label>
        <input type="text" 
        name = "country"
        class="form-control" placeholder="Enter Country"
        value = {this.state.country}
        onChange = {this.handleChange}
         />
      </div>
      <div class="form-group">
        <label for="age">Age</label>
        <input type="text" name = "age" class="form-control" placeholder="Enter age" 
        value = {this.state.age}
        onChange = {this.handleChange}
        />
      </div>
     
      <div class="form-group">
        <label for="bio">Bio</label>
        <textarea name = "bio" class="form-control"
        value = {this.state.bio}
        onChange = {this.handleChange}
        />
      </div>
      <button class="btn btn-primary" type="submit">Add Student</button>

      </form>
    )
  }
}

export default AddStudent
