import React from "react";
import Layout from "../components/layout";
import Home from "../components/home";
import About from "../components/about";
import Experience from "../components/experience";
import Education from "../components/education";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Contact from "../components/contact";
import Footer from "../components/footer";
import styled from "styled-components";

const ExperienceEducation = styled.div`
  display: grid;
  row-gap: 0px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 562px) {
    display: flex;
    flex-direction: column;
    grid-template-columns: none;
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <Home />
      <About />
      <ExperienceEducation>
        <Experience />
        <Education />
      </ExperienceEducation>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
