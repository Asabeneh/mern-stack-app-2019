import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const Student = props => {
  return (
    <tr>
      <td>{props.student.name}</td>
      <td>{props.student.country}</td>
      <td>{props.student.age}</td>
      <tr>
      <NavLink to= {`/students/${props.student._id}`} className="btn btn-secondary">Detail</NavLink> {' '} {' '}
      <button className="btn btn-primary">Edit</button> {' '} {' '}
      <button className="btn btn-danger">Delete</button>
      </tr>
    </tr>
  )
}

Student.propTypes = {

}

export default Student
