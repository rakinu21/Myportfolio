import React, { useEffect } from 'react';
import '../styles/home-hero.css';
import { pageTransition, scrollReveal } from '../animations/gsapAnimations.js';

const Home = () => {
  useEffect(() => {
    pageTransition('.home-hero');
  }, []);

  return (
    <div className="home-hero">
      <h1>Rakinu21</h1>
      <p className="subtitle">Web Developer &amp; Graphic Designer</p>
      <p>Creating modern 2026 experiences</p>
      <button className="cta-btn glass">View My Work</button>
    </div>
  );
};

export default Home;
