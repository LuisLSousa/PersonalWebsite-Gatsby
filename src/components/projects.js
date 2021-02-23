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
      faceRecognition: file(relativePath: { eq: "projects/FRMain.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      robofriends: file(relativePath: { eq: "projects/robofriends.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      challengeGame: file(
        relativePath: { eq: "projects/challengeGame.png" }
      ) {
        childImageSharp {
          fluid (maxWidth: 400){
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
          img={data.faceRecognition.childImageSharp.fluid}
          title="Face Recognition"
          description="Just to see how  it looks"
          technologies="React, Gatsby, Hooks, Node.js, PostgreSQL "
          liveWebsite="https://proj-face-recognition.herokuapp.com/"
          sourceCode="https://github.com/LuisLSousa/faceRecognition"
        />
        <Project
          img={data.challengeGame.childImageSharp.fluid}
          title="Challenge Game"
          description="This is a description"
          technologies="Android Studio, Kotlin"
          sourceCode="https://github.com/LuisLSousa/ChallengeGame"
        />
        <Project
          img={data.robofriends.childImageSharp.fluid}
          title="Robofriends"
          description="Look at my description"
          technologies="React, Redux, Hooks"
          liveWebsite="https://luislsousa.github.io/robofriends/"
          sourceCode="https://github.com/LuisLSousa/robofriends"
        />
      </ProjectsDiv>
    </Wrapper>
  );
};

export default Projects;
