import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./socials.css"

const Socials = () => {
    return (
        <div className="socials">
            <a href="https://www.linkedin.com/in/luis-srl-sousa/" target="_blank" rel="noreferrer">
                <FaLinkedin className="icon" title="Go to LinkedIn" size="40" />
            </a>
            <a href="https://github.com/LuisLSousa/" target="_blank" rel="noreferrer">
                <FaGithub className="icon" title="Go to GitHub" size="40" />
            </a>
        </div>
    )
}

export default Socials;