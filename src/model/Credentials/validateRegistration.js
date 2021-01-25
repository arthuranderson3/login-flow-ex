import { schemaRegistration } from '.';
import { InvalidRegistration } from '../Errors';
import { errorToMessage } from '../JoiHelpers';

const validateRegistration = (credentials) => {
  const result = schemaRegistration.validate(credentials);
  if (result.error !== undefined) {
    const msg = errorToMessage(result);
    throw new InvalidRegistration(msg);
  }
  return result.value;
};

export default validateRegistration;
