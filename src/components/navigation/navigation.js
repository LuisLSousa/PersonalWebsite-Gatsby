import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

// ###### CSS #########
const Navbar = {
  Wrapper: styled.nav`
    position: fixed;
    z-index: 1;
    display: inline-flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-end;
    right: 0;
    width: 100vw;

    .navigation.active {
      background-color: rgba(18, 18, 18, 0.9);
      width: 100vw;
      justify-content: flex-end;
    }

    /* if backdrop-filter support, blur the navbar*/
    @supports (
      (-webkit-backdrop-filter: blur(2em)) or (backdrop-filter: blur(2em))
    ) {
      .navigation.active {
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        background-color: rgba(18, 18, 18, 0.4);
        width: 100vw;
        justify-content: flex-end;
      }
    }

    @media only screen and (max-width: 800px) {
      .navigation.active {
        width: auto;
        justify-content: flex-start;
      }
    }
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;
    margin-left: 0;
    margin-bottom: 0;

    @media only screen and (max-width: 800px) {
      position: fixed;
      right: 0;
      top: 0;
      height: 100%;
      flex-direction: column;
      justify-content: flex-start !important;
      border-left: 2px solid rgba(255, 255, 255, 0.8);
      padding: 0.5rem;
      padding-top: 3rem;
      transition: 0.2s ease-out;
      transform: ${({ openMenu }) => openMenu ? `translateX(0)` : `translateX(100%)`};
      background-color: rgba(18, 18, 18, 0.9);

      @supports (
        (-webkit-backdrop-filter: blur(2em)) or (backdrop-filter: blur(2em))
      ) {
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        background-color: rgba(18, 18, 18, 0.3);
      }
    }
  `,
  Item: styled.li`
    font-size: 1em;
    font-weight: 550;
    color: rgb(180, 180, 180);
    padding: 0;
    margin: 1em;
    text-transform: uppercase;

    /* To highlight the current section */
    .selected {
      color: white;
    }

    .link {
      cursor: pointer;
    }

    @media only screen and (max-width: 800px) {
      margin: 1rem;
    }
  `,
};

// Mobile navigation
const StyledDiv = styled.div`
  position: fixed;
  z-index: 1;
  display: none;
  width: 100vw;
  background-color: #121212;
  border-bottom: 2px solid rgba(255, 255, 255, 0.8);

  .logo {
    padding-top: 0.5vh;
    margin: 0.75rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 2rem;
  }
  @media only screen and (max-width: 800px) {
    display: inline-flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const MenuButton = {
  Wrapper: styled.button`
    height: 2rem;
    font-size: 12px;
    display: none;
    margin: 0.75rem;
    cursor: pointer;
    border: none;
    background: transparent;
    outline: none;

    @media only screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: white;
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ openMenu }) =>
          openMenu ? "rotate(45deg)" : "rotate(0)"};
      }

      :nth-child(2) {
        opacity: ${({ openMenu }) => (openMenu ? "0" : "1")};
        transform: ${({ openMenu }) =>
          openMenu ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ openMenu }) =>
          openMenu ? "rotate(-45deg)" : "rotate(0)"};
      }
    }
  `,
};

// ####################

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
    <Navbar.Wrapper ref={menuRef}>
      <StyledDiv>
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
        <MenuButton.Wrapper
          openMenu={openMenu}
          onClick={() => toggleMenu(!openMenu)}
          ref={buttonRef}
          aria-label="Navigation"
        >
          <div />
          <div />
          <div />
        </MenuButton.Wrapper>
      </StyledDiv>
      <Navbar.Items
        className={navigation ? "navigation active" : "navigation"}
        openMenu={openMenu}
      >
        <Navbar.Item>
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
        </Navbar.Item>
        <Navbar.Item>
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
        </Navbar.Item>
        <Navbar.Item>
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
        </Navbar.Item>
        <Navbar.Item>
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
        </Navbar.Item>
        <Navbar.Item>
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
        </Navbar.Item>
        <Navbar.Item>
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
        </Navbar.Item>
        <Navbar.Item>
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
        </Navbar.Item>
      </Navbar.Items>
    </Navbar.Wrapper>
  );
};

export default Navigation;
