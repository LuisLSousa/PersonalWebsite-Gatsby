import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Heading from "../index";
import GatsbyImage from "gatsby-image";

// ###### CSS #########

const Wrapper = styled.section`
  border-top: 2px solid rgba(255, 255, 255, 0.8);
`;

const StyledDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding-bottom: 3vh;
`;

const Container = styled.div`
  margin-left: 0.5rem;
`;

const Bar = styled.div`
  width: 0.25rem;
  min-width: 4px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 9999px;
`;

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
`;

const Entry = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
  padding-bottom: 1rem;
  animation: fadeIn;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

const Content = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  align-content: flex-start;

  h3 {
    margin: 5px;
    font-weight: normal;
  }
  .degree {
    margin-top: 0.75rem;
    font-weight: 600;
    font-size: 1rem;
  }
  .university {
    font-size: 1rem;
  }
  .location,
  .period {
    font-size: 0.875rem;
  }
  .period {
    margin-top: 0.75rem;
  }
`;

const StyledImage = styled(GatsbyImage)`
  max-width: 20rem;
  max-height: 2.5rem;
`;

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
                gatsbyImageData(width: 40, height: 40, layout: FIXED)
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Wrapper id="education">
      <Heading title="Education" />
      <StyledDiv>
        <Bar />
        <Container>
          {data.allEducationJson.edges.map(({ node }, index) => {
            return (
              <Entry
                key={node.id}
                style={{ animationDuration: `${index * 300 + 500}ms` }}
              >
                <Dot />
                <Content>
                  <StyledImage
                    fluid={node.icon.childImageSharp.fluid}
                    imgStyle={{
                      objectFit: "contain",
                      objectPosition: "left",
                    }}
                  />
                  <h3 className="degree">{node.degree}</h3>
                  <h3 className="university">{node.university}</h3>
                  <h3 className="location">{node.location}</h3>
                  <h3 className="period">({node.period})</h3>
                </Content>
              </Entry>
            );
          })}
        </Container>
      </StyledDiv>
    </Wrapper>
  );
};

export default Education;
