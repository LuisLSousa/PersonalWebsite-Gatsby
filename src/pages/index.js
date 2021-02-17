import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Home from '../components/home';
import About from '../components/about';
import Education from '../components/education';
import Projects from '../components/projects';


const IndexPage = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Education />
      <Projects /> 
      {/* <Footer /> */}
    </Layout>
  )
}


export default IndexPage
