import React from "react";
import "./Styles.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <a className="navbar-brand navbar-name" href="#home">
          Portfolio.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link link-color" href="#home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-color" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-color" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-color" href="#eduexp">
                Education & Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-color" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
