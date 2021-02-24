import React from "react";
import styled from "styled-components";
import Heading from "../components/heading";

// ###### CSS #########
const Wrapper = styled.section`
  border-top: 2px solid rgba(255, 255, 255, 0.8);
`;
// ####################

const Contact = () => {

  return (
    <Wrapper id="contact">
      <Heading title="Contact" />
    </Wrapper>
  );
};

export default Contact;
