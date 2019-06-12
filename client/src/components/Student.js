import React from 'react'
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types'

const Student = props => {
  const deleteStudent = (id) => {
    const url = `/api/v1.0/students/${id}`;
    axios.delete(url).then(response => {
      console.log(response)
      console.log(props)
    
    }).catch(error => console.log(error))

  }
  return (
    <tr>
      <td>{props.student.name}</td>
      <td>{props.student.country}</td>
      <td>{props.student.age}</td>
      <tr>
      <NavLink to= {`/students/${props.student._id}`} className="btn btn-secondary">Detail</NavLink> {' '} {' '}
      <NavLink to = {`/edit/${props.student._id}`} className="btn btn-primary">Edit</NavLink> {' '} {' '}
      <button onClick = {() => deleteStudent (props.student._id)} className="btn btn-danger">Delete</button>
      </tr>
    </tr>
  )
}

Student.propTypes = {

}

export default Student
