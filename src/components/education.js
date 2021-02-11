import React from 'react';
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";


// ###### CSS #########
const StyledSection = styled.section`
    padding-top: 5vh;
    display: flex;
    align-content: center;
    justify-content: center;
    width: 80vw;
    border-top: 2px solid rgba(255,255,255, 0.8);

    @media (max-width: 562px) {
    }
`

const Container = styled.div`
    margin-left: 0.5rem;
`

const Bar = styled.div`
    width: 0.25rem;
    min-width: 4px;
    background-color: rgba(255,255,255, 0.3);
    border-radius: 9999px;
`

const Dot = styled.div`
    margin-left: -1rem;
    position: relative;
    margin-top: 0.75rem;
    height: 0.75rem;
    width: 0.75rem;
    min-width: 12px;
    border-radius: 9999px;
    z-index: 2;
    background-color: rgba(255, 255, 255, 1);

`

const Entry = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 1rem;
    padding-bottom: 1rem;
`

const Content = styled.div`
    margin-left: 2rem;
    display: flex;
    flex-direction: column; 
    align-content: flex-start;

    h6 {
        margin: 5px;
        font-weight: normal;
    }
    .degree {
        margin-top: 0.75rem;
        font-weight: 600;
        font-size: 1rem;
    }
    .university{
        font-size: 0.875rem;
    }
    .location, .period {
        font-size: 0.75rem;
    }
    .period {
        margin-top: 0.5rem;
    }
`

const StyledImage = styled(GatsbyImage)`
    width: 2rem;
    height: 2rem;  
    
   `
// ####################


const Education = () => {
    const data = useStaticQuery(graphql`
    {
      allEducationJson {
        edges {
          node {
            id
            degree
            university
            location
            period
            icon {
                childImageSharp {
                    fixed(width: 120, height: 48) {
                      ...GatsbyImageSharpFixed
                    }
              }
            }
          }
        }
      }
    }
  `);

    return (
        <StyledSection id="education">
            <Bar />
            <Container >
                {data.allEducationJson.edges.map(({ node }, index) => {
                    return (
                        <Entry key={node.id}>
                            <Dot />
                            <Content>
                                <StyledImage {...node.icon.childImageSharp} />
                                <h6 className="degree">{node.degree}</h6>
                                <h6 className="university">{node.university}</h6>
                                <h6 className="location">{node.location}</h6>
                                <h6 className="period">({node.period})</h6>
                            </Content>
                        </Entry>
                    );
                })}
            </Container>
        </StyledSection>
    )
}

export default Education;