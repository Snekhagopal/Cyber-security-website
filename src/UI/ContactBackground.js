import React from "react";

import "../stylesheet/ContactBackground.scss";
const ContactBackground = (props) => {
  return <div className="contact-bg">{props.children}</div>;
};

export default ContactBackground;
