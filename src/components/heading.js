import React from "react";
import styled from 'styled-components';

const StyledHeading = styled.div `
    margin-top: 3vh;
    text-align: center;
    text-transform: uppercase;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 2vh;
        font-weight: 600;
        font-family: 'Montserrat',sans-serif;
    }
    @media (max-width: 562px) {
      h1 {
        font-size: 1.6rem;

      }
  }
`

const Heading = ({title }) => {

  return (
    <StyledHeading>
      <h1 className="">{title}</h1>
    </StyledHeading>
  );
};

export default Heading;