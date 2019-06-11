import React, { Component } from 'react'
import Student from './Student';

 class StudentList extends Component {
   state = {
     students:[]
   }
   componentDidMount () {
     const apiURL = 'http://localhost:5000/api/v1.0/students';
     fetch(apiURL).then(response => response.json())
     .then((data) => {
       console.log(data);
       this.setState({
         students:data
       })
     })

   }
  render() {
    return (
      <div>
        <h3>Numbers student:{this.state.students.length}</h3>
        <Student />
      </div>
    )
  }
}
export default StudentList;