import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { HomePage, LoginPage, LogoutPage, RegisterPage, NavBar } from '.';
import { ProvideAuth, useAuth } from '../provider/ProvideAuth';

const App = () => {
  return (
    <ProvideAuth>
      <Router>
        <div className='App'>
          <NavBar />
          <div className='auth-wrapper'>
            <div className='auth-inner'>
              <Switch>
                <PrivateRoute exact path='/'>
                  <HomePage />
                </PrivateRoute>
                <Route path='/login' component={LoginPage} />
                <Route path='/register' component={RegisterPage} />
                <Route path='/logout' component={LogoutPage} />
                <PrivateRoute path='/home'>
                  <HomePage />
                </PrivateRoute>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </ProvideAuth>
  );
};

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default App;
