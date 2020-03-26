import React from "react";
import ValidationError from "../../Utils/ValidationError";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      hidden: true
    };
  }

  toggleShow = () => {
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }));
  };

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
        <ValidationError message={this.state.error} />
        <label htmlFor="user_email">Email Address:</label>
        <input type="email" name="user_email" />
        <label htmlFor="password">Password:</label>
        <input type={this.state.hidden ? "password" : "text"} name="password" />
        <input type="checkbox" onChange={this.toggleShow} />
        <label>Show Password</label>
        <input type="submit" value="Login" />
      </form>
    );
  }
}
