import PouchDb from 'pouchdb-browser';
import MangoQueries from 'pouchdb-find';

PouchDb.plugin(MangoQueries);

const userDb = new PouchDb('users');

userDb
  .createIndex({
    index: {
      fields: ['uname'],
    },
  })
  .then((result) => {
    //console.log( result);
  })
  .catch((err) => {
    console.error(err);
  });

export default userDb;
