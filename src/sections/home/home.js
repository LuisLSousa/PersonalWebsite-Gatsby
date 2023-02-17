import React from "react";
import ThemeSwitch from "../../components/themeSwitch/themeSwitch";
import Particles from "react-tsparticles";
import particlesParams from "./particles/particlesParams";
import Typewriter from 'typewriter-effect';
import Button from "../../components/button/button";
import Socials from "../../components/socials/socials";
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';

import "./home.css"

const Home = () => {
  return (
    <section id="home" className="home">
      <ThemeSwitch className="themeSwitch" />
      <Particles className="particles" options={particlesParams} />
      <h4 className="greeting">Hello, I'm</h4>
      <h1 className="title">Luís Lampreia</h1>
      <Typewriter component={'h3'}
        options={{
          delay: 50,
          deleteSpeed: 50,
          strings: [
            "Software Engineer",
            "Helping shape the future",
          ],
          autoStart: true,
          loop: true,
        }}
      />
      <div className="buttons">
        <Button title="About Me" href="#about" newPage={false} />
        <Button title="Resume" href="http://web.tecnico.ulisboa.pt/ist425417/Download/Luis_Sousa_CV.pdf" />
      </div>
      <Socials className="socials" />
      <a className="scroll" href="#about">
        <HiOutlineArrowNarrowDown className="arrow" />
        <p>Scroll Down</p>
        <HiOutlineArrowNarrowDown className="arrow" />
      </a>
    </section>
  );
};

export default Home;
