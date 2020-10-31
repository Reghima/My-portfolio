import React from "react";
import "./Technologies.css";
import backpack from "../../SVG/backpack.svg";
import { Languages } from "../../Data/Languages";
import { Libraries } from "../../Data/Libraries";
import { Tools } from "../../Data/Tools";
import Techpack from "../Techpack/Techpack";

function Technologies() {
  return (
    <div className='technologies'>
      <div className='backpack'>
        <img className='tech__backpack' src={backpack} alt='Dev backpack' />
        <h1>My development backpack</h1>
      </div>
      <div className='packs'>
        <div className='pack__section'>
          <h1>Languages</h1>
          <div>
            {Languages.map((language) => (
              <Techpack
                techImg={language.img}
                techName={language.techName}
                techDesc={language.desc}
              />
            ))}
          </div>
        </div>
        <div className='pack__section'>
          <h1>Libraries and Frameworks</h1>
          <div>
            {Libraries.map((Librarie) => (
              <Techpack
                techImg={Librarie.img}
                techName={Librarie.techName}
                techDesc={Librarie.desc}
              />
            ))}
          </div>
        </div>
        <div className='pack__section'>
          <h1>Tools and Others</h1>
          <div>
            {Tools.map((tool) => (
              <Techpack
                techImg={tool.img}
                techName={tool.techName}
                techDesc={tool.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
