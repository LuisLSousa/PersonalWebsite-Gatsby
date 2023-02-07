import React, { useState, useEffect, useRef } from "react";
import { navList } from '../../data/navigation';
import ThemeSwitch from "../themeSwitch/themeSwitch";

import "./navigation.css";

// Change active menu select on nav bar on user scroll
export const sectionActive = () => {
  const scrollY = window.pageYOffset + 1;
  const sections = document.querySelectorAll("section");

  sections.forEach(current => {
    let paddingPxl = 55;
    let sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop - paddingPxl && scrollY < sectionTop + sectionHeight) {
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

  // Close menu when user click outside of it
  useEffect(() => {
    const closeMenu = (event) => {
      if (navRef.current && navRef.current.contains(event.target)) {
        return;
      }
      toggleMenu(false);
    };
    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', sectionActive);

    sectionActive();

    // Clean up the event every time the component is re-rendered
    return () => {
      window.removeEventListener('scroll', sectionActive);
    };
  }, []);

  return (
    <nav ref={navRef}>
      <div className="mobileTopBar">
        <ThemeSwitch className="themeSwitch"/>
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
