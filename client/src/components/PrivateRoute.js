import React from 'react';
import {Route, Redirect} from 'react-router-dom';
const PrivateRoute = ({ component: Component, auth, ...rest}) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/signin' />
  )} />
)

export default PrivateRoute;