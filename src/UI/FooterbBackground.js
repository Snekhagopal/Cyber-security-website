import React from "react";
import "../stylesheet/FooterBackground.scss";

const FooterbBackground = (props) => {
  return <div className="footer-bg">{props.children}</div>;
};

export default FooterbBackground;
