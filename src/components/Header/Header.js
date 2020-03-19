import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";

export default class Header extends React.Component {
  render() {
    const content = this.props.content;
    return (
      <nav role="navigation" className="nav">
        <div id="nav-left">
          <Link to="/">
            <FontAwesomeIcon icon={faTaxi} />
            {content.title}
          </Link>
        </div>
        <div id="nav-right">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/demopage">Demo</Link>
        </div>
      </nav>
    );
  }
}
