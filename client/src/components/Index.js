import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const Index = props => {
  return (
    <div className="jumbotron">
      <NavLink to="/students">Go to students page</NavLink>
    </div>
  )
}

Index.propTypes = {

}

export default Index
