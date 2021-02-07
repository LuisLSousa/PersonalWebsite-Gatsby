import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Navigation from './navigation';
import SEO from "./seo";


import "./layout.css"

// Global CSS
const StyledLayout = styled.div`
    margin: 0 auto;
    max-width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    @media (max-width: 562px) {
    }
`

const StyledTheme = styled.div`
    background-color: #121212;
    color: white;
`

const Layout = ({ children }) => {
  return (
    <StyledTheme>
      <SEO />
      <Navigation />
      <StyledLayout>
        {/* <Header /> */}
        <main id="main-content">{children}</main>
        {/* <Footer /> */}
      </StyledLayout>
    </StyledTheme>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
