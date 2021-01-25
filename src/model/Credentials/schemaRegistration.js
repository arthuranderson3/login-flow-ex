import Joi from 'joi';
const { string } = Joi.types();

const schemaRegistration = Joi.object({
  username: string.alphanum().min(3).max(30).required(),
  password: string.pattern(/^[a-zA-Z0-9]{3,30}$/).required(), // same as above
  repeatPassword: Joi.ref('password'),
}).with('password', 'repeatPassword');

export default schemaRegistration;
