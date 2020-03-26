import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";

export default class LoginPage extends React.Component {
  handleLoginSuccess = () => {
    this.props.history.push(`/demopage`);
  };

  render() {
    return (
      <div className="login-main">
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
        <div className="signup-link">
          <p>Don't Have an Account?</p>
          <Link to={"/signup"}>Signup!</Link>
        </div>
      </div>
    );
  }
}
