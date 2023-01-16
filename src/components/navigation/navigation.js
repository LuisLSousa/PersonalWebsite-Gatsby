import { faCropSimple } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { navList } from '../../data/navigation';

import "./navigation.css";

// Change active menu select on nav bar on user scroll
export const sectionActive = () => {
  const scrollY = window.pageYOffset + 1;
  const sections = document.querySelectorAll("section");
  
  sections.forEach(current => {
    let paddingPxl = 128;
    let sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop,
      sectionId = current.getAttribute('id');
      console.log((scrollY >= sectionTop - paddingPxl && scrollY < sectionTop + sectionHeight))
    if (scrollY >= sectionTop - paddingPxl && scrollY < sectionTop + sectionHeight) {
      document.getElementById(`nav_${sectionId}`).classList.add('active');
      document.querySelector(`.navItems a[href*='#${sectionId}']`).classList.add('active');
    } else {
      document.getElementById(`nav_${sectionId}`).classList.remove('active');
      document.querySelector(`.navItem a[href*='#${sectionId}']`).classList.remove('active');
    }
  });
};

const Navigation = () => {
  const [openMenu, toggleMenu] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    /* Close the menu when the user clicks outside of it */
    const closeMenu = (event) => {
      if (navRef.current && navRef.current.contains(event.target)) {
        return;
      }
      toggleMenu(false);
    };
    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);

  useEffect(() => {
    // Initiate the event handler
    window.addEventListener('scroll', sectionActive);

    // Clean up the event every time the component is re-rendered
    return () => {
      window.removeEventListener('scroll', sectionActive);
    };
  }, []);

  return (
    <nav ref={navRef}>
      <div className="mobileTopBar">
        <Link className="logo" activeClass="selected" to="home" spy={true} smooth={true} duration={600} isDynamic={true}>
          LL
        </Link>
        <button onClick={() => toggleMenu(!openMenu)} className="menuButton" aria-label="Navigation">
          <div className={openMenu ? "menuLayer open" : "menuLayer"} />
          <div className={openMenu ? "menuLayer open" : "menuLayer"} />
          <div className={openMenu ? "menuLayer open" : "menuLayer"} />
        </button>
      </div>
      <ul className={openMenu ? "navItems open" : "navItems"}>
        {navList.map(({ sectionId, icon, name }) => {
          return (
            <li className='navItem' key={sectionId} id={`nav_${sectionId}`}>
              <a href={`#${sectionId}`} >
                <span className="sectionName">{name}</span>
                <span className="icon">{icon}</span>
              </a>
            </li>
          )
        })}
        <div className='indicator' />
      </ul>
    </nav>
  );
};

export default Navigation;
