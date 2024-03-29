import React, { useRef, useState } from "react";
import Heading from "../../components/heading/heading";
import Button from "../../components/button/button"
import Socials from "../../components/socials/socials";
import "./contact.css"

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
    <section id="contact" className="contact">
      <Heading title="Contact" />
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
          <h2 className="fieldName">Name</h2>
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
          <h2 className="fieldName">Email Address</h2>
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
          <h2 className="fieldName">Message</h2>
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
        <div className="contactFooter">
          <Button title={buttonText} />
          <Socials className="socials" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
