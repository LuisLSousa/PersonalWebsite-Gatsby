import React from "react";
import particlesParams from "./particles/particles";
import Particles from "react-tsparticles";
import Typewriter from 'typewriter-effect';
import Button from "../../components/button/button";

import "./home.css"

const Home = () => {
  return (
    <section id="home" className="home">
      {/* <Particles className="particles" options={particlesParams} /> */}
      <h4 className="greeting">Hello, I'm</h4>
      <h1 className="title">Luís Sousa</h1>
      <Typewriter component={'h3'}
        options={{
          delay: 50,
          deleteSpeed: 50,
          strings: [
            "Software Engineer",
            "Full Stack Developer",
            "Backend Wizard"
          ],
          autoStart: true,
          loop: true,
        }}
      />
       <div className="buttons">
        <Button title="LinkedIn" targetWebsite="https://www.linkedin.com/in/luis-srl-sousa/" />
        <Button title="Resume" targetWebsite="http://web.tecnico.ulisboa.pt/ist425417/Download/Luis_Sousa_CV.pdf" />
      </div>
    </section>
  );
};

export default Home;
