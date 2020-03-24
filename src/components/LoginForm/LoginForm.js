import React from "react";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null
    };
  }
  handleSubmitJwtAuth = e => {
    e.preventDefault();
    this.setState({ error: null });
    const { user_email, password } = e.target;

    AuthApiService.postLogin({
      user_email: user_email.value,
      password: password.value
    })
      .then(res => {
        user_email.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        console.log(res.error);
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <form className="login-form" onSubmit={e => this.handleSubmitJwtAuth(e)}>
        <label htmlFor="user_email">Email Address:</label>
        <input type="email" name="user_email" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" />
        <input type="submit" value="Login" />
      </form>
    );
  }
}
