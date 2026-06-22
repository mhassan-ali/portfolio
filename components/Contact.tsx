'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, CheckCircle, AlertTriangle, Loader2, Send } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa6';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successActive, setSuccessActive] = useState(false);
  const [errorActive, setErrorActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleValidationAndSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();

    // Validations
    if (trimmedName.length < 2) {
      triggerError('Name must be at least 2 characters long.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      triggerError('Please enter a valid email address.');
      return;
    }

    if (trimmedMessage.length < 10) {
      triggerError('Message must be at least 10 characters long.');
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: trimmedName,
        from_email: trimmedEmail,
        message: trimmedMessage,
      };

      console.log('Sending with:', {
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        params: templateParams
      });

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // Trigger success state
      setSuccessActive(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      // Auto dismiss success card after 4 seconds
      setTimeout(() => {
        setSuccessActive(false);
      }, 4000);

    } catch (err: any) {
      console.error('EmailJS Submission Error:', err);
      triggerError(err.message || 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerError = (msg: string) => {
    setErrorMessage(msg);
    setErrorActive(true);
  };

  const closeErrorCard = () => {
    setErrorActive(false);
  };

  // Magnetic button effect simulation in React
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'translate(0px, 0px)';
  };

  return (
    <section id="contact" className="contact-section scroll-reveal">
      <div className="section-container">
        <motion.div 
          className="contact-layout-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left: Titles and info cards */}
          <div className="contact-left-info-col">
            <div className="contact-header-block">
              <h2 className="contact-section-title text-[var(--text-heading)]">
                <span className="weight-light">Got an idea?</span><br />
                <span className="weight-bold text-blue">Let's talk.</span>
              </h2>
              <p className="contact-section-sub">Open to internships, freelance work & cool collaborations</p>
            </div>

            <div className="contact-quick-cards-stack">
              <a 
                href="mailto:m.hassanali.ce@gmail.com" 
                className="contact-info-card btn-magnetic"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="card-icon-area">
                  <Mail size={18} />
                </div>
                <div className="card-text-area">
                  <span>Email:</span>
                  <p>m.hassanali.ce@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+923196573297" 
                className="contact-info-card btn-magnetic"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="card-icon-area">
                  <Phone size={18} />
                </div>
                <div className="card-text-area">
                  <span>Phone:</span>
                  <p>+92 319 6573297</p>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/muhammad-hassan-ali7/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-info-card btn-magnetic"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="card-icon-area">
                  <FaLinkedinIn size={18} />
                </div>
                <div className="card-text-area">
                  <span>LinkedIn:</span>
                  <p>muhammad-hassan-ali7</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-right-form-col">
            <div className="contact-form-card glass-panel relative">
              <form onSubmit={handleValidationAndSubmit} className="handcrafted-form" id="main-contact-form">
                <div className="form-input-group">
                  <label htmlFor="name-input">Full Name</label>
                  <input 
                    type="text" 
                    id="name-input" 
                    required 
                    placeholder="Hassan Ali"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-input-group">
                  <label htmlFor="email-input">Email Address</label>
                  <input 
                    type="email" 
                    id="email-input" 
                    required 
                    placeholder="yourname@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-input-group">
                  <label htmlFor="subject-input">Subject</label>
                  <input 
                    type="text" 
                    id="subject-input" 
                    required 
                    placeholder="Project Collaboration"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div className="form-input-group">
                  <label htmlFor="message-input">Message</label>
                  <textarea 
                    id="message-input" 
                    required 
                    placeholder="Write your thoughts..." 
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-form-submit btn-magnetic" 
                  id="btn-form-submit"
                  disabled={isSubmitting}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending...</span>
                      <Loader2 className="animate-spin" size={16} />
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>

              {/* Success Card Overlay */}
              <div className={`form-success-card ${successActive ? 'active' : ''}`} id="form-success-alert">
                <CheckCircle className="success-check-icon text-[#10b981]" size={48} />
                <h3>Thanks!</h3>
                <p>Hassan will get back to you soon 🎉</p>
              </div>

              {/* Error Card Overlay */}
              <div className={`form-error-card ${errorActive ? 'active' : ''}`} id="form-error-alert">
                <AlertTriangle className="error-warning-icon text-[#ef4444]" size={48} />
                <h3>Error!</h3>
                <p id="error-message-text">{errorMessage}</p>
                <button 
                  type="button" 
                  className="btn-hero btn-hero-outline" 
                  style={{ marginTop: '20px', padding: '8px 20px', fontSize: '0.85rem' }} 
                  id="btn-error-close"
                  onClick={closeErrorCard}
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
