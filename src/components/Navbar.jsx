import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import gurujiLogo from '../assets/splash_guru.png';

export default function Navbar({ currentPage, navigateTo }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact Us', id: 'contact' }
  ];

  const handleNav = (pageId) => {
    navigateTo(pageId);
    setIsOpen(false);
  };

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      width: '100%',
      background: 'rgba(8, 2, 18, 0.65)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px',
        width: '100%',
        padding: '0 30px'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => handleNav('home')}
          style={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          {/* Circular Guruji Photo */}
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid rgba(212,175,55,0.6)',
            flexShrink: 0,
            boxShadow: '0 0 12px rgba(212,175,55,0.3)'
          }}>
            <img
              src={gurujiLogo}
              alt="Guruji"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Brand Text */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span className="font-display text-gold-gradient site-brand-name" style={{
              fontSize: '19px',
              fontWeight: '800',
              letterSpacing: '0.08em',
              lineHeight: 1.1
            }}>
              BEST ASTROLOGER IN LONDON
            </span>
            <span className="font-display" style={{
              fontSize: '9px',
              color: 'rgba(249, 246, 239, 0.5)',
              letterSpacing: '0.3em',
              marginTop: '2px'
            }}>
              PSYCHIC ASTROLOGY & HEALING
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }} className="desktop-only">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '30px', alignItems: 'center' }}>
            {menuItems.map(item => {
              const isActive = currentPage === item.id || (item.id === 'services' && currentPage === 'service-detail');
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(item.id);
                    }}
                    style={{
                      textDecoration: 'none',
                      fontFamily: 'var(--font-display)',
                      fontSize: '13px',
                      fontWeight: isActive ? '700' : '500',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: isActive ? 'var(--gold-soft)' : 'var(--text-primary)',
                      textShadow: isActive ? '0 0 8px rgba(212, 175, 55, 0.5)' : 'none',
                      transition: 'all 0.3s ease',
                      borderBottom: isActive ? '2px solid var(--gold)' : '2px solid transparent',
                      paddingBottom: '4px'
                    }}
                    onMouseEnter={e => {
                      if (!isActive) e.target.style.color = 'var(--gold-soft)';
                    }}
                    onMouseLeave={e => {
                      if (!isActive) e.target.style.color = 'var(--text-primary)';
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Quick Call Button */}
          <a
            href="tel:+447722131999"
            className="primary-button"
            style={{
              padding: '10px 20px',
              fontSize: '11px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Phone size={14} /> CALL GURUJI
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-only"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--gold)',
            cursor: 'pointer',
            display: 'none' /* Handled by media query in App.css */
          }}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div style={{
          background: 'rgba(8, 2, 18, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          position: 'absolute',
          top: '80px',
          left: 0,
          width: '100%',
          zIndex: 99
        }}>
          {menuItems.map(item => {
            const isActive = currentPage === item.id || (item.id === 'services' && currentPage === 'service-detail');
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.id);
                }}
                style={{
                  textDecoration: 'none',
                  fontFamily: 'var(--font-display)',
                  fontSize: '16px',
                  fontWeight: isActive ? '700' : '500',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: isActive ? 'var(--gold-soft)' : 'var(--text-primary)',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'all 0.3s ease'
                }}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="tel:+447722131999"
            style={{
              marginTop: '10px',
              textDecoration: 'none',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
            className="primary-button"
          >
            <Phone size={16} /> CALL NOW: +44 7722 131999
          </a>
        </div>
      )}
    </nav>
  );
}
