import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Phone, ArrowUp, Clock, Mail, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CosmicBackground from './components/CosmicBackground';
import SeoManager from './components/SeoManager';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import SplashScreen from './components/SplashScreen';

import './App.css';

// 404 Not Found page
function NotFound() {
  const navigate = useNavigate();
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '60px 20px'
    }}>
      <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '80px', margin: 0 }}>404</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '18px', margin: '20px 0 40px' }}>
        This page could not be found.
      </p>
      <button
        onClick={() => navigate('/')}
        className="primary-button"
        style={{ padding: '14px 32px', fontSize: '13px', cursor: 'pointer', border: 'none' }}
      >
        Return Home
      </button>
    </div>
  );
}

// Inner app — uses router hooks, so must be inside BrowserRouter
function AppInner() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);
  const [toastMessage, setToastMessage] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const isServiceDetail = location.pathname.startsWith('/services/') && location.pathname.length > '/services/'.length;

  // Scroll to top on route change (unless hash anchor is present)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  // Monitor scroll for Scroll-to-Top visibility
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen to show-toast custom events
  useEffect(() => {
    const handleShowToast = (e) => setToastMessage(e.detail);
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

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <>
      <SeoManager />
      <CosmicBackground isServiceDetail={isServiceDetail}>
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

        <Navbar />

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
            <span>✦ 20,000+ LIVES TRANSFORMED</span>
            <span>✦ 20,000+ HAPPY REUNIONS</span>
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
            <span>✦ 20,000+ LIVES TRANSFORMED</span>
            <span>✦ 20,000+ HAPPY REUNIONS</span>
            <span>✦ 100% PRIVACY</span>
            <span>✦ POWERFUL REMEDIES</span>
            <span>✦ EXPERT GUIDANCE</span>
            <span>✦ POSITIVE RESULTS</span>
            <span>✦ ALL OVER THE WORLD</span>
            <span>✦ 8:00 AM-8:00 PM</span>
          </div>
        </div>

        <main style={{ minHeight: 'calc(100vh - 80px - 340px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </CosmicBackground>

      {/* WhatsApp Floating Button - Bottom Right */}
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
        <svg viewBox="0 0 32 32" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 3C8.82 3 3 8.82 3 16c0 2.3.62 4.47 1.7 6.34L3 29l6.85-1.67A13 13 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3z" fill="#fff"/>
          <path d="M16 5.2A10.8 10.8 0 005.2 16c0 2.02.56 3.91 1.54 5.53L5.5 26.5l5.1-1.22A10.8 10.8 0 1016 5.2z" fill="#25d366"/>
          <path d="M21.8 18.84c-.29-.14-1.7-.84-1.97-.93-.26-.1-.46-.14-.65.14-.2.29-.75.93-.92 1.12-.17.2-.34.22-.63.07a7.9 7.9 0 01-2.33-1.44 8.74 8.74 0 01-1.61-2c-.17-.3-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.51-.07-.15-.65-1.57-.9-2.14-.23-.56-.47-.48-.65-.49h-.55c-.2 0-.51.07-.77.37-.27.3-1.01.98-1.01 2.4 0 1.41 1.03 2.78 1.18 2.97.14.2 2.03 3.1 4.92 4.35.69.3 1.22.47 1.64.6.69.22 1.32.19 1.81.12.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33z" fill="#fff"/>
        </svg>
      </a>

      {/* Call FAB - Bottom Right (above WhatsApp FAB) */}
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
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1) translateY(0)'; }}
      >
        <Phone size={24} />
      </a>

      {/* Scroll to Top Arrow Button in Bottom Left */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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

export default function App() {
  return <AppInner />;
}
