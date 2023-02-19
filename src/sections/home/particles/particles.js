import React, { useContext, useState, useEffect, useMemo } from "react";
import Particles from "react-tsparticles";
import particlesParams from "./particlesParams";
import { ThemeContext } from "../../../context/theme";

import "./particles.css";

const ParticlesComponent = () => {
    const { theme } = useContext(ThemeContext);

    const [particlesContainer, setParticlesContainer] = useState();

    const particlesLoaded = (container) => {
        setParticlesContainer(container);
    };

    useEffect(() => {
        if (particlesContainer && particlesContainer.currentTheme !== theme) {
            particlesContainer.loadTheme(theme);
        }
    }, [theme, particlesContainer]);

    return useMemo(() => (
        <Particles className="particles" loaded={particlesLoaded} options={particlesParams} />
    ), []);
};

export default ParticlesComponent;