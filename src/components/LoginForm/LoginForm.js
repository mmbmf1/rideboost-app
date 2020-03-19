import React from "react";

function LoginForm() {
  return (
    <form>
      <label for="email">Email Address:</label>
      <input type="email" name="email" />
      <label for="password">Password:</label>
      <input type="password" name="password" />
      <input type="submit" value="Login" />
    </form>
  );
}

export default LoginForm;
