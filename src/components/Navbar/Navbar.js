import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Andrew G.
          </Link>
          <a
            href="https://github.com/garandrew102"
            className="github"
            rel="noopener noreferrer"
            target="_blank"
            onClick={closeMobileMenu}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/garandrew102/"
            className="linkedin"
            rel="noopener noreferrer"
            target="_blank"
            onClick={closeMobileMenu}
          >
            <FaLinkedin />
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resume"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-me"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
