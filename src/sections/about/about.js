import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Heading from "../../components/heading/heading";
import GatsbyImage from "gatsby-image";
import "./about.css";

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
    <section id="about">
      <Heading title="About Me" />
      <div className="aboutWrapper">
        <GatsbyImage className="profile" fluid={data.photo.childImageSharp.fluid} />
        <div className="descriptionWrapper">
          <h2 className='title'>{data.aboutJson.title}</h2>
          <h3 className='location'>{data.aboutJson.location}</h3>
          <p className='description'>{data.aboutJson.description}</p>
        </div>
      </div>
    </section>
  );
};

export default About;