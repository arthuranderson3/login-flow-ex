import React, { useState } from 'react';
import { createRegistration } from '../model/Credentials';
import { useAuth } from '../provider/ProvideAuth';
import { useHistory } from 'react-router-dom';

const RegisterPage = () => {
  const auth = useAuth();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeUsername = (evt) => {
    setErrorMessage('');
    setUsername(evt.target.value);
  };

  const onChangePassword = (evt) => {
    setErrorMessage('');
    setPassword(evt.target.value);
  };
  const onChangeRepeatPassword = (evt) => {
    setErrorMessage('');
    setRepeatPassword(evt.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    auth
      .register(createRegistration({ username, password, repeatPassword }))
      .then(() => {
        history.replace('/');
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setUsername('');
        setPassword('');
        setRepeatPassword('');
      });
  };

  let alertMessage = '';
  if (errorMessage !== '') {
    alertMessage = (
      <div className='alert alert-danger' role='alert'>
        {errorMessage}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Register Account</h3>
      {alertMessage}
      <div className='form-group'>
        <label>User name</label>
        <input
          type='text'
          value={username}
          className='form-control'
          placeholder='Enter Username'
          onChange={onChangeUsername}
          required
        />
      </div>

      <div className='form-group'>
        <label>Password</label>
        <input
          type='password'
          value={password}
          className='form-control'
          placeholder='Enter password'
          onChange={onChangePassword}
          required
        />
      </div>

      <div className='form-group'>
        <label>Repeat Password</label>
        <input
          type='password'
          value={repeatPassword}
          className='form-control'
          placeholder='Enter password'
          onChange={onChangeRepeatPassword}
          required
        />
      </div>

      <button type='submit' className='btn btn-primary btn-block'>
        Register
      </button>
      <p className='forgot-password text-right'>
        Already registered <a href='/login'>login?</a>
      </p>
    </form>
  );
};

export default RegisterPage;
