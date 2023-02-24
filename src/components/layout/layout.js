import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/theme";
import PropTypes from "prop-types";
import Navigation from "../navigation/navigation";
import Seo from "../seo";

import "./layout.css";

const changeThemeColor = (theme) => {
  document.documentElement.setAttribute("theme", theme);
}

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  // Change theme
  useEffect(() => {
    changeThemeColor(theme);
  }, [theme]);

  return (
    <div>
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
