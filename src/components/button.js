import React from "react";
import styled from 'styled-components';

const StyledButton = styled.div`
    margin: 1rem;
    margin-top: 2vh;
    --width: 180px;
    --height: 60px;
    width: var(--width);
    height: var(--height);
    display: flex;
    justify-content: center;
    align-items: center;

  .center {
    width: var(--width);
    height: var(--height);
    position: absolute;
  }

  .btn {
    width: var(--width);
    height: var(--height);
    cursor: pointer;
    background: transparent;
    border: 2px solid rgba(255,255,255,0.8);
    outline: none;
    transition: 1s ease-in-out;
  }

  svg {
    position: absolute;
    width: var(--width);
    height: var(--height);
    left: 0;
    top: 0;
    fill: none;
    stroke: #EFFFFA;
    stroke-dasharray: 150 480;
    stroke-dashoffset: 150;
    transition: 0.6s ease-in-out;
  }

  .btn:hover svg {
    stroke-dashoffset: -480;
  }

  .btn:hover {
    box-shadow: 5px 5px rgba(255,255,255, 0.8);
  }

  .btn:active {
    box-shadow: 3px 3px rgba(100,100,100, 0.8);
    transition: 0.1s;
    transform: translateY(0.25em);

  }

  .btn span {
    color: white;
    font-weight: 550;
  }

  @media (max-width: 562px) {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        --width: 100px;
        --height: 40px;
  }
`

const Button = ({ title, targetWebsite }) => {

    return (
        <StyledButton onClick={() => window.open(targetWebsite, "_blank")}>
            <div className="center">
                <button className="btn">
                    <svg viewBox="0 0 180 60" className="border">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" strokeWidth="3" className="bg-line" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" strokeWidth="3" className="hl-line" />
                    </svg>
                    <span>{title}</span>
                </button>
            </div>
        </StyledButton>
    );
};

export default Button;