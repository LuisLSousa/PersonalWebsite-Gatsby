import React from "react";
import styled from "styled-components";
import Heading from "../components/heading";

// ###### CSS #########
const Wrapper = styled.section`
  border-top: 2px solid rgba(255, 255, 255, 0.8);
`;

const SkillsDiv = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

// ####################

const Skills = () => {
    return (
    <Wrapper id="skills">
      <Heading title="Skills" />
      <SkillsDiv>
      </SkillsDiv>
    </Wrapper>
  );
};

export default Skills;
