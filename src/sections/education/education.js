import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Heading from "../../components/heading/heading";
import Timeline from "../../components/timeline/timeline";

const Education = () => {
  // TODO add light and dark theme

  const data = useStaticQuery(graphql`
    {
      allEducationJson {
        edges {
          node {
            id
            title
            institution
            website
            location
            period
            icon_dark {
              childImageSharp {
                fixed(height:50, quality: 99) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            icon_light {
              childImageSharp {
                fixed(height:50, quality: 99) {
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
    <section id="education">
      <Heading title="Education" />
      <Timeline edges={data.allEducationJson.edges}/>
    </section>
  );

};

export default Education;