import { createUser } from '.';

const createUserArray = (arr) => {
  return arr.map(createUser);
};

export default createUserArray;
