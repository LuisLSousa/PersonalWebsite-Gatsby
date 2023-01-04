import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Heading from "../../components/heading/heading";
import Timeline from "../../components/timeline/timeline";

const Education = () => {
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
            icon {
              childImageSharp {
                fixed(height:50, quality: 100) {
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