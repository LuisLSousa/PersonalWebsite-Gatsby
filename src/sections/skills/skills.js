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
          Programming_Languages {
            icon
            title
          }
          Cloud_Infrastructure {
            title
            icon
          }
          DevOps {
            icon
            title
          }
          Databases {
            icon
            title
          }
          Protocols {
            icon
            title
          }
        }
      }
    }
  }
  `);
  return (
    <section id="skills">
      <Heading title="Skills" />
      <div className="skillsContainer">
        {data.allSkillsJson.edges.map(node => {

          return  (console.log(node))
          // return (node.map(domain => {
          //   console.log(domain)
          // })
            // <div className="skillGroup" key={node.id}>
            //   <h1 className="skillGroupTitle">{node.title}</h1>
            //   {/* <GatsbyImage className="skillIcon" key={node.id} title={node.title} fixed={node.icon.childImageSharp.fixed} /> */}
            // </div>
        })}
      </div>
    </section>
  );
};

export default Skills;


/*
Programming Languages: Go, Python, JavaScript
Cloud Infrastructure: AWS, Kubernetes, Docker
DevOps and Deployment: Terraform, Git
Database: MySQL, PostgreSQL, MongoDB, DynamoDB
Protocols: REST, gRPC
Front-end: React, HTML5, CSS3
*/ 