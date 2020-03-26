import React from "react";
import SignupForm from "../../components/SignupForm/SignupForm";

export default class SignupPage extends React.Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleSignupSuccess = () => {
    this.props.history.push("/demopage");
  };

  render() {
    return <SignupForm onSignupSuccess={this.handleSignupSuccess} />;
  }
}
