import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

export default class LoginPage extends React.Component {
  handleLoginSuccess = () => {
    this.props.history.push(`/demopage`);
  };

  render() {
    return <LoginForm onLoginSuccess={this.handleLoginSuccess} />;
  }
}
