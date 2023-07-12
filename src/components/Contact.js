import React from "react";
import "../stylesheet/Contact.scss";
import ContactBackground from "../UI/ContactBackground";

const Contact = () => {
  return (
    <ContactBackground >
      <h1>Contact Me</h1>
      <div className="contact" id="contact">
        <div className="Get-in-touch">
          <h3>Get in Touch</h3>
          <p>With one of the growing CyberSecurity company<br></br> to prevent yourself from threads </p>
        </div>
        <div className="contact-form">
          <form>
            <div className="align-input">
              <div className="name-inp">
                <input type="text" placeholder="Name" />
              </div>
              <div className="email-inp">
                <input type="text" placeholder="Email" />
              </div>
            </div>
            <div className="textarea" placeholder="Message">
              <div>
                <textarea type="text" ></textarea>
              </div>
            </div>
            <button className="submitbtn">
              <span>Submit</span>
            </button>
          </form>
        </div>
      </div>
    </ContactBackground>
  );
};

export default Contact;
