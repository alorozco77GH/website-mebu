import React from 'react';
import logo from '../../assets/images/logo.svg';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    
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
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <img src={logo} alt="MeBu Logo" className="footer-logo-image" />
          <h2>MeBu</h2>
        </div>
        
        <div className="footer-center">
          <div className="footer-contact">
            <p>MeBu, Medellín, Colombia</p>
            <p>contacto@mebu.com</p>
            <p>+57 310 395 6894</p>
          </div>
          <div className="footer-copyright">
            <p>&copy; {currentYear} MeBu, soluciones digitales</p>
          </div>
        </div>

        <div className="footer-nav-section">
          <nav className="footer-nav">
            <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')}>Inicio</a>
            <a href="#nosotros" onClick={(e) => scrollToSection(e, 'nosotros')}>Nosotros</a>
            <a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')}>Servicios</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
