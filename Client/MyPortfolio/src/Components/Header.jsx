import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate web developer</p>
        <a href="#contact" className="cta-button">Get in Touch</a>
      </div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
