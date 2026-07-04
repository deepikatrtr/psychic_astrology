import React, { useState } from 'react';
import { Calendar, Clock, User, Phone as PhoneIcon, Mail, BookOpen, MessageSquare } from 'lucide-react';


export default function Book({ embedded = false }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: 'Get Ex-Love Back',
    problem: ''
  });

  const services = [
    "Get Ex-Love Back",
    "Negative Entity Removal",
    "Love Spell Caster",
    "Husband & Wife Problems",
    "Marriage Problems",
    "Black Magic Removal",
    "Evil Spirit Removal",
    "Evil Eye Removal",
    "Spiritual Healing",
    "Psychic Reading",
    "Love Marriage Solution",
    "Breakup Problem Solution"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const message = `Appointment Request

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Date: ${form.date}
Time: ${form.time}
Service: ${form.service}
Problem: ${form.problem}`;

    // Open WhatsApp link in new tab
    const url = `https://wa.me/447722131999?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    window.dispatchEvent(new CustomEvent('show-toast', { detail: 'Connecting you to Guruji to confirm appointment...' }));
  };

  return (
    <div style={{ paddingBottom: embedded ? '0' : '60px' }}>
      
      {/* 1. HEADER */}
      {!embedded && <section className="section-padding" style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px' }}>
            <span className="ornament-star">✦</span>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '0.25em', fontWeight: '600' }}>
              SCHEDULE YOUR SESSION
            </span>
            <span className="ornament-star">✦</span>
          </div>

          <h1 className="font-display text-gold-gradient text-shadow-gold text-popup-anim" style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '20px' }}>
            Book An Appointment
          </h1>
          <div className="ornament-line" style={{ maxWidth: '350px' }} />
          <p style={{
            fontSize: '16px',
            color: 'var(--text-primary)',
            maxWidth: '650px',
            margin: '20px auto 0 auto',
            lineHeight: '1.7'
          }}>
            Choose a convenient time that works for you - Guruji will personally reach out to confirm your session.
          </p>
        </div>
      </section>}

    {/* 2. FORM LAYOUT */}
<section className="section-padding" id="book-session">
  <div className="container" style={{
    display: 'flex',
    justifyContent: 'center'
  }} id="booking-grid">



  
          {/* Booking Form */}
          <div className="glass-card" style={{ padding: '40px 30px', textAlign: 'left', width: '100%', maxWidth: '620px' }}>
            <h3 className="font-display text-gold-gradient" style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '25px', textAlign: 'center' }}>
              Divine Consultation Request
            </h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Name & Phone Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '15px'
              }} className="form-row-2">
                
                {/* Full Name */}
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    style={inputStyle}
                  />
                  <User size={16} style={iconStyle} />
                </div>
                
                {/* Phone Number */}
                <div style={{ position: 'relative' }}>
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={e => setForm({...form, phone: e.target.value})}
                    style={inputStyle}
                  />
                  <PhoneIcon size={16} style={iconStyle} />
                </div>

              </div>

              {/* Email Address */}
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  style={inputStyle}
                />
                <Mail size={16} style={iconStyle} />
              </div>

              {/* Date & Time Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '15px'
              }} className="form-row-2">
                
                {/* Date */}
                <div style={{ position: 'relative' }}>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={e => setForm({...form, date: e.target.value})}
                    style={inputStyle}
                  />
                  <Calendar size={16} style={iconStyle} />
                </div>

                {/* Time */}
                <div style={{ position: 'relative' }}>
                  <input
                    type="time"
                    required
                    value={form.time}
                    onChange={e => setForm({...form, time: e.target.value})}
                    style={inputStyle}
                  />
                  <Clock size={16} style={iconStyle} />
                </div>

              </div>

              {/* Service Selection */}
              <div style={{ position: 'relative' }}>
                <select
                  value={form.service}
                  onChange={e => setForm({...form, service: e.target.value})}
                  style={{
                    ...inputStyle,
                    paddingLeft: '42px',
                    appearance: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {services.map((title, idx) => (
                    <option key={idx} value={title} style={{ background: 'var(--bg-deep)', color: '#fff' }}>
                      {title}
                    </option>
                  ))}
                </select>
                <BookOpen size={16} style={iconStyle} />
              </div>

              {/* Problem Description */}
              <div style={{ position: 'relative' }}>
                <textarea
                  required
                  rows={4}
                  placeholder="Briefly describe your concern..."
                  value={form.problem}
                  onChange={e => setForm({...form, problem: e.target.value})}
                  style={{
                    ...inputStyle,
                    paddingLeft: '42px',
                    resize: 'none',
                    fontFamily: 'var(--font-sans)'
                  }}
                />
                <MessageSquare size={16} style={{ ...iconStyle, top: '22px' }} />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="primary-button"
                style={{
                  background: 'linear-gradient(135deg, #10b981, #047857)', // whatsapp greens
                  color: '#fff',
                  border: 'none',
                  fontSize: '13px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 15px rgba(16, 185, 129, 0.25)',
                  marginTop: '10px'
                }}
              >
                CONFIRM ON WHATSAPP {"->"}
              </button>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}

// Inline input styles
const inputStyle = {
  width: '100%',
  padding: '14px 16px 14px 42px',
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid var(--glass-border)',
  borderRadius: '8px',
  color: 'var(--cream)',
  fontSize: '14px',
  outline: 'none',
  transition: 'var(--transition-fast)'
};

const iconStyle = {
  position: 'absolute',
  left: '16px',
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'var(--gold)'
};
