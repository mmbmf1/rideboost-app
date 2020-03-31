import React from "react";
import RideBoostContext from "../../contexts/RideBoostContext";
import ValidationError from "../../Utils/ValidationError";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";

export default class LoginForm extends React.Component {
  static contextType = RideBoostContext;

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
        TokenService.saveUserId(res.payload.user_id);
        this.context.setLoggedIn(true);
        this.props.onLoginSuccess();
      })
      .catch(res => {
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
        <div>
          <input type="checkbox" onChange={this.toggleShow} />
          <label>Show Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    );
  }
}
