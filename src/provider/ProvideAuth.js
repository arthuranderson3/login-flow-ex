import React, { useContext, createContext, useState } from 'react';
import {
  createLogin,
  createNewLogin,
  createUserToken,
  validateLogin,
  validateRegistration,
} from '../model/Credentials';
import { InvalidLogin, UsernameExistsError } from '../model/Errors';
import { queryAdd, queryFindByUsername } from '../query/Credentials';

const authContext = createContext();

const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const updateState = (user, cb) => {
    setUser(user);
    setIsAuthenticated(user !== null);
    cb();
  };
  const login = (userCredentials) => {
    return new Promise((resolve, reject) => {
      /**
       * authenticate login
       * - validate the login credentials
       * - query for credential by username
       * - check passwords are equal
       * - create token
       */

      const checkUserDoc = (result) => {
        // user doc exist?
        if (result.docs.length === 1) {
          return result.docs[0];
        }
        // not found - invalid username
        throw new InvalidLogin('invalid login attempt');
      };

      const checkPasswordsMatch = (credentials) => {
        // do the passwords match
        if (credentials.password === userCredentials.password) {
          return credentials;
        }
        // password mismatch
        throw new InvalidLogin('invalid login attempt');
      };
      try {
        validateLogin(userCredentials); // this will throw if invalid

        const { username } = userCredentials;
        queryFindByUsername(username)
          .then((result) => checkUserDoc(result))
          .then((userDoc) => createLogin(userDoc))
          .then((userLogin) => checkPasswordsMatch(userLogin))
          .then((userLogin) => createUserToken(userLogin))
          .then((user) => updateState(user, resolve))
          .catch((error) => updateState(null, () => reject(error)));
      } catch (error) {
        updateState(null, () => reject(error));
      }
    });
  };

  const register = (credentials) => {
    return new Promise((resolve, reject) => {
      /**
       * Registration:
       *  1) validate credential and reject if error thrown.
       *  2) Username exist? yes, reject it, no, proceed ...
       *  3) Add credentials
       *  4) return token
       */

      const checkUsernameExists = (result) => {
        /**
         * username not found
         */
        if (result && result.docs && result.docs.length === 0) {
          return credentials;
        }
        const { username } = credentials;
        throw new UsernameExistsError(`username: ${username} already exists`);
      };

      try {
        validateRegistration(credentials);
        const { username } = credentials;
        queryFindByUsername(username)
          .then((result) => checkUsernameExists(result)) // check - throws error when username not present
          .then((userCredentials) => createNewLogin(userCredentials)) // create new login credentials
          .then((userLogin) => queryAdd(userLogin)) // add returns the new id and rev
          .then((result) => createLogin({ ...result, ...credentials })) // combine { id, rev } w/ { username, password }
          .then((userLogin) => createUserToken(userLogin)) // transform to token
          .then((user) => updateState(user, resolve))
          .catch((error) => updateState(null, () => reject(error)));
      } catch (error) {
        return updateState(null, () => reject(error));
      }
    });
  };

  const logout = () => {
    return new Promise((resolve, reject) => updateState(null, resolve));
  };

  return {
    isAuthenticated,
    user,
    login,
    logout,
    register,
  };
};

export { useAuth, ProvideAuth };
