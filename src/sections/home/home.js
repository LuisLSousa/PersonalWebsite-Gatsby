import React from "react";
// import Typed from "react-typed";
import particlesParams from "./particles/particles";
import Particles from "react-tsparticles";

import "./home.css"

const Home = () => {
  return (
    <section id="home" className="home">
        {/* <Particles className="particles" options={particlesParams} /> */}
        <h1 className="title">Luís Sousa</h1>
        <h3>
          {/* <Typed
            strings={[
              "Software Engineer",
              "Full Stack Developer",
            ]}
            typeSpeed={60}
            backDelay={1000}
            backSpeed={50}
            loop
          /> */}
        </h3>
      </section>
  );
};

export default Home;
