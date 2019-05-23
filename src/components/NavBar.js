import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <header id="top">
      <NavLink to="/" exact activeClassName="none"><img src={require('../assets/fetch.png')} alt="Fetch" /></NavLink>
      <nav>
        <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
        <NavLink to="/articles" exact className="nav-link" activeClassName="active">Articles</NavLink>
        <NavLink to="/forum" exact className="nav-link" activeClassName="active">Forum</NavLink>
        <NavLink to="/about" exact className="nav-link" activeClassName="active">About Us</NavLink>
      </nav>
    </header>
  );
}
