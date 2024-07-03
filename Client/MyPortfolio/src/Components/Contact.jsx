import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" placeholder="Your Name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder="Your Email" />
        </label>
        <label>
          Message:
          <textarea name="message" placeholder="Your Message"></textarea>
        </label>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
