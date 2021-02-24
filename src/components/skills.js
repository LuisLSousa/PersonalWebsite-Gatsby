import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import styled from "styled-components";
import Heading from "../components/heading";

// ###### CSS #########
const Wrapper = styled.section`
  border-top: 2px solid rgba(255, 255, 255, 0.8);
`;

const SkillsDiv = styled.div`
  position: relative;
  left: 25%;
  margin: 0;
  width: 40vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 562px) {
        width: 80vw;
        position: static;
    } 
`;

const StyledImage = styled(GatsbyImage)`
  margin: 2rem;
`;

// ####################

const Skills = () => {
  const data = useStaticQuery(graphql`
    {
      allSkillsJson {
        edges {
          node {
            title
            icon {
              childImageSharp {
                fixed(width: 50, height: 50, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Wrapper id="skills">
      <Heading title="Skills" />
      <SkillsDiv>
        {data.allSkillsJson.edges.map(({ node }) => {
          return (
            <StyledImage
              key={node.id}
              title={node.title}
              {...node.icon.childImageSharp}
            />
          );
        })}
      </SkillsDiv>
    </Wrapper>
  );
};

export default Skills;
