import React from "react";
import logo from "../../logo.png";
import "./Navbar.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Resume from "../../Resume.pdf";

function Navbar() {
  return (
    <div className='navbarOuterContainer'>
      <img className='personal__logo' src={logo} alt='personal logo' />
      <ul className='navbarInnerContainer'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/projects'>Projects</a>
        </li>
        <li>
          <a href='/resume'>Resume</a>
        </li>
      </ul>
      <ul className='socials__accounts'>
        <li>
          <a
            href='https://www.linkedin.com/in/marouene-reghima/'
            target='blank'
          >
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a href='https://github.com/Reghima' target='blank'>
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a href='https://twitter.com/MReghima' target='blank'>
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/marourg/' target='blank'>
            <InstagramIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
