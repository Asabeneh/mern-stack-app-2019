
import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'
export class StudentDetail extends Component {
  state = {
    student:null
  }
  componentDidMount () {
const id = this.props.match.params.id;
const url = `/api/v1.0/students/${id}`;
    axios.get(url).then(response => {
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
      
      <div style = {{marginTop:20}}>
        <h3 className="text-center jumbotron">{name}</h3>
        <p>{country}</p>
        <p>{age}</p>
        <p>{bio}</p>
      </div>
    )
  }
}

export default StudentDetail
