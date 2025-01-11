import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/contact', { name, email, message })
      .then((response) => {
        alert('Thank you for reaching out!');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
