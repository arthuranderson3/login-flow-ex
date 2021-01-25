import React from 'react';
import { useAuth } from '../provider/ProvideAuth';
import { useHistory } from 'react-router-dom';

const LogoutPage = () => {
  const history = useHistory();
  const auth = useAuth();
  const onClickLogout = () => {
    auth.logout().then(() => {
      history.replace('/login');
    });
  };

  return (
    <div>
      <h3>Logout</h3>
      <button
        type='button'
        className='btn btn-primary btn-block'
        onClick={onClickLogout}>
        Logout
      </button>
    </div>
  );
};

export default LogoutPage;
