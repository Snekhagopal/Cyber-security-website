import React from "react";
import "../stylesheet/Services.scss";
import Gif1 from '../assets/mobile-security-icon.gif';
import Gif2 from '../assets/mobile-security-icon.gif';
import Gif3 from '../assets/network-security-icon.gif';
import Gif4 from '../assets/server-security-icon.gif';




// previous one
// <div className="services-right-left-subcontent-1">
// <h3>Web security</h3>
// <p>Comprehensive VAPT assessments for your web applications.</p>
// <img src={Gif1} width='50px' height='50px'></img>
// </div>
// <div className="services-right-left-subcontent-2">
// <h3>Web security</h3>
// <p>Comprehensive VAPT assessments for your web applications.</p>
// <img src={Gif1} width='50px' height='50px'></img>
// </div>
// </div>
// <div className="services-new-right-content-2">
// <div className="services-left-right-subcontent-1"><h3>Web security</h3>
// <p>Comprehensive VAPT assessments for your web applications.</p>
// <img src={Gif1} width='50px' height='50px'></img>
// </div>
// <div className="services-left-right-subcontent-2"><h3>Web security</h3>
// <p>Comprehensive VAPT assessments for your web applications.</p>
// <img src={Gif1} width='50px' height='50px'></img>
// </div>
// </div>
function Services() {
  return (
    <div className="sevices-main-div">
      <div className="services-left">
        <div className="services-left-subdiv">
          <h2 className="services-h2-main">Our Services</h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </div>
      </div>
      <div className="services-right">
        <div className="services-right-subdiv-1">
          <div className="services-right-content-1">
            <h2 className="services-h2">Web Security</h2>
            <p>Comprehensive VAPT assessments for your web applications.</p>
          </div>
          <div className="services-right-content-2">
          <h2 className="services-h2">Mobile Security</h2>
            <p>
              Securing your mobile applications from vulnerabilities and
              threats.
            </p>
          </div>
        </div>
        <div className="services-right-subdiv-2">
          <div className="services-right-content-3">
          <h2 className="services-h2">Infrastructure Security</h2>
            <p>
            Protecting your IT infrastructure from cyber threats.
            </p>
          </div>

          <div className="services-right-content-4">
          <h2 className="services-h2">CyberSecurity for Individuals</h2>
            <p>
            Ensuring the online safety of VIPs.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Services;
