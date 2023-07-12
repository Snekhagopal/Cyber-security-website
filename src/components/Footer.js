import React from "react";
import FooterbBackground from "../UI/FooterbBackground";
import "../stylesheet/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <FooterbBackground>
      <div className="footer">
        <div className="footer-left">
         <a href="https://www.linkedin.com/in/neeraj-kumar-cybersecurity/" target="about" ><FontAwesomeIcon icon={faLinkedin} /></a>
         <a href="https://www.instagram.com/neerajkumarcyber/" target="about" ><FontAwesomeIcon icon={faInstagram} /></a>
         <a href="https://www.youtube.com/@neerajkumarcyber" target="about" ><FontAwesomeIcon icon={faYoutube} /></a>
        </div>

        <div className="footer-right">
          <p>@{year} All Rights Reserved.</p>
        </div>
      </div>
    </FooterbBackground>
  );
};

export default Footer;
