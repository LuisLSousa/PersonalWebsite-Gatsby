import { LIGHT_THEME, DARK_THEME } from "../../../context/theme"
// ############################################
// BASIC
// const particlesParams = {
//   fullScreen: {
//       enable: false,
//       zIndex: 0
//   },
//   background: {
//       opacity: 0,
//   },
//   fpsLimit: 60,
//   interactivity: {
//       detectsOn: "window",
//       events: {
//           onClick: {
//               enable: true,
//               mode: "push",
//           },
//           onHover: {
//               enable: true,
//               mode: "grab", // repulse, grab, bubble
//           },
//           resize: true,
//       },
//       modes: {
//           bubble: {
//               distance: 200,
//               duration: 2,
//               opacity: 0.8,
//               size: 20,
//           },
//           grab: {
//               distance: 200,
//               line_linked: {
//                   opacity: 0.8,
//               },
//           },
//           repulse: {
//               distance: 150,
//               duration: 0.6,
//           },
//       },
//   },
//   particles: {
//       color: {
//           value: "#B7B7B7",
//       },
//       links: {
//           color: "#B7B7B7",
//           distance: 150,
//           enable: true,
//           opacity: 0.5,
//           width: 1,
//       },
//       collisions: {
//           enable: true,
//       },
//       move: {
//           direction: "none",
//           enable: true,
//           gravity: {
//               enable: false,
//           },
//           outMode: "destroy",
//           random: false,
//           speed: 3,
//           straight: false,
//       },
//       number: {
//           density: {
//               enable: true,
//               value_area: 800,
//           },
//           value: 80,
//       },
//       opacity: {
//           value: 0.5,
//       },
//       shape: {
//           type: "circle",
//       },
//       size: {
//           random: true,
//           value: 4,
//       },
//   },
//   detectRetina: true,
// }
// ############################################

// ############################################
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
            value: "rgb(0, 153, 153)"
          },
          line_linked: {
            triangles: {
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

// ############################################

// ############################################
// SVG Polygon
// const particlesParams = {
//   fullScreen: {
//     enable: false,
//     zIndex: -1
//   },
//   detectRetina: false,
//   fpsLimit: 60,
//   interactivity: {
//     detectsOn: "window",
//     events: {
//       onHover: {
//         enable: true,
//         mode: "grab" // or "bubble"
//       },
//       resize: true
//     },
//     modes: {
//       bubble: {
//         color: "rgb(77, 181, 255)",
//         distance: 100,
//         duration: 2,
//         opacity: 1,
//         size: 10,
//         speed: 3
//       },
//       grab: {
//         distance: 300,
//         line_linked: {
//           opacity: 0.5,
//         },
//       },
//     }
//   },
//   particles: {
//     color: {
//       value: "#fff"
//     },
//     links: {
//       blink: false,
//       color: "#fff",
//       consent: false,
//       distance: 20,
//       enable: true,
//       opacity: 0.8,
//       width: 1
//     },
//     move: {
//       attract: {
//         enable: false,
//         rotate: {
//           x: 600,
//           y: 1200
//         }
//       },
//       bounce: false,
//       direction: "none",
//       enable: true,
//       outMode: "bounce",
//       random: false,
//       speed: 1,
//       straight: false
//     },
//     number: {
//       density: {
//         enable: false,
//         area: 2000
//       },
//       limit: 0,
//       value: 400
//     },
//     opacity: {
//       animation: {
//         enable: true,
//         minimumValue: 0.3,
//         speed: 0.5,
//         sync: false
//       },
//       random: { enable: true, minimumValue: 0.3 },
//       value: 0.8
//     },
//     shape: {
//       type: "circle"
//     },
//     size: {
//       value: 1
//     }
//   },
//   polygon: {
//     move: {
//       radius: 3
//     },
//     inlineArrangement: "equidistant",
//     scale: 1,
//     type: "inline",
//     position: {
//       x: 20,
//       y: 80
//     },
//     data: {
//       path:
//         // "M 0 0 L 40 0 L 40 180 L 130 180 L 130 220 L 0 220 z M 210 0 L 210 180 L 270 180 L 270 0 L 310 0 L 310 220 L 170 220 L 170 0 z M 350 0 L 350 220 L 390 220 L 390 0 z M 361 -24 L 376 -51 L 402 -51 L 387 -24 z M 430 0 L 560 0 L 560 40 L 470 40 L 470 90 L 560 90 L 560 220 L 430 220 L 430 180 L 520 180 L 520 130 L 430 130 L 430 0 z",
//       "M 0 0 L 40 0 L 40 180 L 130 180 L 130 220 L 0 220 z M 210 0 L 210 180 L 315 180 L 315 220 L 170 220 L 170 0 z",
//       size: {
//         width: 162.7,
//         height: 323.3
//       }
//     }
//   }
// };
// ############################################

export default particlesParams;