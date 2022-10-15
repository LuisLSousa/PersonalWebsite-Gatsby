import React from "react";
import {
  Layout,
  Home,
  About,
  Experience,
  Education,
  Skills,
  Projects,
  Contact,
  Footer
} from "./components/index";

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
