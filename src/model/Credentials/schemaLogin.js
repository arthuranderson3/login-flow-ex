import Joi from 'joi';
const { string } = Joi.types();

const schemaLogin = Joi.object({
  username: string.alphanum().min(3).max(30).required(),
  password: string.pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
});

export default schemaLogin;
