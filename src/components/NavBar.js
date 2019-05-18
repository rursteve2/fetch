import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header>
      <div className="placeholder"></div>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/articles" className="nav-link">Articles</Link>
        <Link to="/" className="nav-link">Gallery</Link>
        <Link to="/" className="nav-link">About</Link>
        <Link to="/" className="nav-link">Forum</Link>
      </nav>
    </header>
  );
}
