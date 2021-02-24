import React from "react"
import Layout from "../components/layout";
import Home from '../components/home';
import About from '../components/about';
import Education from '../components/education';
import Projects from '../components/projects';
import Skills from '../components/skills';
import Contact from '../components/contact';


const IndexPage = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Education />
      <Projects /> 
      <Skills /> 
      {/* <Contact/> */}
      {/* <Footer /> */}
    </Layout>
  )
}


export default IndexPage
