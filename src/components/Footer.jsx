import React from 'react';
import { Phone, Mail, ChevronRight, Send } from 'lucide-react';
import gurujiLogo from '../assets/splash_guru.png';





const HeaderWithLine = ({ title }) => (
  <div style={{ marginBottom: '25px' }}>
    <h4 className="font-display" style={{ color: 'var(--gold)', fontSize: '15px', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '10px' }}>{title}</h4>
    <div style={{ display: 'flex', alignItems: 'center', width: '80px' }}>
      <div style={{ height: '1px', background: 'var(--gold)', flex: 1, opacity: 0.6 }} />
      <div style={{ width: '4px', height: '4px', transform: 'rotate(45deg)', background: 'var(--gold)', margin: '0 4px' }} />
      <div style={{ height: '1px', background: 'var(--gold)', flex: 1, opacity: 0.6 }} />
    </div>
  </div>
);



export default function Footer({ navigateTo }) {
  return (
    <footer style={{
      background: '#03050c',
      padding: '80px 0 0 0',
      position: 'relative',
      zIndex: 10,
      marginTop: 'auto',
      overflow: 'hidden'
    }}>
      {/* Decorative Zodiac Background Element - Optional faint background */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.03) 0%, rgba(212,175,55,0) 70%)',
        borderRadius: '50%',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1, padding: '0 30px', width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px',
          textAlign: 'left',
          marginBottom: '50px',
          alignItems: 'start'
        }}>

          {/* Column 1: Brand Col */}
          <div style={{ paddingRight: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div style={{
                width: '60px', height: '60px', borderRadius: '50%', border: '1px solid rgba(212,175,55,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', position: 'relative', flexShrink: 0
              }}>
                <div style={{ position: 'absolute', width: '70px', height: '70px', borderRadius: '50%', border: '1px dashed rgba(212,175,55,0.4)', animation: 'spin-slow 20s linear infinite' }} />
                <img src={gurujiLogo} alt="Guruji Logo" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
              </div>
              <div>
                <span className="font-display text-gold-gradient" style={{ fontSize: '18px', fontWeight: '600', letterSpacing: '0.05em', display: 'block' }}>
                  BEST ASTROLOGER<br />IN LONDON
                </span>
                <span style={{ fontSize: '9px', color: '#fff', letterSpacing: '0.15em', display: 'block', marginTop: '4px' }}>
                  PSYCHIC ASTROLOGY & HEALING
                </span>
              </div>
            </div>

            <p style={{ fontSize: '13px', color: '#a0a5b5', lineHeight: '1.6', marginBottom: '25px' }}>
              With divine wisdom and intuitive insight, we help you overcome life's challenges and create a brighter, happier tomorrow.
            </p>




          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <HeaderWithLine title="Quick Navigation" />
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
              {['Home', 'About Us', 'Services', 'Specialist In', 'Contact Us', 'Blog', 'Testimonials', 'FAQs'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (link === 'Home') navigateTo('home');
                      else if (link === 'About Us') navigateTo('about');
                      else if (link === 'Services' || link === 'Specialist In') navigateTo('home');
                      else if (link === 'Contact Us') navigateTo('contact');
                      else navigateTo('home');
                    }}
                    style={{
                      textDecoration: 'none', color: '#a0a5b5', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.3s'
                    }}
                    onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.target.style.color = '#a0a5b5'}
                  >
                    <ChevronRight size={12} style={{ color: 'var(--gold)' }} /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Divine Services */}
          <div>
            <HeaderWithLine title="Divine Services" />
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
              {[
                { label: 'Love & Relationship', slug: 'love' },
                { label: 'Career & Business', slug: 'career' },
                { label: 'Health & Wellbeing', slug: 'health' },
                { label: 'Family & Children', slug: 'family' },
                { label: 'Negative Energy Clearing', slug: 'negativity' },
                { label: 'Spiritual Cleansing', slug: 'black-magic-removal' },
                { label: 'Spiritual Healing', slug: 'spiritual' },
                { label: 'Kundli & Horoscope', slug: 'kundli' }
              ].map(s => (
                <li key={s.label}>
                  <a href={`#services/${s.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo('service-detail', s.slug);
                    }}
                    style={{
                      textDecoration: 'none', color: '#a0a5b5', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.3s'
                    }}
                    onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.target.style.color = '#a0a5b5'}
                  >
                    <ChevronRight size={12} style={{ color: 'var(--gold)' }} /> {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Useful Links */}
          <div>
            <HeaderWithLine title="Useful Links" />
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
              {['Privacy Policy', 'Terms & Conditions', 'Refund Policy', 'Disclaimer', 'Sitemap'].map(link => (
                <li key={link}>
                  <a href="#"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      textDecoration: 'none', color: '#a0a5b5', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.3s'
                    }}
                    onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.target.style.color = '#a0a5b5'}
                  >
                    <ChevronRight size={12} style={{ color: 'var(--gold)' }} /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Stay Connected */}
          <div>
            <HeaderWithLine title="Stay Connected" />
            <p style={{ color: '#a0a5b5', fontSize: '13px', lineHeight: '1.6', marginBottom: '20px' }}>
              Subscribe to get astrology tips, predictions and exclusive offers.
            </p>
            <div style={{ display: 'flex', height: '42px' }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: '0 15px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRight: 'none',
                  borderRadius: '21px 0 0 21px',
                  color: '#fff',
                  outline: 'none',
                  fontSize: '13px',
                  width: '100%'
                }}
              />
              <button style={{
                padding: '0 20px',
                background: 'var(--gold)',
                border: 'none',
                borderRadius: '0 21px 21px 0',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.3s'
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#e6be3e'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
              >
                <Mail size={16} color="#040817" />
              </button>
            </div>

            <div style={{
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '12px',
              padding: '15px 20px',
              display: 'flex',
              flexDirection: 'column',
              background: 'linear-gradient(135deg, rgba(212,175,55,0.05) 0%, rgba(0,0,0,0) 100%)',
              backdropFilter: 'blur(10px)',
              marginTop: '30px',
              position: 'relative',
              zIndex: 2
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                <div style={{ background: 'var(--gold)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={16} color="#040817" fill="#040817" />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px' }}>Call Guruji</div>
                  <div style={{ fontSize: '18px', color: '#fff', fontWeight: '600', fontFamily: 'serif' }}>+44 7722 131999</div>
                </div>
              </div>
              <div style={{ fontSize: '11px', color: '#8a8f9e', paddingLeft: '51px' }}>Available Daily: 8:00 AM – 10:00 PM</div>
            </div>

            {/* The Zodiac wheel image from the user's provided picture. 
                I'll simulate the look using an absolute positioned element, or just leave it clean. 
                The user has it on the right edge. */}
            <div style={{
              position: 'absolute',
              bottom: '-50px',
              right: '-50px',
              width: '300px',
              height: '300px',
              //  backgroundImage: 'url(/zodiac_couple.png)', /* fallback if any */
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              opacity: 0.1,
              pointerEvents: 'none'
            }} />
          </div>

        </div>

        {/* Divider Bottom */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.3), transparent)',
          marginBottom: '20px'
        }} />

        {/* Copyright */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '11px',
          color: '#8a8f9e',
          paddingBottom: '20px'
        }}>
          <p>© {new Date().getFullYear()} Best Astrologer in London. All Psychic Astrology & Healing Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
