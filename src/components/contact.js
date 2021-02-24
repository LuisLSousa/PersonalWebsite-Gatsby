import React from "react";
import styled from "styled-components";
import Heading from "../components/heading";
import Button from "../components/button";

// ###### CSS #########
const Wrapper = styled.section`
  height: 100vh;
  border-top: 2px solid rgba(255, 255, 255, 0.8);
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  input {
    border: white;
    color: white;
  }
`;

// ####################

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Heading title="Contact" />
      <StyledDiv>
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label>
            <h2>Name</h2>
            <input type="text" name="name" id="name" />
          </label>
          <label>
            <h2>Your Email address</h2>

            <input type="email" name="email" id="email" />
          </label>
          <label>
            <h2>Message</h2>
            <textarea name="message" id="message" rows="5" />
          </label>
          <Button title="Send Message" type="submit" />
        </form>
      </StyledDiv>
    </Wrapper>
  );
};

export default Contact;
