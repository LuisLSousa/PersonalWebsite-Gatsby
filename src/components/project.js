import React from "react";
import styled from "styled-components";
import Button from "../components/button";

const StyledProject = styled.div`
  margin: 1.5rem;
  display: flex;
  flex-wrap:wrap;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.5rem;
  border: 2px solid #121212;   
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  background-color: rgba(100, 100, 100, 0.2);
  backdrop-filter: opacity(0.8) blur(1px);
  transition: 0.6s ease-in-out;
  
  :hover{
    border: 2px solid rgba(255,255,255,0.8);   
  }

  h1 {
    font-size: 1.3em;
  }
  h2 {
    font-size: 1rem;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2vh;
`;

const Project = ({
  title,
  description,
  technologies,
  liveWebsite,
  sourceCode,
}) => {
  return (
    <StyledProject>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h2>{technologies}</h2>
      <StyledButtons>
        <Button title="Live" targetWebsite={liveWebsite} />
        <Button title="Code" targetWebsite={sourceCode} />
      </StyledButtons>
    </StyledProject>
  );
};

export default Project;
