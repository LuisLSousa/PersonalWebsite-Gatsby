import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Navigation from "./navigation";

import SEO from "./seo";
import "./layout.css";

// Global CSS
const StyledLayout = styled.div`
  margin: 0 auto;
  max-width: 80vw;
  display: flex;
  flex-direction: column;
`;

const StyledTheme = styled.div`
  background-color: #121212;
  color: #effffa;
  width: 100vw;
  max-width: 100%;
`;

const Layout = ({ children }) => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      const WOW = require("wowjs");
      new WOW.WOW({ live: false, mobile: false }).init();
    }
  }, []);

  return (
    <StyledTheme>
      <SEO />
      <Navigation />
      <StyledLayout>
        <main id="main-content">{children}</main>
      </StyledLayout>
    </StyledTheme>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
