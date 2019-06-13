import React, { Component } from 'react';
import axios from 'axios'
import Student from './Student';

 class StudentList extends Component {
   state = {
     students:[]
   }
   componentDidMount () {
     const apiURL = '/api/v1.0/students';
     axios.get(apiURL).then(response => {
        this.setState({
         students:response.data
       })

     })
   }
   renderStudentList = () => {
     const students = this.state.students;
     return students.map((student) =><Student key = {student._id} student = {student} />)
   }
  render() {
    return (
      <div>
        <h3>Number of students:{this.state.students.length}</h3>
       
       <table className="table table-striped">
       <thead>
       <tr>
       <th>Name</th>
       <th>Country</th>
       <th>Age</th>
       <th>Action</th>
       </tr>
       </thead>
       <tbody>
        {this.renderStudentList () }
       </tbody>
       </table>
      </div>
    )
  }
}
export default StudentList;