import { createLogin } from '.';

const createLoginArray = (arr) => {
  return arr.map(createLogin);
};

export default createLoginArray;
