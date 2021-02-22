import React from "react";
import styled from "styled-components";
import Button from "../components/button";
import GatsbyImage from "gatsby-image";

const StyledProject = styled.div`
  min-width: 280px;
  max-width: 280px;
  padding: 1rem;
  display: flex;
  overflow-x: auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5%;
  border: 2px solid #121212;
  /* background-color: rgba(50, 50, 50, 0.3); */
  /* backdrop-filter: opacity(0.8) blur(1px);
  background-color: rgba(47, 204, 165, 0.4); */
  background-color: #121212;

  transition: 0.6s ease-in-out;

  :hover {
    border: 2px solid rgba(255, 255, 255, 0.8);
  }

  h1 {
    font-size: 1.4em;
    margin-bottom: 1vh;
    font-weight: 500;
  }
  h2 {
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  h3 {
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledImage = styled(GatsbyImage)`
  margin: 2rem;
  margin-top: 2vh;
  margin-bottom: 2vh;
  height: 100%;
  width: 100%;
  border-radius: 7.5%;

  @media (max-width: 562px) {
    margin-left: auto;
    margin-right: auto;
    height: 330px;
    width: 250px;
    min-width: 250px;
    margin-bottom: 5vh;
  }
`;
const Project = ({
  img,
  title,
  description,
  technologies,
  liveWebsite,
  sourceCode,
}) => {
  return (
    <StyledProject>
      <StyledImage fluid={img} />
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>{technologies}</h3>
      <StyledButtons>
        {liveWebsite /* Only display the button if a liveWebsite is given */ ? (
          <Button title="Live" targetWebsite={liveWebsite} />
        ) : (
          <></>
        )}
        {sourceCode /* Only display the button if a sourceCode is given */ ? (
          <Button title="Code" targetWebsite={sourceCode} />
        ) : (
          <></>
        )}
      </StyledButtons>
    </StyledProject>
  );
};

export default Project;
