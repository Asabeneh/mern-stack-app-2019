
import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'
export class StudentDetail extends Component {
  state = {
    student:null
  }
  componentDidMount () {
const id = this.props.match.params.id;
  const apiURL = `http://localhost:5000/api/v1.0/students/${id}`;
    axios.get(apiURL).then(response => {
      console.log(response);
      this.setState({student:response.data})
    })
  }
  render() {
    
    console.log(this.state.student)
    if(!this.state.student) {
      return <h1>Loading .... </h1>
    }
    const {name, country, age, bio} = this.state.student;
    return (
      
      <div>
        <h2>{name}</h2>
        <h3>{country}</h3>
        <h4>{age}</h4>
        <p>{bio}</p>
      </div>
    )
  }
}

export default StudentDetail
