import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Heading from "../../components/heading/heading";
import Timeline from "../../components/timeline/timeline";

const Experience = () => {

  const data = useStaticQuery(graphql`
    {
      allExperienceJson {
        edges {
          node {
            id
            institution
            title
            website
            location
            period
            responsibilities
            icon_dark {
              childImageSharp {
                fixed(height:40, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            icon_light {
              childImageSharp {
                fixed(height:40, quality: 100) {
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
    <section id="experience">
      <Heading title="Experience" />
      <Timeline edges={data.allExperienceJson.edges}/>
    </section>
  );
};

export default Experience;