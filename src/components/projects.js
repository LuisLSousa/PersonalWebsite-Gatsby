import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Heading from "../components/heading";
import Project from "../components/project";

// ###### CSS #########
const Wrapper = styled.section`
  border-top: 2px solid rgba(255, 255, 255, 0.8);
`;

const ProjectsDiv = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

// ####################

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            title
            description
            technologies
            website
            github
            image {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Wrapper id="projects">
      <Heading title="Projects" />
      <ProjectsDiv>
        {data.allProjectsJson.edges.map(({ node }) => {
          return (
            <Project
              key={node.id}
              img={node.image.childImageSharp.fluid}
              title={node.title}
              description={node.description}
              technologies={node.technologies}
              website={node.website}
              github={node.github}
            />
          );
        })}
      </ProjectsDiv>
    </Wrapper>
  );
};

export default Projects;
