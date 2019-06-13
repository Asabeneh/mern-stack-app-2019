import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const Index = props => {
  return (
    <div className="jumbotron">
      <NavLink to="/students" className="text-center landing"><h2>Go to students</h2></NavLink>
    </div>
  )
}

Index.propTypes = {

}

export default Index
