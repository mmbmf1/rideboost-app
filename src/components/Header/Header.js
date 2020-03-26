import React from "react";
import RideBoostContext from "../../contexts/RideBoostContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";
import TokenService from "../../services/token-service";

export default class Header extends React.Component {
  static contextType = RideBoostContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    TokenService.clearUserId();
    this.context.setLoggedIn(false);
  };

  renderLogoutLink() {
    return (
      <div id="nav-right">
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div id="nav-right">
        <Link to="/login">Login</Link>
        <Link to="/demopage">Demo</Link>
      </div>
    );
  }

  render() {
    const content = this.props.content;
    // console.log(content.content.title);
    return (
      <nav role="navigation" className="nav">
        <div id="nav-left">
          <Link to="/">
            <FontAwesomeIcon icon={faTaxi} />
            {content.title}
          </Link>
        </div>
        {this.context.loggedIn
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
        {/* <div id="nav-right">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/demopage">Demo</Link>
        </div> */}
      </nav>
    );
  }
}
