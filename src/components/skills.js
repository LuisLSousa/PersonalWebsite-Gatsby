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
  margin: auto;
  width: 800px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 562px) {
    width: 80vw;
    margin-bottom: 2vh;
  }
`;

const StyledImage = styled(GatsbyImage)`
  margin: 2rem;
  transition: 0.4s ease-in-out;

  :hover {
    transform: scale(1.2);
  }

  @media (max-width: 562px) {
    margin: 0.75rem;
  }
`;

// ####################

const Skills = () => {
  const data = useStaticQuery(graphql`
    {
      allSkillsJson {
        edges {
          node {
            id
            title
            icon {
              childImageSharp {
                fixed(width: 70, height: 70, quality: 100) {
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
              fixed={node.icon.childImageSharp.fixed}
            />
          );
        })}
      </SkillsDiv>
    </Wrapper>
  );
};

export default Skills;
