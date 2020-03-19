import React from "react";

function SignupForm() {
  return (
    <form>
      <label for="first_name">First Name:</label>
      <input type="text" name="first_name" />
      <label for="last_name">Last Name:</label>
      <input type="text" name="last_name" />
      <label for="password">Password:</label>
      <input type="password" name="password" />
      <label for="email">Email Address:</label>
      <input type="email" name="email" />
      <label for="phone">Phone Number:</label>
      <input type="tel" name="phone" />
      <label for="location">Location:</label>
      <input type="text" name="location" />
      <input type="submit" value="Sign Up!" />
    </form>
  );
}

export default SignupForm;
