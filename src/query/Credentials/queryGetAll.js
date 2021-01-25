import { createCredentialsDb } from '../../service/Db';
import { createLoginArray } from '../../model/Credentials';

const queryGetAll = () => {
  return createCredentialsDb()
    .then((db) => db.allDocs())
    .then((result) => {
      if (result !== undefined) {
        return createLoginArray(result.rows);
      }
    });
};

export default queryGetAll;
