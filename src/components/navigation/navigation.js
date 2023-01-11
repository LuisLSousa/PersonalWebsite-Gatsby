import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { navList } from '../../data/navigation';

import "./navigation.css";

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

  return (
    <nav ref={navRef}>
      <div className="mobileTopBar">
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
          LL
        </Link>
        <button onClick={() => toggleMenu(!openMenu)}
          className="menuButton"
          aria-label="Navigation">
          <div className={openMenu ? "menuLayer open" : "menuLayer"} />
          <div className={openMenu ? "menuLayer open" : "menuLayer"} />
          <div className={openMenu ? "menuLayer open" : "menuLayer"} />
        </button>
      </div>
      <ul className={openMenu ? "navItems open" : "navItems"}>
        {navList.map(({ sectionId, icon, name }) => {
          return (
            <li>
              <Link className="navItem" activeClass="selected" to={sectionId} spy={true} smooth={true} offset={-55} duration={600} isDynamic={true}>
                <span className="sectionName">{name}</span>
                <span className="icon">{icon}</span>
              </Link>
            </li>
          )
        })}
        <div className='indicator'/>
      </ul>
    </nav>
  );
};

// TODO continue adding the indicator and the icon
export default Navigation;
