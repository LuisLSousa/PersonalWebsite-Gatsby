import React, { useState, useEffect, useRef } from "react";
import { navList } from '../../data/navigation';
import ThemeSwitch from "../themeSwitch/themeSwitch";

import "./navigation.css";

// Change active menu select on nav bar on user scroll
const setActiveSection = () => {
  const viewportHeight = window.innerHeight;
  const sections = document.querySelectorAll("section");

  sections.forEach(current => {
    let sectionId = current.getAttribute('id');
    let navItem = document.querySelector(`.navItems a[href*='#${sectionId}']`);

    // to account for the top padding of the section
    let topPaddingPxl = viewportHeight * 0.04;

    // size of the current section and its position relative to the viewport
    let rect = current.getBoundingClientRect();

    // add "active" to the class of the section currently in the viewport
    if (0 > rect.top - topPaddingPxl && 0 < rect.top + rect.height) {
      document.getElementById(`nav_${sectionId}`).classList.add('active');
      navItem.classList.add('active');
    } else {
      document.getElementById(`nav_${sectionId}`).classList.remove('active');
      navItem.classList.remove('active');
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

    // Clean up the event every time the component is re-rendered
    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener('scroll', setActiveSection);

    // Call the function to set the active section on initial page load
    setActiveSection();

    // Clean up the event every time the component is re-rendered
    return () => window.removeEventListener('scroll', setActiveSection);
  }, []);

  return (
    <nav ref={navRef}>
      <div className="mobileTopBar">
        <ThemeSwitch className="themeSwitch" />
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
