import React, { useRef, useState } from "react";
import styled from "styled-components";
import Heading from "../components/heading";
import Button from "../components/button";

// ###### CSS #########
const Wrapper = styled.section`
  height: 94vh;
  border-top: 2px solid rgba(255, 255, 255, 0.8);
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  .field {
    margin-left: 1rem;
    background: transparent;
    color: rgb(232, 232, 232);
    border: 2px solid rgb(75, 85, 99);
    margin-bottom: 1vh;
    padding: 0.5rem 1rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    transition-duration: 0.3s;
  }

  .field:focus {
    border: 2px solid #effffa;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  .name {
    width: 20vw;
  }

  .email {
    width: 25vw;
  }

  .message {
    width: 35vw;
  }

  h2 {
    margin-left: 1rem;
    margin-bottom: 1vh;
  }

  .btn {
    margin: 0 !important;
  }

  @media (max-width: 562px) {
    .field {
      margin-left: 0;
      font-size: 1rem;
      line-height: 1.5rem;
    }
    h2 {
      margin-left: 0;
    }
    .name {
      width: 60vw;
    }
    .email {
      width: 70vw;
    }
    .message {
      width: 80vw;
    }
  }
`;

// ####################

const Contact = () => {
  const nameRef = useRef(null);
  const [name, setName] = useState("");

  const emailRef = useRef(null);
  const [email, setEmail] = useState("");

  const messageRef = useRef(null);
  const [message, setMessage] = useState("");

  const [buttonText, setButtonText] = useState("Send Message");

  return (
    <Wrapper id="contact">
      <Heading title="Contact" />
      <StyledDiv>
        <form
          method="post"
          name="contact"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label>
            <h2>Name</h2>
            <input
              className="name field"
              type="text"
              name="name"
              placeholder="Michael Scott"
              id="name"
            />
          </label>
          <label>
            <h2>Your Email address</h2>
            <input
              className="email field"
              type="email"
              name="email"
              placeholder="michael.scott@example.com"
              id="email"
            />
          </label>
          <label>
            <h2>Message</h2>
            <textarea
              className="message field"
              name="message"
              id="message"
              placeholder="Your message"
              rows="5"
            />
          </label>
          <Button title={buttonText} type="submit" />
        </form>
      </StyledDiv>
    </Wrapper>
  );
};

export default Contact;
