import * as React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <PrivateRoute path='/bands'>
            <Home />
          </PrivateRoute>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Redirect to='/login' />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
