import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import particlesParams from "./particles/particles";
import Particles from "react-tsparticles";
import Typewriter from 'typewriter-effect';
import Button from "../../components/button/button";
import { HiOutlineArrowNarrowDown, HiMoon, HiSun } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./home.css"

const Home = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <section id="home" className="home">
      <label className="themeSwitch" aria-label="toggle theme">
        <input type="checkbox" onClick={() => { toggleTheme(); }} />
        <span className="slider"></span>
        <div className="themeOptions">
          <HiMoon className="moon" />
          <HiSun className="sun" />
        </div>

      </label>

      <Particles className="particles" options={particlesParams} />
      <h4 className="greeting">Hello, I'm</h4>
      <h1 className="title">Luís Sousa</h1>
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
