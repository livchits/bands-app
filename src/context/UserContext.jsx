import * as React from 'react';

// import auth from '../services/mockedAuth';

const UserContext = React.createContext();

function UserProvider(props) {
  const [user, setUser] = React.useState();

  /* React.useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid } = auth.currentUser; //también se puede usar user
        const userData = { displayName, email, uid };
        setUser(userData);
        window.localStorage.setItem(
          `${process.env.REACT_APP_APP_ID}_user`,
          JSON.stringify(userData)
        );
      } else {
        setUser(null);
        window.localStorage.removeItem(`${process.env.REACT_APP_APP_ID}_user`);
      }
    });

    return () => unsuscribe();
  }, []); */

  return <UserContext.Provider value={[user, setUser]} {...props} />;
}

function useUser() {
  const [user, setUser] = React.useContext(UserContext);

  return [user, setUser];
}

export { UserProvider, useUser };
