import * as React from 'react';

import { useUser } from '../context/UserContext';
import auth from '../services/mockedAuth';

function Login() {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const [, setUser] = useUser();

  const handleSubmit = (event) => {
    event.preventDefault();
    auth(usernameRef.current.value, passwordRef.current.value).then((user) =>
      setUser(user)
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Username:</label>
      <input ref={usernameRef} id='username' name='username' type='text' />
      <label htmlFor='password'>Password:</label>
      <input ref={passwordRef} id='password' name='password' type='password' />
      <button type='submit'>Login</button>
    </form>
  );
}

export default Login;
