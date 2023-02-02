import { useRef } from "react";

import emailjs from "emailjs-com";

import { FiMail } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_f8gr9fp",
      "template_vs15elp",
      form.current,
      "xx2HzIcm5a-qDtGjH"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>johanna.stoicanescu@gmail.com</h5>
            <a
              href="mailto:johanna.stoicanescu@gmail"
              target="_blank"
              rel="noreferrer"
            >
              Send an email
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>0612345678</h5>
            <a
              href="https://api.whatsapp.com/send?phone+33770331990"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            cols="30"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
