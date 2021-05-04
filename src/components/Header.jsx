import * as React from 'react';

import { useUser } from '../context/UserContext';

function Header() {
  const [, setUser] = useUser();

  const handleLogout = () => {
    window.localStorage.removeItem('bands_app_user');
    setUser(null);
  };

  return (
    <header className='p-2 mt-3 ml-auto mr-2 bg-gray-400 rounded-md shadow-sm bg-opacity-20 w-min'>
      <button
        className='block p-1 px-5 text-lg text-gray-300 transition-all duration-100 ease-in rounded-md ring-2 ring-gray-300 ring-opacity-75 hover:ring-4 focus:ring-4 focus:ring-indigo-400 active:text-gray-200'
        onClick={handleLogout}
      >
        Logout
      </button>
    </header>
  );
}

export default Header;
