import React, { useState } from 'react';
import { createNewLogin } from '../model/Credentials';
import { useAuth } from '../provider/ProvideAuth';
import { useHistory, useLocation } from 'react-router-dom';

const LoginPage = () => {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  let { from } = location.state || { from: { pathname: '/' } };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeUsername = (evt) => {
    setErrorMessage('');
    setUsername(evt.target.value);
  };

  const onChangePassword = (evt) => {
    setErrorMessage('');
    setPassword(evt.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    auth
      .login(createNewLogin({ username, password }))
      .then(() => {
        history.replace(from);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setUsername('');
        setPassword('');
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
      <h3>Login</h3>

      {alertMessage}

      <div className='form-group'>
        <label>User name</label>
        <input
          type='text'
          className='form-control'
          placeholder='Enter user name'
          value={username}
          onChange={onChangeUsername}
          required
        />
      </div>

      <div className='form-group'>
        <label>Password</label>
        <input
          type='password'
          className='form-control'
          placeholder='Enter password'
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>

      <button type='submit' className='btn btn-primary btn-block'>
        Login
      </button>
    </form>
  );
};

export default LoginPage;
