import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Heading from "../../components/heading/heading";
import GatsbyImage from "gatsby-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

import "./experience.css"

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
            responsabilities
            stack
            icon {
              childImageSharp {
                fixed(height:45, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `);
  // TODO add responsabilities and tech stack/skills
  return (
    <section id="experience">
      <Heading title="Experience" />
      <div className="experienceContainer">
        {data.allExperienceJson.edges.map(({ node }) => {
          return (
            <div key={node.id} className="experienceEntry">
              <div className="content">
                <GatsbyImage className="companyLogo" fixed={node.icon.childImageSharp.fixed} />
                <h3 className="position">{node.position}</h3>
                {node.website ?
                  <a className="company" href={node.website} target="_blank" rel="noreferrer">
                    {node.company}
                    {console.log(node.website)}
                    <FontAwesomeIcon className="faIcon" icon={faLink} />
                  </a>
                  :
                  <></>}
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