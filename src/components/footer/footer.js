import React from "react";
import styled from "styled-components";

// ###### CSS #########
const Wrapper = styled.section`
  display: table;
  text-align: center;
  font-size: 0.75rem;
  margin: auto;
  line-height: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  opacity: 0.25;

  p {
      margin: 0;
      margin-bottom: 0.5rem;
  }
`;

// ####################

const Footer = () => {
  return (
    <Wrapper id="about">
      <p>© {new Date().getFullYear()} Luís Sousa</p>
      <p>Built with GatsbyJS, GraphQL</p>
      <p>and many hours of centering divs</p>
    </Wrapper>
  );
};

export default Footer;
