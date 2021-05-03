import * as React from 'react';

import { useUser } from '../context/UserContext';

import Button from './Button';

function Header() {
  const [, setUser] = useUser();

  const handleLogout = () => {
    console.log('logout');
    setUser(null);
  };

  return (
    <header className='w-11/12 p-2 m-auto mt-3 bg-pink-500 rounded-md bg-opacity-30'>
      <Button handleClick={handleLogout}>Logout</Button>
    </header>
  );
}

export default Header;
