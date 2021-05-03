import * as React from 'react';
import { Redirect } from 'react-router-dom';

import { useUser } from '../context/UserContext';
import { loginUser } from '../services/mockedAuth';

import Button from './Button';
import Container from './Container';

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
    <Container>
      <section className='flex flex-col items-center justify-center text-center h-2/5'>
        <h1 className='px-4 text-4xl sm:text-6xl sm:max-w-md'>
          Welcome to the <span className='font-bold'>Bands App</span>
        </h1>
      </section>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className='w-2/3 pb-1 mx-auto max-w-min'>
          <label className='block py-1 pr-2 text-xl' htmlFor='username'>
            Username
          </label>
          <input
            className='p-2 text-gray-800 border-none rounded-md focus:ring-4 focus:ring-indigo-400'
            id='username'
            name='username'
            type='text'
          />
        </div>
        <div className='w-2/3 mx-auto mb-12 max-w-min'>
          <label className='block py-1 pr-2 text-xl' htmlFor='password'>
            Password
          </label>
          <input
            className='p-2 text-gray-800 border-none rounded-md focus:ring-4 focus:ring-indigo-400'
            id='password'
            name='password'
            type='password'
          />
        </div>
        <Button>Login</Button>
      </form>
    </Container>
  );
}

export default Login;
