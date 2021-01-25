import { createCredentialsDb } from '../../service/Db';

const queryFindByUsername = (username) => {
  return createCredentialsDb().then((db) =>
    db.find({
      selector: {
        username: { $eq: username },
      },
    })
  );
};

export default queryFindByUsername;
