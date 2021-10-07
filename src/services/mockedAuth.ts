function loginUser(username: string, password: string) {
  const validUser = {
    username: 'johndoe',
    password: 'pass',
  };

  const userExists = username === validUser.username;
  const passwordIsCorrect = password === validUser.password;

  if (userExists && passwordIsCorrect) {
    return Promise.resolve(validUser);
  }

  return Promise.reject({
    error: {
      message: 'Wrong username or password',
    },
  });
}

export { loginUser };
