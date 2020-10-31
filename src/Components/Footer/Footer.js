import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import logo from "../../logo.png";
import Resume from "../../Resume.pdf";

import "./Footer.css";

function Footer() {
  return (
    <div className='footer__outerContainer'>
      <div className='footer__innerContainer'>
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
            <a href={Resume} target='blank'>
              Resume
            </a>
          </li>
        </ul>
        <div className='footer__about'>
          <img className='personal__logo' src={logo} alt='personal logo' />
          <p className='footer__aboutMe'>
            Junior Full-stack JavaScript Developer I create stuff with ❤️ in
            React and NodeJS
          </p>
          <a class='email' href='mailto:marwen.reghima@gmail.com'>
            marwen.reghima@gmail.com
          </a>
          <span className='copyright'>
            Copyright © 2020 Marwen Reghima. All rights reserved. JavaScript
            full‑stack developer
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
