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

  // // change navbar background on scroll
  // const changeBackground = () => {
  //   if (window.scrollY > 50) {
  //     setNavigation(true);
  //   } else {
  //     setNavigation(false);
  //   }
  // };

  // useEffect(() => {
  //   // initiate the event handler
  //   window.addEventListener("scroll", changeBackground);
  //   // this will clean up the event every time the component is re-rendered
  //   return function cleanup() {
  //     window.removeEventListener("scroll", changeBackground);
  //   };
  // });

  return (
    <nav ref={navRef}>
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
                <span className='icon'>{icon}</span>
                <span className='text'>{name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
