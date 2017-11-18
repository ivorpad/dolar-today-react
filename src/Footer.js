import React from 'react';

const Footer = (props) => (
  <div className="footer">
    ${"TRM  " + props.trm + " / 1 VEF = " + props.vef}
  </div>
);

export default Footer;
