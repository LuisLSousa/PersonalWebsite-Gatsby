import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { Heading, Button } from "../index";
import GatsbyImage from "gatsby-image";

// ###### CSS #########
const Wrapper = styled.section`
  border-top: 2px solid rgba(255, 255, 255, 0.8);
  padding-bottom: 2vh;
`;

const StyledDiv = styled.div`
  padding-top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80vw;

  @media (max-width: 562px) {
    flex-direction: column;
    justify-content: fleçx-start;
    margin-bottom: 0;
  }
`;
const StyledImage = styled(GatsbyImage)`
  height: 450px;
  width: 340px;
  margin: 0;
  margin-bottom: 1rem;
  box-shadow: 5px 5px rgba(255, 255, 255, 0.8);

  @media (max-width: 562px) {
    margin-left: auto;
    margin-right: auto;
    height: 330px;
    width: 250px;
    min-width: 250px;
    margin-bottom: 5vh;
  }
`;
const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 562px) {
    justify-content: space-evenly;
  }
`;
const StyledText = styled.div`
  padding-left: 5vw;
  width: 80vw;
  text-align: justify;
  margin-bottom: 1rem;

  @media (max-width: 562px) {
    margin-left: auto;
    margin-right: auto;
    padding-left: 0;
  }
`;
// ####################

const About = () => {
  const data = useStaticQuery(graphql`
    {
      photo: file(relativePath: { eq: "about/profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      markdownRemark(frontmatter: { id: { eq: "about" } }) {
        html
      }
    }
  `);

  return (
    <Wrapper id="about">
      <Heading title="About Me" />
      <StyledDiv>
        <StyledImage fluid={data.photo.childImageSharp.fluid} />
        <StyledText
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></StyledText>
      </StyledDiv>
      <StyledButtons>
        <Button
          title="LinkedIn"
          targetWebsite="https://www.linkedin.com/in/luis-srl-sousa/"
        />
        <Button
          title="Resume"
          targetWebsite="http://web.tecnico.ulisboa.pt/ist425417/Download/Luis_Sousa_CV.pdf"
        />
      </StyledButtons>
    </Wrapper>
  );
};

export default About;
