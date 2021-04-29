function loginUser(username, password) {
  const validUser = {
    username: 'admin',
    password: '1234',
  };

  const userExists = username === validUser.username;
  const passwordIsCorrect = password === validUser.password;

  if (userExists && passwordIsCorrect) {
    return Promise.resolve(validUser);
  }

  return Promise.reject({
    error: {
      description: 'Wrong username or password',
    },
  });
}

export { loginUser };
