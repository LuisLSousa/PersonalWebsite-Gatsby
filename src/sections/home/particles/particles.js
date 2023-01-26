const particlesParams = {
    fullScreen: {
        enable: false,
        zIndex: 0
    },
    background: {
        color: {
            value: "#010111",
        },
    },
    fpsLimit: 60,
    interactivity: {
        detectsOn: "window",
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "grab", // repulse, grab, bubble
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 20,
            },
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 0.8,
                },
            },
            repulse: {
                distance: 300,
                duration: 0.6,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            gravity: {
                enable: false,
            },
            outMode: "destroy",
            random: false,
            speed: 4,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                value_area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: true,
            value: 5,
        },
    },
    detectRetina: true,
}

export default particlesParams;