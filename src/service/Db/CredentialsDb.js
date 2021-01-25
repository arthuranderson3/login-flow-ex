import PouchDb from 'pouchdb-browser';
import MangoQueries from 'pouchdb-find';

PouchDb.plugin(MangoQueries);

const createCredentialsDb = () => {
  return new Promise((resolve, reject) => {
    const db = new PouchDb('credentials');

    db.createIndex({
      index: {
        fields: ['username'],
      },
    })
      .then(() => {
        resolve(db);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const destroyCredentialsDb = () => {
  const credentialsDb = new PouchDb('credentials');
  return credentialsDb.destroy();
};

export { createCredentialsDb, destroyCredentialsDb };
