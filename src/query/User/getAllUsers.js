import { UserDb } from '../../service/User';
import { createUserArray } from '../../model/User';

const getAllUsers = () => {
  return UserDb.allDocs()
    .then((result) => {
      if (result !== undefined) {
        console.log(result);
        return createUserArray(result.rows);
      }
    })
    .catch((err) => console.error(err));
};

export default getAllUsers;
