const createLogin = (credentials) => {
  // Note: when posting to pouchdb result is { id, rev }
  //       versus get result is { _id, _rev }
  const { _id, _rev, username, password } = credentials;
  let { id, rev } = credentials;
  if (id === undefined) {
    id = _id;
  }
  if (rev === undefined) {
    rev = _rev;
  }
  return { id, rev, username, password };
};

export default createLogin;
