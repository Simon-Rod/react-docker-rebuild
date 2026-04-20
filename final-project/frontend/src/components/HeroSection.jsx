import React from 'react';
import './HeroSection.css';
import heroBgImage from '../assets/hero-bg.png'; 

function HeroSection() {
  return (
    <section className="hero-section"style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3),
         rgba(0,0,0,0.8)), url(${heroBgImage})` }}
    >
      <div className="hero-content">
        <div className="title-box">
          <h1 className="title-white">MORE PIRATE</h1>
          <h1 className="title-green">THAN EVER</h1>
        </div>
        
        <p className="hero-subtitle">
          EXPLORE A VAST OPEN WORLD WITH THE ULTIMATE PIRATE ADVENTURE
        </p>
        
        <div className="platforms">
          <p>AVAILABLE ON:</p>
          <div className="platform-logos">
            <span>🎮 XBOX X|S</span>
            <span>🎮 PS5</span>
            <span>💻 Windows</span>
            <span>💨 STEAM</span>
            <span>🟢 XBOX GAME PASS</span>
            <span>⚔️ BATTLE.NET</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;