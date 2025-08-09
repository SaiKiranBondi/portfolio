import React from 'react';
import './Contact.css';
import data from '../data';

function Contact() {
  const { contact } = data;
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out!</p>
      <div className="contact-links">
        <a href={`mailto:${contact.email}`}>Email</a>
        <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;
