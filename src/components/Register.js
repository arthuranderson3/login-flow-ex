import React, { useState } from 'react';

const Register = (props) => {
  const { registerUser } = props;
  const [uname, setUname] = useState();
  const [pswd, setPswd] = useState();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    registerUser({ uname, pswd });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Register Account</h3>

      <div className="form-group">
        <label>User name</label>
        <input
          type="text"
          name="uname"
          value={uname}
          className="form-control"
          placeholder="User name"
          onChange={(evt) => setUname(evt.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="pswd"
          value={pswd}
          className="form-control"
          placeholder="Enter password"
          onChange={(evt) => setPswd(evt.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Register
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="/login">login?</a>
      </p>
    </form>
  );
};

export default Register;
