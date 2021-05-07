import * as React from 'react';
import { Redirect } from 'react-router-dom';

import { useUser } from '../context/UserContext';
import { loginUser } from '../services/mockedAuth';
import Container from '../components/Container';

function Login() {
  const formRef = React.useRef();
  const [user, setUser] = useUser();
  const [errorMessage, setErrorMessage] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = formRef.current.elements;

    loginUser(username.value, password.value)
      .then((user) => {
        window.sessionStorage.setItem('bands_app_user', JSON.stringify(user));
        setUser(user);
      })
      .catch(({ error }) => {
        username.value = '';
        password.value = '';
        setErrorMessage(error.message);
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
            className='p-2 text-gray-800 border-none rounded-md outline-none focus:ring-4 focus:ring-indigo-400'
            id='username'
            name='username'
            placeholder='johndoe'
            type='text'
          />
        </div>
        <div className='w-2/3 mx-auto mb-6 max-w-min'>
          <label className='block py-1 pr-2 text-xl' htmlFor='password'>
            Password
          </label>
          <input
            className='p-2 text-gray-800 border-none rounded-md outline-none focus:ring-4 focus:ring-indigo-400'
            id='password'
            name='password'
            placeholder='pass'
            type='password'
          />
        </div>
        <p
          className={`sm:w-2/3 w-3/4 p-2 mx-auto mb-6 text-lg font-black text-center bg-red-800 border-4 border-red-900 rounded-md ${
            errorMessage ? 'visible' : 'invisible'
          }`}
        >
          Oops... {errorMessage}
        </p>
        <button className='block p-2 m-auto text-2xl font-black transition-all duration-100 ease-in rounded-md px-9 ring-2 ring-gray-50 ring-opacity-75 hover:ring-4 focus:ring-4 focus:ring-indigo-400 active:text-gray-200 focus:outline-none'>
          Login
        </button>
      </form>
    </Container>
  );
}

export default Login;
