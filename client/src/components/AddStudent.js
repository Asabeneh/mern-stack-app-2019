import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddStudent extends Component {
  render() {
    return (
      <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" placeholder="Enter Name" />
      </div>
      <div class="form-group">
        <label for="country">Country</label>
        <input type="text" class="form-control" placeholder="Enter Country" />
      </div>
      <div class="form-group">
        <label for="age">Age</label>
        <input type="text" class="form-control" placeholder="Enter age" />
      </div>
     
      <div class="form-group">
        <label for="bio">Bio</label>
        <textarea name = "bio" class="form-control"/>
      </div>
      <button class="btn btn-primary" type="submit">Add Student</button>

      </form>
    )
  }
}

export default AddStudent
