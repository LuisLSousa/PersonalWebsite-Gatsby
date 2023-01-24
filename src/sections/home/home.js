import React from "react";
import particlesParams from "./particles/particles";
import Particles from "react-tsparticles";
import Typewriter from 'typewriter-effect';
import Button from "../../components/button/button";
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
        <a title="About Me" href="#about" >
          <Button title="About Me" />
        </a>
        <Button title="Resume" target="http://web.tecnico.ulisboa.pt/ist425417/Download/Luis_Sousa_CV.pdf" />
      </div>
      <div className="socials">
        <a href="https://www.linkedin.com/in/luis-srl-sousa/" target="_blank" rel="noreferrer">
          <FaLinkedin className="icon" title="Go to LinkedIn" size="40" />
        </a>
        <a href="https://github.com/LuisLSousa/" target="_blank" rel="noreferrer">
          <FaGithub className="icon" title="Go to GitHub" size="40" />
        </a>
      </div>
      <a className="scroll" href="#about">
        <HiOutlineArrowNarrowDown className="arrow" />
        <p>Scroll Down</p>
        <HiOutlineArrowNarrowDown className="arrow" />
      </a>
    </section>
  );
};

export default Home;
