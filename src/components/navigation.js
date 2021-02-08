import React from 'react';
import styled from "styled-components"
import { Link } from 'react-scroll';

// CSS
const StyledSection = styled.section`
    .navigation {
    position: fixed;
    z-index: 1;
    top: 0;
    display: inline-flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 1.5vw;
    margin-bottom: 2vh;
    right: 1vw;
    width: 100vw;
    position: fixed !important;
    font-family: "Montserrat", sans-serif;
    list-style: none;
}

.navigation .item {
    font-size: 1em;
    font-weight: 550;
    margin-bottom: 0;
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
        backdrop-filter: blur(10px);
        background-color: rgba(255, 255, 255, 0.3);
        box-shadow: 5px rgba(0, 0, 0);
        padding-top: 1.5em;
        padding-bottom: 1.5em;
        justify-content: space-evenly;
        margin: 0;
        right: 0;
        top: 0;
    }
    .navigation .item {
        font-size: 2.4vw;
        padding-bottom: 0.4em;
        margin: 0;
    }
}
`

const Navigation = () => {

    return (
        <StyledSection>
            <nav className='navigation'>
                <li className="item">
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration={600}>Home</Link>
                </li>
                <li className="item">
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={600}>About</Link>
                </li>
                <li className="item">
                    <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-50} duration={600}>Experience</Link>
                </li>
                <li className="item">
                    <Link activeClass="active" to="education" spy={true} smooth={true} offset={-50} duration={600}>Education</Link>
                </li>
                <li className="item">
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={600}>Projects</Link>
                </li>
            </nav>
        </StyledSection>
    );
}

export default Navigation;