import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="MeBu Logo" className="logo-image" />
            <h1>MeBu</h1>
          </Link>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-active' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>Nosotros</Link></li>
            <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Servicios</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contacto</Link></li>
          </ul>
        </nav>

        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
