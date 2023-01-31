import React, { useEffect, useState } from "react";
import particlesParams from "./particles/particles";
import Particles from "react-tsparticles";
import Typewriter from 'typewriter-effect';
import Button from "../../components/button/button";
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./home.css"

// TODO: import light and dark theme colors from a separate file

const rootTheme = document.querySelector(':root');

const changeThemeColor = (isLightTheme) => {
  if (isLightTheme) {
    rootTheme.style.setProperty('--color-bg', '#f7f3e6'); // beige
    rootTheme.style.setProperty('--color-primary', 'rgb(0, 153, 153)'); // teal
    rootTheme.style.setProperty('--color-primary-faded', 'rgba(57, 114, 255, 0.5)'); // light blue
    rootTheme.style.setProperty('--color-primary-variant', 'rgba(102, 204, 255, 0.4)'); // light blue
    rootTheme.style.setProperty('--color-secondary', '#555'); // dark gray
    rootTheme.style.setProperty('--color-secondary-faded', 'rgba(0, 0, 0, 0.6)'); // TBD
    rootTheme.style.setProperty('--color-secondary-light', 'rgba(0, 0, 0, 0.2)'); // TBD
    rootTheme.style.setProperty('--color-border', 'rgba(0, 0, 0, 0.8)'); // TBD


    // rootTheme.style.setProperty('--color-bg', '#f2f2f2'); // 
    // rootTheme.style.setProperty('--color-primary', 'rgb(0, 157, 224)'); // IST Blue
    // rootTheme.style.setProperty('--color-primary-faded', 'rgba(0, 157, 224, 0.5)'); // IST Blue
    // rootTheme.style.setProperty('--color-primary-variant', 'rgba(102, 204, 255, 0.4)'); // light blue
    // rootTheme.style.setProperty('--color-secondary', '#010120'); // dark blue
    // rootTheme.style.setProperty('--color-secondary-faded', 'rgba(0, 0, 0, 0.6)'); // TBD
    // rootTheme.style.setProperty('--color-secondary-light', 'rgba(0, 0, 0, 0.2)'); // TBD
    // rootTheme.style.setProperty('--color-border', 'rgba(0, 0, 0, 0.8)'); // TBD
  }
  else {
    rootTheme.style.setProperty('--color-bg', '#010120');
    rootTheme.style.setProperty('--color-primary', 'rgb(77, 181, 255)');
    rootTheme.style.setProperty('--color-primary-faded', 'rgb(77, 181, 255, 0.5)');
    rootTheme.style.setProperty('--color-primary-variant', 'rgba(9, 58, 131, 0.4)');
    rootTheme.style.setProperty('--color-secondary', '#fff');
    rootTheme.style.setProperty('--color-secondary-faded', 'rgba(255, 255, 255, 0.6)');
    rootTheme.style.setProperty('--color-secondary-light', 'rgba(255, 255, 255, 0.2)');
    rootTheme.style.setProperty('--color-border', 'rgba(255, 255, 255, 0.8)');
  }
}

const Home = () => {
  const [isLightTheme, toggleTheme] = useState(false);

  // Change theme color
  useEffect(() => {
    changeThemeColor(isLightTheme);
  }, [isLightTheme]);


  return (
    <section id="home" className="home">
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
      <button className="themeButton" onClick={() => toggleTheme(!isLightTheme)} aria-label="Theme" />
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
