import React from "react";

import "./footer.css"

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <p>© {new Date().getFullYear()} Luís Sousa</p>
      <p>Built with GatsbyJS, GraphQL, and many hours of centering divs</p>
    </footer>
  );
};

export default Footer;
