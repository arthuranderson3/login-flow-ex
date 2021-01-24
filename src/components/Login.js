import React from 'react';

const Login = () => {
  return (
    <form>
      <h3>Login</h3>

      <div className="form-group">
        <label>User name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter user name"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Login
      </button>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
};

export default Login;
