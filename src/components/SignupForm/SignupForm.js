import React from "react";
import ValidatioError from "../../utils/ValidationError";
import AuthApiService from "../../services/auth-api-service";

export default class SignupForm extends React.Component {
  constructor() {
    super();
    this.state = {
      error: "",
      hidden: true
    };
  }

  static defaultProps = {
    onSignupSuccess: () => {}
  };

  toggleShow = () => {
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }));
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
    const error = this.state.error;
    return (
      <form className="registration-form" onSubmit={e => this.handleSubmit(e)}>
        <ValidatioError message={error} />
        <label htmlFor="first_name">First Name:</label>
        <input type="text" name="first_name" />
        <label htmlFor="last_name">Last Name:</label>
        <input type="text" name="last_name" />
        <label htmlFor="zip_code">ZIP Code:</label>
        <input type="text" name="zip_code" />
        <label htmlFor="user_email">Email Address:</label>
        <input type="email" name="user_email" />
        <label htmlFor="password">Password:</label>
        <input type={this.state.hidden ? "password" : "text"} name="password" />
        <div>
          <input type="checkbox" onChange={this.toggleShow} />
          <label>Show Password</label>
        </div>
        <input type="submit" value="Create Account" />
      </form>
    );
  }
}
