import React, { useRef, useState } from "react";
import styled from "styled-components";
import Heading from "../heading/heading";
import Button from "../button/button"

// ###### CSS #########
const Wrapper = styled.section`
  border-top: 2px solid rgba(255, 255, 255, 0.8);
  height: 90vh;
  min-height: 600px;

  /* mobile */
  @media only screen and (max-height: 900px) {
    height: 85vh;
  }
  /* vertical ultrawide monitors */
  @media only screen and (min-height: 1400px) {
    height: 95vh;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  form {
    margin-bottom: 0;
  }

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
    margin-bottom: 3vh;
  }

  .field:focus {
    border: 2px solid #effffa;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  .name {
    min-width: 240px;
    width: 20vw;
  }

  .email {
    min-width: 300px;
    width: 25vw;
  }

  .message {
    min-width: 420px;
    width: 35vw;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    margin-left: 1rem;
    margin-bottom: 1vh;
  }

  .error {
    border-color: rgb(239, 68, 68);
    animation: shake 1s;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
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
      min-width: 180px;
      width: 60vw;
    }
    .email {
      min-width: 240px;
      width: 70vw;
    }
    .message {
      min-width: 240px;
      width: 80vw;
    }
  }
`;

// ####################

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Contact = () => {
  const nameRef = useRef(null);
  const [name, setName] = useState("");

  const emailRef = useRef(null);
  const [email, setEmail] = useState("");

  const messageRef = useRef(null);
  const [message, setMessage] = useState("");

  const [buttonText, setButtonText] = useState("Send");

  const onSubmit = (e) => {
    let valid = true;
    e.preventDefault();
    const form = e.target;

    // check if there are any empty fields
    if (!name) {
      valid = false;
      nameRef.current.classList.add("error");
      setTimeout(() => {
        nameRef.current.classList.remove("error");
      }, 1000);
    }

    if (!email) {
      valid = false;
      emailRef.current.classList.add("error");
      setTimeout(() => {
        emailRef.current.classList.remove("error");
      }, 1000);
    }

    if (!message) {
      valid = false;
      messageRef.current.classList.add("error");
      setTimeout(() => {
        messageRef.current.classList.remove("error");
      }, 1000);
    }

    if (valid) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          name: name,
          email: email,
          message: message,
        }),
      })
        .then(() => {
          setButtonText("Sent!");
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch(() => setButtonText("Error!"));
    }
  };

  return (
    <Wrapper id="contact">
      <Heading title="Contact" />
      <StyledDiv>
        <form
          method="post"
          name="contact"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={onSubmit}
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
              ref={nameRef}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <h2>Email Address</h2>
            <input
              className="email field"
              type="email"
              name="email"
              placeholder="michael.scott@example.com"
              id="email"
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <h2>Message</h2>
            <textarea
              className="message field"
              name="message"
              id="message"
              placeholder="Type your message..."
              rows="5"
              ref={messageRef}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <Button title={buttonText} />
        </form>
      </StyledDiv>
    </Wrapper>
  );
};

export default Contact;
