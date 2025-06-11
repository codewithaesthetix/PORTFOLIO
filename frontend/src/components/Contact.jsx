import { useState } from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiFiverr } from 'react-icons/si';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  // ✅ 1. State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // ✅ 2. Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // ✅ 3. Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // reset form
      }
    } catch (error) {
      alert('Failed to send message');
      console.error('Error:', error);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Get In <span className="highlight">Touch</span>
        </motion.h2>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            {/* Contact Info */}
            <h3 className="contact-subtitle">Contact Information</h3>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon"><svg /></div>
                <a href="mailto:kazamali562@gmail.com">kazamali562@gmail.com</a>
              </div>
              <div className="contact-method">
                <div className="contact-icon"><svg /></div>
                <a href="tel:+921234567890">+92 316 6058193</a>
              </div>
            </div>

            <div className="social-links">
              {/* Social Links */}
              <a href="https://wa.me/message/WXQYDK2JHMBMD1" target="_blank" rel="noreferrer"><FaWhatsapp size={24} /></a>
              <a href="https://www.instagram.com/aesthetic_arrick?igsh=bGR2MjhhMGM0cjA1" target="_blank" rel="noreferrer"><FaInstagram size={24} /></a>
              <a href="https://www.facebook.com/share/1LctbaPM9T/" target="_blank" rel="noreferrer"><FaFacebook size={24} /></a>
              <a href="https://github.com/signup?source=form-home-signup&user_email=" target="_blank" rel="noreferrer"><SiGithub size={24} /></a>
              <a href="http://fiverr.com/users/ghulaammuhammad" target="_blank" rel="noreferrer"><SiFiverr size={24} /></a>
            </div>
          </motion.div>

          {/* ✅ Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" required value={formData.message} onChange={handleChange}></textarea>
            </div>
            <motion.button whileHover={{ scale: 1.05 }} type="submit" className="submit-btn">
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
