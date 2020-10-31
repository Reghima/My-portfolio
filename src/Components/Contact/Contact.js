import React from "react";
import mailbox from "../../SVG/mailbox.svg";
import "./Contact.css";

function Contact() {
  return (
    <div className='mailbox__outerContainer'>
      <div className='mailbox__innerContiner'>
        <img src={mailbox} alt='mailbox' />
        <div className='mailbox'>
          <h3>Drop me a line at :</h3>
          <a href='mailto:marwen.reghima@gmail.com'>marwen.reghima@gmail.com</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
