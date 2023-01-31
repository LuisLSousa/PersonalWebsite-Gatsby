import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import Heading from "../../components/heading/heading";

import "./skills.css";

const Skills = () => {
  const data = useStaticQuery(graphql`
  {
    allSkillsJson {
      edges {
        node {
          id
          domain
          skills {
            title
            icon {
              childImageSharp {
                fixed(height:20, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
  `);
  return (
    <section id="skills" className="skills">
      <Heading title="Skills" />
      <div className="skillsContainer">
        {data.allSkillsJson.edges.map(edge => {
          return (
            <div className="skillGroup" key={edge.node.id}>
                <h3 className="groupTitle">{edge.node.domain}</h3>
                <div className="skillsList">
                  {edge.node.skills.map((skill, id) => {
                    return (
                      <div className="skill" key={id}>
                        {skill.icon && (<GatsbyImage className="skillIcon" title={skill.title} fixed={skill.icon.childImageSharp.fixed} />)}
                        {skill.title && (<p className="skillTitle">{skill.title}</p>)}
                      </div>
                    )
                  })}
                </div>
              </div>
          )
        })}
      </div>
    </section>
  );
};

export default Skills;
