import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, Clock, Mail, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CosmicBackground from './components/CosmicBackground';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import SplashScreen from './components/SplashScreen';

import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedServiceSlug, setSelectedServiceSlug] = useState(null);
  const [showSplash, setShowSplash] = useState(true);
  const [toastMessage, setToastMessage] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);


  // Monitor scroll for Scroll-to-Top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen to show-toast custom events
  useEffect(() => {
    const handleShowToast = (e) => {
      setToastMessage(e.detail);
    };
    window.addEventListener('show-toast', handleShowToast);
    return () => window.removeEventListener('show-toast', handleShowToast);
  }, []);

  // Auto hide toast message
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(''), 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Hash-based Routing Sync
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const isBookingLink = hash === 'book';
      
      if (hash.startsWith('services/')) {
        const slug = hash.replace('services/', '');
        setCurrentPage('service-detail');
        setSelectedServiceSlug(slug);
      } else if (hash) {
        // Keep legacy booking links working after merging both pages.
        setCurrentPage(hash === 'book' ? 'contact' : hash);
        setSelectedServiceSlug(null);
      } else {
        // Default to Home
        setCurrentPage('home');
        setSelectedServiceSlug(null);
      }
      
      // Booking CTAs jump to the form on the combined page; all other links start at the top.
      if (isBookingLink) {
        requestAnimationFrame(() => {
          document.getElementById('book-session')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Sync on initial mount
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Safe Navigation Helper
  const navigateTo = (pageId, serviceSlug = null) => {
    if (pageId === 'service-detail' && serviceSlug) {
      window.location.hash = `services/${serviceSlug}`;
    } else {
      window.location.hash = pageId;
    }
  };

  // Render active page component
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigateTo={navigateTo} />;
      case 'about':
        return <About navigateTo={navigateTo} />;
      case 'services':
        return <Services navigateTo={navigateTo} />;
      case 'service-detail':
        return <ServiceDetail slug={selectedServiceSlug} navigateTo={navigateTo} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <>
      <CosmicBackground>
        {/* Top Info Bar (above Navbar) */}
        <div style={{
          background: '#040817',
          borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
          padding: '8px 30px',
          fontSize: '11px',
          fontFamily: 'var(--font-sans)',
          color: 'var(--text-muted)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 1000,
          position: 'relative'
        }} className="top-info-bar">
          {/* Left Side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold-soft)', fontWeight: '600' }}>
            <Clock size={12} style={{ color: 'var(--gold)' }} />
            <span>Available 24/7 - Worldwide Consultation</span>
          </div>

          {/* Right Side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }} className="top-info-bar__right">
            <a href="tel:+447722131999" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
              <Phone size={12} style={{ color: 'var(--gold)' }} />
              <span>+44 (7722) 131999</span>
            </a>
            <span style={{ opacity: 0.3 }} className="top-bar-divider">|</span>
            <a href="mailto:thebestastrologerlondon@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
              <Mail size={12} style={{ color: 'var(--gold)' }} />
              <span>thebestastrologerlondon@gmail.com</span>
            </a>
            <span style={{ opacity: 0.3 }} className="top-bar-divider">|</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-muted)' }}>
              <MapPin size={12} style={{ color: 'var(--gold)' }} />
              <span>Walthamstow, London</span>
            </div>
          </div>
        </div>

        <Navbar currentPage={currentPage} navigateTo={navigateTo} />

        {/* Global Ticker Banner (below Navbar) */}
        <div style={{
          background: 'rgba(8, 2, 18, 0.65)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
          borderTop: '1px solid rgba(212, 175, 55, 0.15)',
          padding: '12px 0',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 9
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            fontWeight: '600',
            fontFamily: 'var(--font-display)',
            fontSize: '11px',
            letterSpacing: '0.15em',
            color: 'var(--gold-soft)',
            whiteSpace: 'nowrap'
          }} className="ticker-container">
            <span>✦ E-DAY RESULTS</span>
            <span>✦ 100% CONFIDENTIALITY</span>
            <span>✦ 35+ YEARS OF MASTERY</span>
            <span>✦ 10,000+ LIVES TRANSFORMED</span>
            <span>✦ 10,000+ HAPPY REUNIONS</span>
            <span>✦ 100% PRIVACY</span>
            <span>✦ POWERFUL REMEDIES</span>
            <span>✦ EXPERT GUIDANCE</span>
            <span>✦ POSITIVE RESULTS</span>
            <span>✦ ALL OVER THE WORLD</span>
            <span>✦ 8:00 AM-8:00 PM</span>
            {/* Repeat for seamless loop */}
            <span>✦ E-DAY RESULTS</span>
            <span>✦ 100% CONFIDENTIALITY</span>
            <span>✦ 35+ YEARS OF MASTERY</span>
            <span>✦ 10,000+ LIVES TRANSFORMED</span>
            <span>✦ 10,000+ HAPPY REUNIONS</span>
            <span>✦ 100% PRIVACY</span>
            <span>✦ POWERFUL REMEDIES</span>
            <span>✦ EXPERT GUIDANCE</span>
            <span>✦ POSITIVE RESULTS</span>
            <span>✦ ALL OVER THE WORLD</span>
            <span>✦ 8:00 AM-8:00 PM</span>
          </div>
        </div>
        
        <main style={{ minHeight: 'calc(100vh - 80px - 340px)' }}>
          {renderPage()}
        </main>

        <Footer navigateTo={navigateTo} />
      </CosmicBackground>

      {/* WhatsApp Floating Button - Bottom Right */}
      {/* WhatsApp FAB - Bottom Right */}
      {/* WhatsApp FAB - Bottom Right */}
      <a
        href="https://wa.me/447722131999"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => window.dispatchEvent(new CustomEvent('show-toast', { detail: 'Opening WhatsApp chat with Guruji...' }))}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          background: '#25d366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
          zIndex: 1000,
          transition: 'all 0.3s cubic-bezier(0.25,0.8,0.25,1)',
          textDecoration: 'none'
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.12)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(37,211,102,0.7)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.5)'; }}
      >
        {/* Official WhatsApp SVG Logo */}
        <svg viewBox="0 0 32 32" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 3C8.82 3 3 8.82 3 16c0 2.3.62 4.47 1.7 6.34L3 29l6.85-1.67A13 13 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3z" fill="#fff"/>
          <path d="M16 5.2A10.8 10.8 0 005.2 16c0 2.02.56 3.91 1.54 5.53L5.5 26.5l5.1-1.22A10.8 10.8 0 1016 5.2z" fill="#25d366"/>
          <path d="M21.8 18.84c-.29-.14-1.7-.84-1.97-.93-.26-.1-.46-.14-.65.14-.2.29-.75.93-.92 1.12-.17.2-.34.22-.63.07a7.9 7.9 0 01-2.33-1.44 8.74 8.74 0 01-1.61-2c-.17-.3-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.51-.07-.15-.65-1.57-.9-2.14-.23-.56-.47-.48-.65-.49h-.55c-.2 0-.51.07-.77.37-.27.3-1.01.98-1.01 2.4 0 1.41 1.03 2.78 1.18 2.97.14.2 2.03 3.1 4.92 4.35.69.3 1.22.47 1.64.6.69.22 1.32.19 1.81.12.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33z" fill="#fff"/>
        </svg>
      </a>

      {/* Call FAB - Bottom Right (Positioned above WhatsApp FAB) */}
      <a
        href="tel:+447722131999"
        aria-label="Call Guruji"
        onClick={() => window.dispatchEvent(new CustomEvent('show-toast', { detail: 'Opening secure line to Guruji...' }))}
        style={{
          position: 'fixed',
          bottom: '100px',
          right: '30px',
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg,#7c3aed,#a855f7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--btn-glow-shadow)',
          zIndex: 1000,
          transition: 'all 0.3s cubic-bezier(0.25,0.8,0.25,1)',
          textDecoration: 'none',
          color: '#fff'
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--btn-glow-shadow)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1) translateY(0)'; e.currentTarget.style.boxShadow = 'var(--btn-glow-shadow)'; }}
      >
        <Phone size={24} />
      </a>

      {/* Scroll to Top Arrow Button in Bottom Left */}
      {showScrollTop && (
        <button 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            position: 'fixed',
            bottom: '30px',
            left: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'var(--gold)',
            color: '#040817',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 0 25px rgba(212, 175, 55, 0.45)',
            zIndex: 1000,
            transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} strokeWidth={2.5} />
        </button>
      )}

      {/* Global Toast Notification Popup */}
      {toastMessage && (
        <div className="toast-popup">
          <span style={{ color: 'var(--gold)' }}>✦</span> {toastMessage} <span style={{ color: 'var(--gold)' }}>✦</span>
        </div>
      )}
    </>
  );
}
