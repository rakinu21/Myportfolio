import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx';

const Navbar = () => {
  return (
    <header className="app-header glass">
      <div className="logo">
        <Link to="/">Rakinu21</Link>
      </div>
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/graphics" className="nav-link">Graphics</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Navbar;
