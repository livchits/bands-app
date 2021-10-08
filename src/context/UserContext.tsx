import * as React from 'react';

interface Context {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

const UserContext = React.createContext<Context>({} as Context);

function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<string | null>(() => {
    const userData = window.sessionStorage.getItem('bands_app_user');
    return userData ? JSON.parse(userData) : null;
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const { user, setUser } = React.useContext(UserContext);

  return { user, setUser };
}

export { UserProvider, useUser };
