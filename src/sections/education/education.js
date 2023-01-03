import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Heading from "../../components/heading/heading";
import GatsbyImage from "gatsby-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

import "./education.css"

const Education = () => {
  const data = useStaticQuery(graphql`
    {
      allEducationJson {
        edges {
          node {
            id
            degree
            university
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
      <div className="educationContainer">
        {data.allEducationJson.edges.map(({ node }) => {
          return (
            <div key={node.id} className="educationEntry">
              <div className="educationContent">
                <GatsbyImage className="universityLogo" fixed={node.icon.childImageSharp.fixed} />
                <h3 className="degree">{node.degree}</h3>
                {node.website ?
                  <a className="university" href={node.website} target="_blank" rel="noreferrer">
                    {node.university}
                    <FontAwesomeIcon className="faIcon" icon={faLink} />
                  </a>
                  :
                  <></>}
                <h3 className="location">{node.location}</h3>
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

export default Education;