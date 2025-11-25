import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>MeBu</h3>
          <p>Soluciones digitales profesionales para tu negocio</p>
        </div>

        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">Nosotros</a></li>
            <li><a href="/services">Servicios</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <ul>
            <li>Email: info@mebu.com</li>
            <li>Teléfono: +1 234 567 890</li>
            <li>Ubicación: Tu Ciudad, País</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="LinkedIn">LI</a>
            <a href="#" aria-label="Instagram">IG</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} MeBu. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
