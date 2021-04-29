import * as React from 'react';
import { Redirect } from 'react-router-dom';

import { useUser } from '../context/UserContext';
import { loginUser } from '../services/mockedAuth';

function Login() {
  const formRef = React.useRef();
  const [user, setUser] = useUser();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = formRef.current.elements;

    loginUser(username.value, password.value).then((user) => {
      setUser(user);
    });
  };

  return user ? (
    <Redirect to='/bands' />
  ) : (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label htmlFor='username'>Username:</label>
      <input id='username' name='username' type='text' />
      <label htmlFor='password'>Password:</label>
      <input id='password' name='password' type='password' />
      <button type='submit'>Login</button>
    </form>
  );
}

export default Login;
