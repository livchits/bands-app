import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useUser } from '../context/UserContext';

const PrivateRoute = ({ children, ...rest }) => {
  const [user] = useUser();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.element,
};

export default PrivateRoute;
