import React from "react";
import styled from "styled-components";
import GatsbyImage from "gatsby-image";
import { FaGithub, FaLink } from "react-icons/fa";

const StyledProject = styled.div`
  min-width: 300px;
  max-width: 300px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  margin-bottom: 2vh;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
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
  text-align: justify;
  transition: 0.6s ease-in-out;

  :hover {
    border: 2px solid rgba(255, 255, 255, 0.8);
  }

  h1 {
    font-size: 1.25em;
    margin-bottom: 0.75rem;
    font-weight: 500;
  }
  h2 {
    font-size: 0.875rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  h3 {
    font-size: 0.75rem;
    font-weight: 500;
  }

  .icon {
    margin-right: 1rem;
    margin-left: 1rem;
    color: white;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  span {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;

const StyledImage = styled(GatsbyImage)`
  margin-top: 0.5vh;
  margin-bottom: 1vh;
  height: 100%;
  width: 100%;
  border-radius: 7.5%;

  @media (max-width: 562px) {
    height: 280px;
    width: 280px;
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
          <a href={liveWebsite} target="_blank" rel="noreferrer">
            <FaLink className="icon" title="Go to Website" size="20" />
            <span>Go to Website</span>
          </a>
        ) : (
          <></>
        )}
        {sourceCode /* Only display the button if a sourceCode is given */ ? (
          <a href={sourceCode} target="_blank" rel="noreferrer">
            <FaGithub className="icon" title="Go to Github" size="20" />
            <span>Go to Github</span>
          </a>
        ) : (
          <></>
        )}
      </StyledButtons>
    </StyledProject>
  );
};

export default Project;
