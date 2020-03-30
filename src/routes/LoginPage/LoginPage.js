import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import RideBoostContext from "../../contexts/RideBoostContext";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";

export default class LoginPage extends React.Component {
  static contextType = RideBoostContext;

  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    const user_id = TokenService.getUserId();
    this.props.history.push(`/dashboard/${user_id}`);
  };

  render() {
    return (
      <div className="login-main">
        <h3>Login Form</h3>
        <p>Login to access your dashboard</p>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
        <div className="signup-link">
          <p>
            Don't Have an Account? <Link to={"/signup"}>Signup!</Link>
          </p>
        </div>
      </div>
    );
  }
}
