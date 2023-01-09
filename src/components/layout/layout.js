import React from "react";
import PropTypes from "prop-types";
import Navigation from "../navigation/navigation";
import Seo from "../seo";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="theme">
      <Seo />
      <Navigation />
      <div className="layout">
        <main id="main-content">{children}</main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
