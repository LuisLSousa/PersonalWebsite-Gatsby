import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <section id="footer">
      <p>© {new Date().getFullYear()} Luís Sousa</p>
      <p>Built with GatsbyJS, GraphQL, and many hours of centering divs</p>
    </section>
  );
};

export default Footer;
