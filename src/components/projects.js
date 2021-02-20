import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Heading from "../components/heading";
import Project from "../components/project";

import GatsbyImage from "gatsby-image";

// ###### CSS #########
const Wrapper = styled.section`
  border-top: 2px solid rgba(255, 255, 255, 0.8);
`;

const ProjectsDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap:wrap;
`;

// ####################

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      FR1: file(relativePath: { eq: "projects/FRMain.png" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      FR2: file(relativePath: { eq: "projects/FRSignIn.png" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      robofriends1: file(relativePath: { eq: "projects/robofriends.png" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      robofriends2: file(
        relativePath: { eq: "projects/robofriendsSearch.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      challengeApp1: file(relativePath: { eq: "projects/challengeApp1.png" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      challengeApp2: file(relativePath: { eq: "projects/challengeApp2.png" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      challengeApp3: file(relativePath: { eq: "projects/challengeApp3.png" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Wrapper id="projects">
      <Heading title="Projects" />
      <ProjectsDiv>
        <Project
          title="Face Recognition"
          description="Just to see how  it looks"
          technologies="React, Gatsby, Hooks, Node.js, PostgreSQL "
          liveWebsite="https://proj-face-recognition.herokuapp.com/"
          sourceCode="https://github.com/LuisLSousa/faceRecognition"
        />
        <Project
          title="Challenge Game"
          description=""
          technologies="Android Studio, Kotlin"
          sourceCode="https://github.com/LuisLSousa/ChallengeGame"
        />
        <Project
          title="Robofriends"
          description=""
          technologies="React, Redux, Hooks"
          liveWebsite="https://luislsousa.github.io/robofriends/"
          sourceCode="https://github.com/LuisLSousa/robofriends"
        />
      </ProjectsDiv>
    </Wrapper>
  );
};

export default Projects;
