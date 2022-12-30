import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Heading from "../heading/heading";
import GatsbyImage from "gatsby-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

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
            location
            period
            icon {
              childImageSharp {
                fixed(height: 40, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
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
              <div className="content">
                <GatsbyImage className="companyLogo" fluid={node.icon.childImageSharp.fluid} />
                <h3 className="degree">{node.degree}</h3>
                <h3 className="university">{node.university}</h3>
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