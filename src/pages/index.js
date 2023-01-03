import React from "react";
import About from "../sections/about/about";
import Contact from "../sections/contact/contact";
import Education from "../sections/education/education";
import Experience from "../sections/experience/experience";
import Footer from "../sections/footer/footer";
import Home from "../sections/home/home";
import Layout from "../components/layout/layout";
import Projects from "../sections/projects/projects";
import Skills from "../sections/skills/skills";

// TODO 
// - remove styled components for traditional css
// - use typewriter effect instead of react typed
// https://github.com/AmruthPillai/ResumeOnTheWeb/blob/main/package.json
// https://tailwindcss.com/docs/grid-template-columns
// https://github.dev/pedro-areal-torres/Website-Portfolio/tree/main/src/components
// https://app.netlify.com/sites/friendly-allen-30a866/settings/deploys#build-image-selection

const IndexPage = () => {
  return (
    <Layout>
      {/* <Home /> */}
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
