import React from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
// import { Link } from "react-router-dom";

export default class SignupPage extends React.Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleSignupSuccess = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="signup-main">
        <SignupForm onSignupSuccess={this.handleSignupSuccess} />
      </div>
    );
  }
}
