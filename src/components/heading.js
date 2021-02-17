import React from "react";
import styled from 'styled-components';

const StyledHeading = styled.div `
    margin-top: 3vh;
    text-align: center;
    text-transform: uppercase;

    h1 {
        font-size: 2.4rem;
        margin-bottom: 3vh;
        font-weight: 550;
        font-family: 'Montserrat',sans-serif;
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