import React from "react";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>NAME :</label>
        <input type="text" name="username" id="username" placeholder=" EX :kishore" />
        <br />
        <label>email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="EX :kk@dorustree.in"
        />
        <br />
        <button className="btn" type="submit">
          Login
        </button>
        <button id="button" type="reset">
          Reset
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
