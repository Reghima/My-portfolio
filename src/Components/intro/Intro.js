import React from "react";
import "./Intro.css";
import intro from "../../SVG/intro.svg";

function Intro() {
  return (
    <div className='intro__outerContainer'>
      <img className='hello__img' src={intro} alt='Hello' />
      <div className='intro__innerContainer'>
        <h1>Short Introduction</h1>
        <div className='intro_paragraph'>
          <p>
            Hey there! Let me introduce myself again, my name is Marwen, and I
            am a Junior Full Sstack JavaScript Developer. I enjoy working on
            both front-end and backend, but I work mostly on front-end part of
            apps. My go to library on front-end is React, and NodeJS on backend.
          </p>
          <p>
            Currently , I'm looking for a new job opportunity or a graduation
            internship as a front-end ,Back-end or even full stack javascript
            offer .
          </p>
          <p>
            If you'd like, you can read more about me here, or scroll to see my
            development backpack (or let's say technologies that I use on a
            daily basis ).
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
