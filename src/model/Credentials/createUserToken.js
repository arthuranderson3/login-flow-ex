const createUserToken = (credential) => {
  const { id, username } = credential;
  return { id, username };
};

export default createUserToken;
