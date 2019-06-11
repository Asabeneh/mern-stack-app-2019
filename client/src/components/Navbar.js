import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = props => {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">MERN APP</NavLink>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/students">Students</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/add-student">Add Student</NavLink>
      </li> 
    </ul>
  </div>
</nav>
  )
}

Navbar.propTypes = {

}

export default Navbar
