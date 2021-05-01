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
    <main className='flex flex-col justify-center w-11/12 max-w-2xl mx-auto bg-red-600 rounded-md shadow-md h-5/6 font-chivo text-gray-50 bg-opacity-90'>
      <section className='flex flex-col items-center justify-center text-center h-2/5'>
        <h1 className='px-4 text-4xl sm:text-6xl sm:max-w-md'>
          Welcome to the <span className='font-bold'>Bands App</span>
        </h1>
      </section>
      <form ref={formRef} className='m-auto' onSubmit={handleSubmit}>
        <div className='pb-1'>
          <label className='block py-1 text-xl' htmlFor='username'>
            Username
          </label>
          <input
            className='p-2 text-gray-800 border-none rounded-md focus:ring-4 focus:ring-indigo-400'
            id='username'
            name='username'
            type='text'
          />
        </div>
        <div className='pb-8'>
          <label className='block py-1 text-xl' htmlFor='password'>
            Password
          </label>
          <input
            className='p-2 text-gray-800 border-none rounded-md focus:ring-4 focus:ring-indigo-400'
            id='password'
            name='password'
            type='password'
          />
        </div>
        <button
          className='block w-2/3 p-2 m-auto text-2xl font-black transition-all duration-100 ease-in rounded-md ring-2 ring-gray-50 ring-opacity-75 hover:ring-4 focus:ring-4 focus:ring-indigo-400 active:text-gray-200'
          type='submit'
        >
          Login
        </button>
      </form>
    </main>
  );
}

export default Login;
