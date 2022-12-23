import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Heading from "../heading/heading";
import GatsbyImage from "gatsby-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faLinkSlash, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'


import "./experience.css"

const Experience = () => {

  const data = useStaticQuery(graphql`
    {
      allExperienceJson {
        edges {
          node {
            id
            company
            website
            position
            location
            period
            icon {
              childImageSharp {
                fluid(maxHeight: 40, quality: 100) {
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
    <section id="experience">
      <Heading title="Experience" />
      <div className="experienceContainer">
        {data.allExperienceJson.edges.map(({ node }) => {
          return (
            <div key={node.id} className="experienceEntry">
              <div className="content">
                <GatsbyImage className="companyLogo" fluid={node.icon.childImageSharp.fluid} />
                <h3 className="position">{node.position}</h3>
                <a className="company" href={node.website ? "" + node.website : null} target="_blank" rel="noreferrer">
                  {node.company}
                  <FontAwesomeIcon className="faIcon" icon={node.website ? faLink : faLinkSlash} />
                </a>
                <h3 className="period">
                  <FontAwesomeIcon className="faIcon" icon={faCalendarAlt} />
                  {node.period}
                </h3>
              </div>
              <div className="verticalBar">
                <li />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;