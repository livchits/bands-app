import * as React from 'react';

import { useUser } from '../context/UserContext';

function Header() {
  const [, setUser] = useUser();

  const handleLogout = () => {
    console.log('logout');
    setUser(null);
  };

  return (
    <header>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
}

export default Header;
