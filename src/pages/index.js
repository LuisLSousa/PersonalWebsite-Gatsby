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

const IndexPage = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
