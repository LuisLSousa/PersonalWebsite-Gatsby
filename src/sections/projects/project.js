import React from "react";
import GatsbyImage from "gatsby-image";
// import { OutboundLink } from "gatsby-plugin-google-analytics";
import { FaGithub, FaLink } from "react-icons/fa";

import "./projects.css"

const Project = ({ img, title, description, technologies, website, github }) => {
  return (
    // TODO make image clickable so it redirects to the website (if one is given)
    <div className="projectCard">
      {/* <OutboundLink href={website || github} target="_blank" > */}
        <GatsbyImage className="projectImage" fluid={img} />
      {/* </OutboundLink> */}
      <h1 className="title">{title}</h1>
      <h2 className="description">{description}</h2>
      <h3 className="technologies">{technologies}</h3>
      <div className="projectButtons">
        {website && (
          <a href={website} target="_blank" rel="noreferrer">
            <FaLink className="icon" title="Go to Website" size="20" />
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            <FaGithub className="icon" title="Go to Github" size="20" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
