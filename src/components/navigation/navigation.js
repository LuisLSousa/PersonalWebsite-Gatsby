import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

import "./navigation.css";

const Navigation = () => {
  const [navigation, setNavigation] = useState(false);
  const [openMenu, toggleMenu] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    /* Close the menu when the user clicks outside of it */
    const closeMenu = (event) => {
      if (menuRef.current && menuRef.current.contains(event.target)) {
        return;
      }
      toggleMenu(false);
    };
    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);

  // change navbar background on scroll
  const changeBackground = () => {
    if (window.scrollY > 50) {
      setNavigation(true);
    } else {
      setNavigation(false);
    }
  };

  useEffect(() => {
    // initiate the event handler
    window.addEventListener("scroll", changeBackground);
    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener("scroll", changeBackground);
    };
  });

  return (
    <nav ref={menuRef}>
        <div className="mobileMenu">
          <Link
            className="logo"
            activeClass="selected"
            to="home"
            spy={true}
            smooth={true}
            offset={-55}
            duration={600}
            isDynamic={true}
          >
            Luís Sousa
          </Link>
            <button onClick={() => toggleMenu(!openMenu)}
            className="menuButton"
            ref={buttonRef}
            aria-label="Navigation">
              <div className={openMenu ? "menuLayer open" : "menuLayer"}/>
              <div className={openMenu ? "menuLayer open" : "menuLayer"}/>
              <div className={openMenu ? "menuLayer open" : "menuLayer"}/>
            </button>
        </div>
      <ul className={openMenu ? "menu open" : "menu"}
        openMenu={openMenu}>
        <li className="navItem">
          <Link
            className="link"
            activeClass="selected"
            to="home"
            spy={true}
            smooth={true}
            offset={-55}
            duration={600}
            isDynamic={true}
          >
            Home
          </Link>
        </li>
        <li className="navItem">
          <Link
            className="link"
            activeClass="selected"
            to="about"
            spy={true}
            smooth={true}
            offset={-55}
            duration={600}
            isDynamic={true}
          >
            About Me
          </Link>
        </li>
        <li className="navItem">
          <Link
            className="link"
            activeClass="selected"
            to="experience"
            spy={true}
            smooth={true}
            offset={-55}
            duration={600}
            isDynamic={true}
          >
            Experience
          </Link>
        </li>
        <li className="navItem">
          <Link
            className="link"
            activeClass="selected"
            to="education"
            spy={true}
            smooth={true}
            offset={-55}
            duration={600}
            isDynamic={true}
          >
            Education
          </Link>
        </li>
        <li className="navItem">
          <Link
            className="link"
            activeClass="selected"
            to="projects"
            spy={true}
            smooth={true}
            offset={-55}
            duration={600}
            isDynamic={true}
          >
            Projects
          </Link>
        </li>
        <li className="navItem">
          <Link
            className="link"
            activeClass="selected"
            to="skills"
            spy={true}
            smooth={true}
            offset={-55}
            duration={600}
            isDynamic={true}
          >
            Skills
          </Link>
        </li>
        <li className="navItem">
          <Link
            className="link"
            activeClass="selected"
            to="contact"
            spy={true}
            smooth={true}
            offset={-55}
            duration={600}
            isDynamic={true}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
