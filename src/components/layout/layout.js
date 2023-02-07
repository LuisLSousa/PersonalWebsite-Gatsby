import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/theme";
import PropTypes from "prop-types";
import Navigation from "../navigation/navigation";
import Seo from "../seo";

import "./layout.css";

// TODO read the colors from a colors.js file

const changeThemeColor = (theme) => {
  const rootTheme = document.querySelector(':root');

  if (theme === "light") {
    rootTheme.style.setProperty('--color-bg', '#f7f3e6'); // beige
    rootTheme.style.setProperty('--color-primary', 'rgb(0, 153, 153)'); // teal
    rootTheme.style.setProperty('--color-primary-faded', 'rgba(57, 114, 255, 0.5)'); // light blue
    rootTheme.style.setProperty('--color-primary-variant', 'rgba(51, 220, 220, 0.4)');
    rootTheme.style.setProperty('--color-secondary', 'rgba(85, 85, 85, 1)'); // dark gray
    rootTheme.style.setProperty('--color-secondary-faded', 'rgba(85, 85, 85, 0.6)'); // dark gray
    rootTheme.style.setProperty('--color-secondary-light', 'rgba(85, 85, 85, 0.2)'); // dark gray
    rootTheme.style.setProperty('--color-border', 'rgba(85, 85, 85, 0.8)'); // TBD


    // rootTheme.style.setProperty('--color-bg', '#f2f2f2'); // 
    // rootTheme.style.setProperty('--color-primary', 'rgb(0, 157, 224)'); // IST Blue
    // rootTheme.style.setProperty('--color-primary-faded', 'rgba(0, 157, 224, 0.5)'); // IST Blue
    // rootTheme.style.setProperty('--color-primary-variant', 'rgba(102, 204, 255, 0.4)'); // light blue
    // rootTheme.style.setProperty('--color-secondary', '#010120'); // dark blue
    // rootTheme.style.setProperty('--color-secondary-faded', 'rgba(0, 0, 0, 0.6)'); // TBD
    // rootTheme.style.setProperty('--color-secondary-light', 'rgba(0, 0, 0, 0.2)'); // TBD
    // rootTheme.style.setProperty('--color-border', 'rgba(0, 0, 0, 0.8)'); // TBD
  }
  else {
    rootTheme.style.setProperty('--color-bg', '#010120');
    rootTheme.style.setProperty('--color-primary', 'rgb(77, 181, 255)');
    rootTheme.style.setProperty('--color-primary-faded', 'rgb(77, 181, 255, 0.5)');
    rootTheme.style.setProperty('--color-primary-variant', 'rgba(9, 58, 131, 0.4)');
    rootTheme.style.setProperty('--color-secondary', '#fff');
    rootTheme.style.setProperty('--color-secondary-faded', 'rgba(255, 255, 255, 0.6)');
    rootTheme.style.setProperty('--color-secondary-light', 'rgba(255, 255, 255, 0.2)');
    rootTheme.style.setProperty('--color-border', 'rgba(255, 255, 255, 0.8)');
  }
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
