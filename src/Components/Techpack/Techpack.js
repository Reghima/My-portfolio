import React from "react";
import "./Techpack.css";

function Techpack({ techImg, techName, techDesc }) {
  return (
    <div className='pack__outerContainer'>
      <img className='tech__img' src={techImg} alt='tech' />
      <div className='pack__innerContainer'>
        <h3>{techName}</h3>
        <p>{techDesc}</p>
      </div>
    </div>
  );
}

export default Techpack;
