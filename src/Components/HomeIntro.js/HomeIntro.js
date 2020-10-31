import React from "react";
import "./HomeIntro.css";
function HomeIntro() {
  return (
    <div className='home__intro'>
      <h3>Hi , my name is </h3>
      <h1 className='name'>Marwen Reghima.</h1>
      <h1 className='title'>I am a Junior Full Stack JavaScript Developer.</h1>
      <h2>I build apps using React on front-end, and Node.js on backend.</h2>

      <a href='mailto:marwen.reghima@gmail.com'>
        <button className='contact_btn'>Get in touch </button>
      </a>
    </div>
  );
}

export default HomeIntro;
