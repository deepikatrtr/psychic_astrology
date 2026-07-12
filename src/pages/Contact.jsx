import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  CalendarDays,
  Clock3,
  Globe2,
  Heart,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  User,
  Users
} from 'lucide-react';

import contactHero from '../assets/contact-cosmic-hero.webp';
import './Contact.css';

const PHONE_NUMBER = '+447722131999';

const steps = [
  {
    n: '01',
    t: 'Reach Out Privately',
    d: 'Call, WhatsApp or book online. Your concern is heard personally and kept completely confidential.'
  },
  {
    n: '02',
    t: 'Karmic Reading',
    d: 'Best Astrologer in London reads your energy and birth chart to identify the deeper cause behind your concern.'
  },
  {
    n: '03',
    t: 'Personalised Remedy',
    d: 'Receive guidance shaped for your situation through psychic insight, mantras and spiritual practices.'
  },
  {
    n: '04',
    t: 'Continued Guidance',
    d: 'Guruji supports your journey with clarity and care as you work toward lasting positive change.'
  }
];

const channels = [
  {
    icon: MessageCircle,
    title: 'Chat Privately',
    value: 'WhatsApp Guruji',
    detail: 'Replies within 5 minutes',
    href: `https://wa.me/${PHONE_NUMBER.replace('+', '')}`,
    accent: '#35e99b'
  },
  {
    icon: Mail,
    title: 'Email Us',
    value: 'thebestastrologerlondon@gmail.com',
    detail: 'Responses in 1-2 hours',
    href: 'mailto:thebestastrologerlondon@gmail.com',
    accent: '#ffad45'
  },
  {
    icon: CalendarDays,
    title: 'Book a Session',
    value: 'Personal consultation',
    detail: 'Choose your preferred time',
    href: '#book-session',
    accent: '#e16dff',
    isBooking: true
  },
  {
    icon: Clock3,
    title: 'Working Hours',
    value: '8:00 AM-8:00 PM',
    detail: 'Available every day',
    accent: '#62a8ff'
  },
  {
    icon: Star,
    title: 'Quick Response',
    value: 'Under 5 minutes',
    detail: 'Personal guidance from Guruji',
    accent: '#ff68b7'
  },
  {
    icon: Globe2,
    title: 'Worldwide Reach',
    value: 'All Over the World',
    detail: 'Worldwide consultations',
    accent: '#4de8f5'
  }
];

export default function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Scroll to booking form if navigated via /contact#book-session
  useEffect(() => {
    if (location.hash === '#book-session') {
      setTimeout(() => {
        document.getElementById('book-session')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location.hash]);

  const showToast = (detail) => {
    window.dispatchEvent(new CustomEvent('show-toast', { detail }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formattedText = `Hello Guruji Best Astrologer in London,
I would like to make a confidential inquiry.

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'N/A'}
*Message:* ${formData.message}`;

    const waLink = `https://wa.me/447722131999?text=${encodeURIComponent(formattedText)}`;
    window.location.href = waLink;
    showToast('Connecting you to Guruji on WhatsApp...');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleBookingJump = (event) => {
    event.preventDefault();
    document.getElementById('book-session')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="contact-page">
      <section
        className="contact-showcase"
        style={{ '--contact-hero-image': `url(${contactHero})` }}
      >
        <div className="contact-showcase__veil" />
        
        <div className="contact-showcase__inner">
          <div className="contact-showcase__main">
            <div className="contact-showcase__copy">
              <div className="contact-trust-badge">
                <Users size={19} />
                <span>Trusted all over the world</span>
              </div>

              <h1 className="contact-showcase__title">
                Divine Guidance
                <span>For A Better Tomorrow</span>
              </h1>

              <div className="contact-gold-divider">
                <span />
                <Sparkles size={22} />
                <span />
              </div>

              <p className="contact-showcase__lead">
                Accurate astrology, healing solutions and positive guidance to bring
                clarity, peace and success into your life.
              </p>

              <div className="contact-trust-stats">
                <div className="contact-trust-stat">
                  <span className="contact-trust-stat__icon"><ShieldCheck size={25} /></span>
                  <span><strong>100%</strong>Private &amp; confidential</span>
                </div>
                <div className="contact-trust-stat">
                  <span className="contact-trust-stat__icon"><Clock3 size={25} /></span>
                  <span><strong>8 AM-8 PM</strong>Working hours</span>
                </div>
                <div className="contact-trust-stat">
                  <span className="contact-trust-stat__icon"><Users size={25} /></span>
                  <span><strong>20,000+</strong>Lives transformed</span>
                </div>
              </div>

              <div className="contact-showcase__actions">
                <a
                  className="contact-call-cta"
                  href={`tel:${PHONE_NUMBER}`}
                  onClick={() => showToast('Opening secure line to Guruji...')}
                >
                  <Phone size={22} fill="currentColor" />
                  Call Guruji
                </a>
                <div className="contact-client-proof" aria-label="More than twenty thousand lives transformed">
                  <span className="contact-client-proof__avatars">
                    <i>SK</i><i>24</i><i>ॐ</i>
                  </span>
                  <span><strong>20,000+</strong>Lives Transformed</span>
                </div>
              </div>
            </div>

            <div className="contact-showcase__art-space" aria-hidden="true" />

            <a
              className="contact-phone-card"
              href={`tel:${PHONE_NUMBER}`}
              onClick={() => showToast('Opening secure line to Guruji...')}
            >
              <span className="contact-phone-card__orb"><Phone size={34} /></span>
              <span className="contact-phone-card__eyebrow">Direct Phone Line</span>
              <strong>+44 7722 131999</strong>
              <span className="contact-phone-card__detail">Available daily · 8:00 AM-8:00 PM</span>
              <span className="contact-phone-card__location">
                <MapPin size={14} /> Walthamstow, London · All Over the World
              </span>
              <span className="contact-phone-card__status">
                <i /> Available now
              </span>
            </a>
          </div>

          <div className="contact-channel-strip">
            {channels.map((item) => {
              const Icon = item.icon;
              const Card = item.href ? 'a' : 'div';
              const externalProps = item.href?.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {};

              return (
                <Card
                  key={item.title}
                  className="contact-channel"
                  href={item.href}
                  onClick={item.isBooking ? handleBookingJump : undefined}
                  style={{ '--channel-accent': item.accent }}
                  {...externalProps}
                >
                  <span className="contact-channel__icon"><Icon size={28} /></span>
                  <span className="contact-channel__content">
                    <strong>{item.title}</strong>
                    <span>{item.value}</span>
                    <small>{item.detail}</small>
                  </span>
                </Card>
              );
            })}
          </div>

          <div className="contact-showcase__blessing">
            <span />
            <Sparkles size={18} />
            <p>Guiding Your Life Towards Success &amp; Peace</p>
            <Sparkles size={18} />
            <span />
          </div>
        </div>
      </section>


      <section className="contact-form-section">
        <div className="contact-form-container container">
          
          <div className="contact-form-left">
            <h2 className="contact-form-heading font-display">
              A CLEAR PATH<br/>
              FROM CONCERN<br/>
              <span className="text-gold-gradient">TO CLARITY</span>
            </h2>
            
            <div className="contact-diamond-divider">
              <span className="line"></span>
              <Sparkles size={16} className="diamond text-gold" />
              <span className="line"></span>
            </div>

            <p className="contact-form-desc">
              Share what's on your mind.<br/>
              Our guidance brings insight,<br/>
              healing and direction.
            </p>

            <div className="contact-feature-list">
              <div className="contact-feature-item">
                <div className="cf-icon"><ShieldCheck size={20} /></div>
                <div className="cf-text">
                  <h4>Private & Confidential</h4>
                  <p>Your information is safe<br/>with us</p>
                </div>
              </div>
              <div className="contact-feature-item">
                <div className="cf-icon"><Clock3 size={20} /></div>
                <div className="cf-text">
                  <h4>Timely Guidance</h4>
                  <p>We respond with care<br/>and clarity</p>
                </div>
              </div>
              <div className="contact-feature-item">
                <div className="cf-icon"><Heart size={20} /></div>
                <div className="cf-text">
                  <h4>Compassionate Support</h4>
                  <p>We're here to help you<br/>every step of the way</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-right">
            <div className="contact-message-card">
              <div className="cm-header">
                <div className="cm-icon"><Mail size={24} /></div>
                <div>
                  <h3>SEND A MESSAGE</h3>
                  <p>We'll get back to you soon.</p>
                </div>
              </div>
              
              <form className="cm-form" onSubmit={handleContactSubmit}>
                <div className="cm-input-group">
                  <User size={18} className="input-icon" />
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    required 
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="cm-input-group">
                  <Mail size={18} className="input-icon" />
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    required 
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="cm-input-group">
                  <Phone size={18} className="input-icon" />
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="cm-input-group textarea-group">
                  <MessageSquare size={18} className="input-icon" />
                  <textarea 
                    placeholder="Type your message..." 
                    rows={3} 
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <button type="submit" className="cm-submit-btn">
                  <span>CONFIRM ON WHATSAPP</span> <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="contact-bottom-bar container">
          <div className="cb-item">
            <div className="cb-icon"><Clock3 size={22} /></div>
            <div className="cb-text">
              <h4>QUICK RESPONSE</h4>
              <p>We aim to reply to your message as soon as possible.</p>
            </div>
          </div>
          <div className="cb-divider"></div>
          <div className="cb-item">
            <div className="cb-icon"><Lock size={22} /></div>
            <div className="cb-text">
              <h4>100% CONFIDENTIAL</h4>
              <p>Your privacy is our priority. All messages are kept confidential.</p>
            </div>
          </div>
          <div className="cb-divider"></div>
          <div className="cb-item">
            <div className="cb-icon"><Star size={22} /></div>
            <div className="cb-text">
              <h4>EXPERT GUIDANCE</h4>
              <p>Get trusted astrological guidance tailored to your unique journey.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
