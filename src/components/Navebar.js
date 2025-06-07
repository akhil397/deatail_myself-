import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo">
          MyProfile
        </a>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a href="/resume.pdf" download className="resume-button">
          Download Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
