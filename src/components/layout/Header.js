import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={(e) => scrollToSection(e, 'inicio')}>
            <img src={logo} alt="MeBu Logo" className="logo-image" />
            <h1>MeBu</h1>
          </Link>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')}>Inicio</a></li>
            <li><a href="#nosotros" onClick={(e) => scrollToSection(e, 'nosotros')}>Nosotros</a></li>
            <li><a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')}>Servicios</a></li>
            <li><a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')}>Contacto</a></li>
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
