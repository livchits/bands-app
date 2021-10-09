import * as React from 'react';

interface User {
  username: string;
  password: string;
}

type ContextValue = [
  User | null,
  React.Dispatch<React.SetStateAction<User | null>>
];

const UserContext = React.createContext<ContextValue>({} as ContextValue);

function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(() => {
    const userData = window.sessionStorage.getItem('bands_app_user');
    return userData ? JSON.parse(userData) : null;
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
}

function useUser(): ContextValue {
  const [user, setUser] = React.useContext(UserContext);

  return [user, setUser];
}

export { UserProvider, useUser };
