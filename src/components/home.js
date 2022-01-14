import React from "react";
import Typed from "react-typed";
import styled from "styled-components";
import particlesParams from "../components/particles";
import Particles from "react-tsparticles";

// ###### CSS #########
const StyledSection = styled.section`
  .particles {
    z-index: 0;
    position: absolute !important;
    left: 0;
    height: 100vh;
    width: 100vw;
    max-width: 100%;
  }

  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
  }

  .home h1 {
    font-size: 4em;
    margin-bottom: 0;
    color: white;
  }

  .home h3 {
    font-size: 2em;
    color: white;
    margin-top: 0.5em;
  }

  @media (max-width: 800px) {
    .home h1 {
      font-size: 3em;
    }
    .home h3 {
      font-size: 1.5em;
    }
  }
`;
// ####################

const Home = () => {
  return (
    <StyledSection>
    <div>
      <Particles className="particles" params={particlesParams} />
    </div>
      <section id="home" className="home">
        <h1 className="title">Luís Sousa</h1>
        <h3>
          <Typed
            strings={[
              "Software Engineer",
              "Full Stack Developer",
              "Exactly who you need!",
            ]}
            typeSpeed={60}
            backDelay={1000}
            backSpeed={50}
            loop
          />
        </h3>
      </section>
    </StyledSection>
  );
};

export default Home;
