import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import { Link } from 'react-scroll';

// CSS
const StyledSection = styled.section`
.navigation {
    position: fixed;
    z-index: 1;
    display: inline-flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 1em;
    right: 0;
    width: 100vw;
    position: fixed !important;
    font-family: "Montserrat", sans-serif;
    list-style: none;

}

.navigation.active {
    ${'' /* background-color: #121212;
    border-bottom: 2px solid rgba(255,255,255, 0.8); */}
    backdrop-filter: blur(10px);
    background-color: rgba(10, 10, 10, 0.3);
}

.navigation .item {
    font-size: 1em;
    font-weight: 550;
    color: white;
    padding: 0;
    margin: 1.5em;
    text-transform: uppercase;
}

.item:hover {
    cursor: pointer;
}

.item > .active {
    border-bottom: 3px solid rgb(1, 164, 240);
}

@media (max-width: 800px) {
    .navigation {
        backdrop-filter: blur(5px);
        background-color: rgba(0, 0, 0, 0.3);
        justify-content: space-evenly;
        padding-right: 0;
    }
    .navigation .item {
        font-size: 2.4vw;
        font-weight: 550;
        padding-bottom: 0.4em;
        margin: 0;
    }
}
`

const Navigation = () => {
    const [navigation, setNavigation] = useState(false);

    // change navbar background on scroll
    const changeBackground = () => {
        if(window.scrollY > 50) {
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
            window.removeEventListener('scroll', changeBackground);        }
      })
    

    return (
        <StyledSection>
            <nav className={navigation ? 'navigation active' : 'navigation'}>
                <li className="item">
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration={600}>Home</Link>
                </li>
                <li className="item">
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={600}>About</Link>
                </li>
                <li className="item">
                    <Link activeClass="active" to="education" spy={true} smooth={true} offset={-50} duration={600}>Education</Link>
                </li>
                <li className="item">
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={600}>Projects</Link>
                </li>
                <li className="item">
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={600}>Contact</Link>
                </li>
            </nav>
        </StyledSection>
    );
}

export default Navigation;