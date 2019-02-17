import React from "react";

const RegisterForm = ({
  change,
  formValue: { username, email, password },
  submit
}) => {
  return (
    <form onSubmit={submit} className="auth-form">
      <div className="form-group">
        <input
          type="text"
          className="form-control input-form"
          placeholder="Enter your name"
          name="username"
          onChange={change}
          value={username}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control input-form"
          placeholder="Enter your email"
          name="email"
          onChange={change}
          value={email}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control input-form"
          placeholder="Enter your password"
          name="password"
          onChange={change}
          value={password}
        />
      </div>
      <div className="form-group text-center">
        <button
          disabled={!username || !email || !password}
          type="submit"
          className="form-btn"
        >
          Create an account
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
