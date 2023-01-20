import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Heading from "../../components/heading/heading";
import Project from "./project";

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            title
            description
            technologies
            website
            github
            image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
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
    <section id="projects">
      <Heading title="Projects" />
      <div className="projects">
        {data.allProjectsJson.edges.map(({ node }) => {
          return (
            <Project
              key={node.id}
              img={node.image.childImageSharp.fluid}
              title={node.title}
              description={node.description}
              technologies={node.technologies}
              website={node.website}
              github={node.github}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
