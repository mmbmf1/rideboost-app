import React from "react";
import RideBoostContext from "../../contexts/RideBoostContext";
import ValidationError from "../../utils/ValidationError";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";

export default class LoginForm extends React.Component {
  static contextType = RideBoostContext;

  constructor() {
    super();
    this.state = {
      error: null,
      hidden: true,
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      hidden: !prevState.hidden,
    }));
  };

  handleSubmitJwtAuth = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    const { user_email, password } = e.target;

    AuthApiService.postLogin({
      user_email: user_email.value,
      password: password.value,
    })
      .then((res) => {
        user_email.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        TokenService.saveUserId(res.payload.user_id);
        this.context.setLoggedIn(true);
        this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <form
        className="login-form"
        onSubmit={(e) => this.handleSubmitJwtAuth(e)}
      >
        <div className="form-header">
          <ValidationError
            message={
              !this.state.error
                ? "Login in to access you dashboard"
                : this.state.error
            }
          />
        </div>
        <label htmlFor="user_email"></label>
        <input type="email" name="user_email" placeholder="Email" />
        <label htmlFor="password"></label>
        <input
          type={this.state.hidden ? "password" : "text"}
          name="password"
          placeholder="Password"
        />
        <div className="show-container">
          <input type="checkbox" onChange={this.toggleShow} />
          <label>Show Password</label>
        </div>
        <div className="button-container">
          <input className="button" type="submit" value="Login" />
        </div>
      </form>
    );
  }
}
