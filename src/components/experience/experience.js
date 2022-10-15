import React from "react";
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
  /* see https://jsfiddle.net/Kredit/55vex4ur/ */
  width: 0.25rem;
  min-width: 4px;
  background-color: rgba(255, 255, 255, 0.3);

  list-style: none;

  li {
    left: -5px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 100px;
    height: 15px;
    width: 15px;
    z-index: 2;
    position: relative;
  }
`;

const Entry = styled.div`
  display: flex;
  flex-direction: row;
  /* padding-top: 1rem;
  padding-bottom: 1rem; */

  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1rem;

  :nth-child(odd) {
    grid-column: 3;
    border: 2px solid red;
  }

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
  display: flex;
  flex-direction: column;
  align-content: flex-start;

  h3 {
    margin: 5px;
    font-weight: normal;
  }
  .company {
    margin-top: 0.75rem;
    font-weight: 600;
    font-size: 1rem;
  }
  .position {
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
// TODO:
//  - Make experience appear on each side of the bar alternating
//  - Fix gatsby versions
//  - Move styled components to css files

const Experience = () => {

  const data = useStaticQuery(graphql`
    {
      allExperienceJson {
        edges {
          node {
            id
            company
            position
            location
            period
            icon {
              childImageSharp {
                fluid(maxHeight: 40, quality: 90) {
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
    <Wrapper id="experience">
      <Heading title="Experience" />
      <StyledDiv>
        <Container>
          {data.allExperienceJson.edges.map(({ node }, index) => {
            return (
              <Entry
                key={node.id}
                style={{
                  animationDuration: `${index * 300 + 500}ms`,
                }}
              >
                <Content>
                  <StyledImage
                    fluid={node.icon.childImageSharp.fluid}
                    imgStyle={{
                      objectFit: "contain",
                      objectPosition: "left",
                    }}
                  />
                  <h3 className="company">{node.company}</h3>
                  <h3 className="position">{node.position}</h3>
                  <h3 className="location">{node.location}</h3>
                  <h3 className="period">({node.period})</h3>
                </Content>
                <Bar>
                  <li />
                </Bar>
                <h1>boda</h1>
              </Entry>
            );
          })}
        </Container>
      </StyledDiv>
    </Wrapper>
  );
};

export default Experience;
