import React from "react";

const LoginForm = ({ change, formValue: { email, password }, submit }) => {
  return (
    <form onSubmit={submit} className="auth-form">
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
          disabled={!email || !password}
          type="submit"
          className="form-btn"
        >
          Let me in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
