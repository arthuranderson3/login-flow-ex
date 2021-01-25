import { createCredentialsDb } from '../../service/Db';

const queryAdd = (credentials) => {
  return createCredentialsDb().then((db) => db.post(credentials));
};

export default queryAdd;
