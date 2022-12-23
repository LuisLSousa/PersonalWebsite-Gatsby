import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Heading from "../heading/heading";
import Button from "../button/button";
import "./about.css";

import GatsbyImage from "gatsby-image";

const About = () => {
  const data = useStaticQuery(graphql`
    {
      aboutJson {
        title
        location
        description
      }
      photo: file(relativePath: { eq: "about/profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <section id="about" className="aboutWrapper">
      <Heading title="About Me" />
      <div className="innerWrapper">
        <GatsbyImage className="profile" fluid={data.photo.childImageSharp.fluid} />
        <div className="descriptionWrapper">
          <h2 className='title'>{data.aboutJson.title}</h2>
          <h3 className='location'>{data.aboutJson.location}</h3>
          <p className='description'>{data.aboutJson.description}</p>
        </div>
      </div>
      <div className="buttons">
        <Button title="LinkedIn" targetWebsite="https://www.linkedin.com/in/luis-srl-sousa/" />
        <Button title="Resume" targetWebsite="http://web.tecnico.ulisboa.pt/ist425417/Download/Luis_Sousa_CV.pdf" />
      </div>
    </section>
  );
};

export default About;