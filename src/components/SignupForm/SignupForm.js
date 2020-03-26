import React from "react";
import AuthApiService from "../../services/auth-api-service";

export default class SignupForm extends React.Component {
  constructor() {
    super();
    this.state = {
      error: ""
    };
  }

  static defaultProps = {
    onSignupSuccess: () => {}
  };

  handleSubmit = e => {
    e.preventDefault();
    const { first_name, last_name, user_email, password, zip_code } = e.target;

    this.setState({ error: null });

    AuthApiService.postUser({
      first_name: first_name.value,
      last_name: last_name.value,
      user_email: user_email.value,
      password: password.value,
      zip_code: zip_code.value
    })
      .then(user => {
        first_name.value = "";
        last_name.value = "";
        user_email.value = "";
        password.value = "";
        zip_code.value = "";
        this.props.onSignupSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    //Add validation error component
    // const error = this.state.error;
    return (
      <form className="registration-form" onSubmit={e => this.handleSubmit(e)}>
        <label htmlFor="first_name">First Name:</label>
        <input type="text" name="first_name" />
        <label htmlFor="last_name">Last Name:</label>
        <input type="text" name="last_name" />
        <label htmlFor="user_email">Email Address:</label>
        <input type="email" name="user_email" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" />
        <label htmlFor="zip_code">ZIP Code:</label>
        <input type="text" name="zip_code" />
        <input type="submit" value="Create Account" />
      </form>
    );
  }
}
