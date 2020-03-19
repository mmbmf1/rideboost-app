import React from "react";

function SignupForm() {
  return (
    <form>
      <label htmlFor="first_name">First Name:</label>
      <input type="text" name="first_name" />
      <label htmlFor="last_name">Last Name:</label>
      <input type="text" name="last_name" />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" />
      <label htmlFor="email">Email Address:</label>
      <input type="email" name="email" />
      <label htmlFor="phone">Phone Number:</label>
      <input type="tel" name="phone" />
      <label htmlFor="location">Location:</label>
      <input type="text" name="location" />
      <input type="submit" value="Create Account" />
    </form>
  );
}

export default SignupForm;
