import React from 'react';
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";


const StyledSection = styled.section`
    padding-top: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80vw;
    @media (max-width: 562px) {
        width: 90vw;
    }
`

const StyledImage = styled(GatsbyImage)`
    height: 20vh;
    width: 15vw;
    width: auto;
`

const About = () => {
    const data = useStaticQuery(graphql`
    {
      photo: file(relativePath: { eq: "about/profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 512) {
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
        <StyledSection>
            <section id="about">
                {/* <Heading icon={MdPerson} title="About" /> */}
                <StyledImage fluid={data.photo.childImageSharp.fluid} />

                <div
                    className="what"
                    dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                >

                </div>


            </section>
        </StyledSection >
    );
}

export default About;