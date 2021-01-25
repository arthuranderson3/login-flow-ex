import { createCredentialsDb } from '../../service/Db';

const queryGet = (id) => {
  return createCredentialsDb().then((db) => db.get(id));
};

export default queryGet;
