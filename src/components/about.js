import React from 'react';
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";

// ###### CSS #########
const StyledSection = styled.section`
    padding-top: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80vw;
    border-top: 2px solid rgba(255,255,255, 0.8);
    margin-bottom: 5vh;

    @media (max-width: 562px) {
        flex-direction: column;
        justify-content: flex-start;

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
    <StyledSection id="about">
      {/* <Heading title="About" /> */}
      <StyledImage fluid={data.photo.childImageSharp.fluid} />
      <StyledText
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      ></StyledText>
    </StyledSection>
  );
}

export default About;