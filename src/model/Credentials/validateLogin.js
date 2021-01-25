import { schemaLogin } from '.';
import { InvalidLogin } from '../Errors';
import { errorToMessage } from '../JoiHelpers';

const validateLogin = (credentials) => {
  const result = schemaLogin.validate(credentials);
  if (result.error !== undefined) {
    const msg = errorToMessage(result);
    throw new InvalidLogin(msg);
  }
  return result.value;
};

export default validateLogin;
