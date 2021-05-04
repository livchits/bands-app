import * as React from 'react';

const UserContext = React.createContext();

function UserProvider(props) {
  const [user, setUser] = React.useState(
    () => JSON.parse(window.localStorage.getItem('bands_app_user')) || null
  );

  return <UserContext.Provider value={[user, setUser]} {...props} />;
}

function useUser() {
  const [user, setUser] = React.useContext(UserContext);

  return [user, setUser];
}

export { UserProvider, useUser };
