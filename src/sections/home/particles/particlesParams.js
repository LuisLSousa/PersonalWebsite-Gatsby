import { LIGHT_THEME, DARK_THEME } from "../../../context/theme"

// TRIANGLES
const particlesParams = {
  fullScreen: {
    enable: false,
    zIndex: -1
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "rgb(0, 153, 153)",
      animation: {
        enable: false,
        speed: 20,
        sync: true
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 3,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "random",
      opacity: 0.4,
      width: 1,
      triangles: {
        enable: true,
        color: "rgb(0, 153, 153)",
        opacity: 0.1
      }
    },
    move: {
      enable: true,
      speed: 2,
      direction: "top",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: false,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1
        }
      },
      push: {
        particles_nb: 4
      },
    }
  },
  themes: [
    {
      name: LIGHT_THEME,
      default: {
        value: true,
        mode: "light"
      },
      options: {
        particles: {
          color: {
            // value: "rgb(85, 85, 85)"
            value: "rgb(0, 153, 153)"
          },
          line_linked: {
            triangles: {
              // color: "rgb(85, 85, 85)",
              color: "rgb(0, 153, 153)",
            }
          }
        }
      }
    },
    {
      name: DARK_THEME,
      default: {
        value: true,
        mode: "dark"
      },
      options: {
        particles: {
          color: {
            value: "#fff"
          },
          line_linked: {
            triangles: {
              color: "#fff",
            }
          }
        }
      }
    }
  ],
  retina_detect: true,
};

export default particlesParams;