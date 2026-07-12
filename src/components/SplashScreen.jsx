import React, { useCallback, useEffect, useState } from 'react';
import splashGuru from '../assets/splash_guru.webp';

const SPLASH_DURATION = 3000;
const EXIT_DURATION = 700;

export default function SplashScreen({ onComplete }) {
  const [isLeaving, setIsLeaving] = useState(false);

  const finishSplash = useCallback(() => {
    setIsLeaving(true);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const exitTimer = window.setTimeout(finishSplash, SPLASH_DURATION);
    return () => {
      window.clearTimeout(exitTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [finishSplash]);

  useEffect(() => {
    if (!isLeaving) return undefined;
    const completeTimer = window.setTimeout(onComplete, EXIT_DURATION);
    return () => window.clearTimeout(completeTimer);
  }, [isLeaving, onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#070b1a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        opacity: isLeaving ? 0 : 1,
        transition: `opacity ${EXIT_DURATION}ms ease`,
        animation: 'splashFadeIn 0.6s ease forwards'
      }}
      role="status"
      aria-label="Loading"
    >
      <style>{`
        @keyframes splashFadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes splashDropFromTop {
          from { opacity: 0; transform: translateY(-150px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes splashProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes splashPulse {
          0%, 100% { box-shadow: 0 0 30px rgba(212,175,55,0.35); }
          50%       { box-shadow: 0 0 60px rgba(212,175,55,0.65); }
        }
      `}</style>

      {/* Logo */}
      <div style={{
        width: '130px',
        height: '130px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '3px solid rgba(212,175,55,0.6)',
        animation: 'splashDropFromTop 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, splashPulse 2s ease-in-out infinite'
      }}>
        <img
          src={splashGuru}
          alt="Guruji"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Site Name */}
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: '22px',
          fontWeight: '800',
          letterSpacing: '0.1em',
          background: 'linear-gradient(135deg, #d4af37, #f9f0c8, #c8960c)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textTransform: 'uppercase',
          marginBottom: '6px'
        }}>
          Best Astrologer In London
        </div>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: '11px',
          letterSpacing: '0.3em',
          color: 'rgba(249,246,239,0.5)',
          textTransform: 'uppercase'
        }}>
          Psychic Astrology &amp; Healing
        </div>
      </div>

      {/* Loading bar */}
      <div style={{
        width: '160px',
        height: '2px',
        background: 'rgba(255,255,255,0.08)',
        borderRadius: '2px',
        overflow: 'hidden'
      }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(90deg, #d4af37, #f9f0c8)',
          borderRadius: '2px',
          animation: `splashProgress ${SPLASH_DURATION}ms linear forwards`
        }} />
      </div>
    </div>
  );
}
