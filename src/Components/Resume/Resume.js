import React from "react";
import Navbar from "../Navbar/Navbar";
import myResume from "../../resume.svg";
import download from "../../Resume.pdf";

import "./Resume.css";

function Resume() {
  return (
    <div>
      <Navbar />
      <div className='resume__download'>
        <img src={myResume} alt='resume' />
        <h1>RESUMÉ</h1>
        <span>What I've been up to in my professional life</span>
        <a href={download} download>
          <button>Download PDF Version</button>
        </a>
      </div>
    </div>
  );
}

export default Resume;
