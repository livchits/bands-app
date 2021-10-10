import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { useUser } from '../context/UserContext';

const PrivateRoute = ({ children, ...rest }: RouteProps) => {
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

export default PrivateRoute;
