import React from 'react';
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby";
import Heading from "../components/heading";
import Button from "../components/button";
import GatsbyImage from "gatsby-image";

// ###### CSS #########

const Wrapper = styled.section`
  border-top: 2px solid rgba(255,255,255, 0.8);
`
const StyledDiv = styled.div`
    padding-top: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80vw;
    margin-bottom: 5vh;

    @media (max-width: 562px) {
        flex-direction: column;
        justify-content: flex-start;
        margin-bottom: 0;
    }
`

const StyledImage = styled(GatsbyImage)`
    height: 400px;
    width: 300px;
    box-shadow: 5px 5px rgba(255,255,255, 0.8);
    margin: 0;

    @media (max-width: 562px) {
        margin-left: auto;
        margin-right:auto;
        height: 330px;
        width: 250px;
        min-width: 250px;
        margin-bottom: 5vh;  
    }
    
`

const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2vh;

`

const StyledText = styled.div`
    padding-left: 5vw;
    width: 80vw;
    font-size: 1rem;
    text-align: justify;
`

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
      <Heading title="About" />
      <StyledDiv >
        <StyledImage fluid={data.photo.childImageSharp.fluid} />
        <StyledText
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></StyledText>
      </StyledDiv>
      <StyledButtons>
        <Button title="LinkedIn" targetWebsite="https://www.linkedin.com/in/luis-srl-sousa/" />
        <Button title="Resume" targetWebsite="http://web.tecnico.ulisboa.pt/ist425417/Download/Luis_Sousa_CV.pdf" />
      </StyledButtons>
    </Wrapper>
  );
}

export default About;