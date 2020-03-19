import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <Link to="https://github.com/mmbmf1">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link to="https://www.linkedin.com/in/michael-mace-kc/">
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
    </footer>
  );
}

export default Footer;
