import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <Link to="">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link to="">
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
    </footer>
  );
}

export default Footer;
