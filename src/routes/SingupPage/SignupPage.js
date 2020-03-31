import React from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
// import { Link } from "react-router-dom";

export default class SignupPage extends React.Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleSignupSuccess = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="signup-main">
        <h3>Signup Form</h3>
        <SignupForm onSignupSuccess={this.handleSignupSuccess} />
        {/* <div>
          <p>Already Have an Account?</p>
          <Link to={"/login"}>Login</Link>
        </div> */}
      </div>
    );
  }
}
