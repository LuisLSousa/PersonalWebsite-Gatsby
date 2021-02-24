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
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
                fixed(width: 50, height: 50) {
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
        {data.allSkillsJson.edges.map(({ node }, index) => {
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

/*{
        "icon": "../images/skills/css.png",
        "title": "CSS3"
    },
    {
        "icon": "../images/skills/javascript.png",
        "title": "JavaScript"
    },
    {
        "icon": "../images/skills/react.png",
        "title": "React"
    },
    {
        "icon": "../images/skills/nodejs.png",
        "title": "Node.js"
    },
    {
        "icon": "../images/skills/python.png",
        "title": "Python"
    },
    {
        "icon": "../images/skills/postgresql.png",
        "title": "PostgreSQL"
    },
    {
        "icon": "../images/skills/kotlin.png",
        "title": "Kotlin"
    },
    {
        "icon": "../images/skills/androidStudio.png",
        "title": "Android Studio"
    }
    
    */
