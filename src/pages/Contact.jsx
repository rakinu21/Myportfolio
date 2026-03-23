import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Contact from ${formData.name}`;
    const body = `Email: ${formData.email}%0D%0A%0D%0AMessage: ${formData.message}`;
    window.location.href = `mailto:ralphkineth20@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form glass max-w-md mx-auto p-8">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="form-input mb-4" style={{width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)'}} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="form-input mb-4" style={{width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)'}} />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required rows="5" className="form-input mb-4" style={{width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)'}} />
        <button type="submit" className="cta-btn glass px-8 py-3" style={{border: 'none', cursor: 'pointer'}}>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
