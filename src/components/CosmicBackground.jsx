import React, { useMemo } from 'react';
import zodiacWheelImg from '../assets/chakra.png';
import nebulaSmokeImg from '../assets/nebula_smoke.png';

export default function CosmicBackground({ children }) {
  // Generate random particles configurations once
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 5 + 3}px`,
      delay: `${Math.random() * 15}s`,
      duration: `${Math.random() * 15 + 10}s`,
      driftX: `${(Math.random() - 0.5) * 150}px`,
      opacity: Math.random() * 0.4 + 0.3
    }));
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', zIndex: 0 }}>
      {/* 1. Fixed Deep Navy Background (#070b1a) */}
      <div className="space-bg" />

      {/* 2. Blurred Blue Radial Glow */}
      <div className="blue-radial-glow" />

      {/* 3. Golden Zodiac Wheel (Slow Rotation, Opacity 0.2-0.3) */}
      <div className="zodiac-wheel-bg-container">
        <img 
          src={zodiacWheelImg} 
          alt="Zodiac Wheel background" 
          className="zodiac-wheel-bg"
        />
      </div>

      {/* 4. Smoke/Nebula Layer (Opacity 0.3, Screen Blended) */}
      <div className="nebula-smoke-bg-container">
        <img 
          src={nebulaSmokeImg} 
          alt="Cosmic Nebula Smoke" 
          className="nebula-smoke-bg"
        />
      </div>

      {/* Golden Floating Particles overlay */}
      <div className="golden-particles-container">
        {particles.map((p) => (
          <div 
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
              opacity: p.opacity,
              '--drift-x': p.driftX
            }}
          />
        ))}
      </div>

      {/* 5. Page Content Wrapper */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {children}
      </div>
    </div>
  );
}
