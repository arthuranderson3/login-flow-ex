import React from 'react';
import { destroyCredentialsDb } from '../service/Db';
import { useAuth } from '../provider/ProvideAuth';

const HomePage = () => {
  const auth = useAuth();
  if (auth.isAuthenticated === false) {
    return (
      <div>
        <h3>Home Component</h3>
        <div className='alert alert-danger' role='alert'>
          Error: you are not logged in! How did you get here?
        </div>
      </div>
    );
  }
  const onClickResetDb = () => {
    destroyCredentialsDb();
    auth.logout();
  };
  return (
    <div>
      <h3>Home Component</h3>
      <p>welcome {auth.user.username}</p>
      <button className='btn btn-primary btn-block' onClick={onClickResetDb}>
        Reset Database
      </button>
    </div>
  );
};

export default HomePage;
