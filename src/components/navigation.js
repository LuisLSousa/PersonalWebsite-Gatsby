import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components"
import { Link } from 'react-scroll';

// CSS
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

    ${'' /* Blur the entire navbar on scroll */}
    .navigation.active {
        backdrop-filter: blur(10px);
        background-color: rgba(10, 10, 10, 0.3);
        width: 100vw;
        justify-content: flex-end;
    }

      @media only screen and (max-width: 800px) {
        position: fixed;
        width: 100vw;
        bottom: 0;

        .navigation.active {
            width: auto;
            justify-content: flex-start;
        }
      }
    `,
    Items: styled.ul`
      display: flex;
      list-style: none;
  
      @media only screen and (max-width: 800px) {
        position: fixed;
        right: 0;
        top: 0;
        height: 100%;
        flex-direction: column;
        justify-content: flex-start !important;
        backdrop-filter: blur(10px);
        background-color: rgba(10, 10, 10, 0.3);
        padding: 0.5rem;
        padding-top: 3rem;
        transition: 0.2s ease-out;
        transform: ${({ openMenu }) => openMenu ? `translateX(0)` : `translateX(100%)`};
      }
    `,
    Item: styled.li`
        font-size: 1em;
        font-weight: 550;
        color: white;
        padding: 0;
        margin: 1.5em;
        text-transform: uppercase;
        cursor: pointer;

        .active {
            border-bottom: 3px solid rgb(1, 164, 240);
    }
      
      @media only screen and (max-width: 800px) {
          margin: 1rem;
      }
    `
};

const MenuButton = {
    Wrapper: styled.button`
        height: 2rem;
        width: 2rem;
        position: fixed;
        z-index: 1;
        font-size: 12px;
        right: 7.5vw;
        top: 2vh ;
        display: none;
        margin: 0;
  
      @media only screen and (max-width: 800px) {
        display: block;
      }
  
      /* Remove default button styles */
      border: none;
      background: transparent;
      outline: none;
      cursor: pointer;  
      
    `,
    Lines: styled.div`

      &,
      &:after,
      &:before {
        /* Create lines */
        height: 2px;
        pointer-events: none;
        display: block;
        content: "";
        width: 100%;
        background-color: white;
        position: absolute;
      }
  
      &:after {
        /* Move bottom line below center line */
        top: -0.5rem;
      }
  
      &:before {
        /* Move top line on top of center line */
        top: 0.5rem;
      }
    `
};

const Navigation = () => {
    const [navigation, setNavigation] = useState(false);
    const [openMenu, toggleMenu] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        /* Close the menu when the user clicks outside of it */
        const closeMenu = event => {
            if (menuRef.current && menuRef.current.contains(event.target)) {
                return;
            }
            else if (buttonRef.current!==event.target) {
                toggleMenu(false);
            }
        };

        document.addEventListener("mousedown", closeMenu);
        return () => document.removeEventListener("mousedown", closeMenu);
    }, []);

    // change navbar background on scroll
    const changeBackground = () => {
        if (window.scrollY > 50) {
            setNavigation(true);
        }
        else {
            setNavigation(false);
        }
    };

    useEffect(() => {
        // initiate the event handler
        window.addEventListener('scroll', changeBackground);
        // this will clean up the event every time the component is re-rendered
        return function cleanup() {
            window.removeEventListener('scroll', changeBackground);
        }
    })

    return (

        <Navbar.Wrapper>
            <MenuButton.Wrapper openMenu={openMenu} onClick={() => toggleMenu(!openMenu)} ref={buttonRef}>
                <MenuButton.Lines />
            </MenuButton.Wrapper>
            <Navbar.Items className={navigation ? 'navigation active' : 'navigation'} ref={menuRef} openMenu={openMenu}>
                <Navbar.Item>
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration={600}>Home</Link>
                </Navbar.Item>
                <Navbar.Item>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={600}>About</Link>
                </Navbar.Item>
                <Navbar.Item>
                    <Link activeClass="active" to="education" spy={true} smooth={true} offset={-50} duration={600}>Education</Link>
                </Navbar.Item>
                <Navbar.Item>
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={600}>Projects</Link>
                </Navbar.Item>
                <Navbar.Item>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={600}>Contact</Link>
                </Navbar.Item>
            </Navbar.Items>
        </Navbar.Wrapper>

    );
}

export default Navigation;