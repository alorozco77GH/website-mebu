import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <header className="header">
        <div className="mobile-menu-toggle">
          <button 
            className="icon-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              {menuOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M4.33709 4.33709C4.7032 3.97097 5.2968 3.97097 5.66291 4.33709L10 8.67417L14.3371 4.33709C14.7032 3.97097 15.2968 3.97097 15.6629 4.33709C16.029 4.7032 16.029 5.2968 15.6629 5.66291L11.3258 10L15.6629 14.3371C16.029 14.7032 16.029 15.2968 15.6629 15.6629C15.2968 16.029 14.7032 16.029 14.3371 15.6629L10 11.3258L5.66291 15.6629C5.2968 16.029 4.7032 16.029 4.33709 15.6629C3.97097 15.2968 3.97097 14.7032 4.33709 14.3371L8.67417 10L4.33709 5.66291C3.97097 5.2968 3.97097 4.7032 4.33709 4.33709Z" fill="#1E1E1E"/>
              ) : (
                <path fillRule="evenodd" clipRule="evenodd" d="M1.5625 5C1.5625 4.48223 1.98223 4.0625 2.5 4.0625H17.5C18.0178 4.0625 18.4375 4.48223 18.4375 5C18.4375 5.51777 18.0178 5.9375 17.5 5.9375H2.5C1.98223 5.9375 1.5625 5.51777 1.5625 5ZM1.5625 10C1.5625 9.48223 1.98223 9.0625 2.5 9.0625H17.5C18.0178 9.0625 18.4375 9.48223 18.4375 10C18.4375 10.5178 18.0178 10.9375 17.5 10.9375H2.5C1.98223 10.9375 1.5625 10.5178 1.5625 10ZM1.5625 15C1.5625 14.4822 1.98223 14.0625 2.5 14.0625H17.5C18.0178 14.0625 18.4375 14.4822 18.4375 15C18.4375 15.5178 18.0178 15.9375 17.5 15.9375H2.5C1.98223 15.9375 1.5625 15.5178 1.5625 15Z" fill="#1E1E1E"/>
              )}
            </svg>
          </button>
        </div>

        <div className="logo">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/a485c0014e8c13cba57ebe4c43042fc43ca6c730?width=118" alt="MEBU Logo" />
        </div>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#inicio" className="nav-link">Inicio</a>
          <a href="#nosotros" className="nav-link">Nosotros</a>
          <a href="#contacto" className="nav-link">Contacto</a>
        </nav>

        <nav className="nav-desktop">
          <a href="#inicio" className="nav-link-desktop">INICIO</a>
          <a href="#nosotros" className="nav-link-desktop">QUIENES SOMOS</a>
          <a href="#servicios" className="nav-link-desktop">SERVICIOS</a>
          <a href="#contacto" className="nav-link-desktop">CONTACTO</a>
        </nav>
      </header>

      <section className="hero-section">
        <h1 className="hero-title">MEBU</h1>
        <h2 className="hero-subtitle">
          soluciones de datos a <strong>problemas cotidianos</strong>
        </h2>
        <p className="hero-description">
          Lorem ipsum dolor sit amet consectetur adipiscing elit varius, potenti vulputate dos ingenieros con ganas de chirrear y comer , apoyamos a empresas para ue den el salto a tecnologias mas robusta.
        </p>
      </section>

      <section className="services-section">
        <div className="service-card">
          <h3 className="service-title">Organización y limpieza de datos</h3>
          <p className="service-description">
            convertimos hojas de cálculo desordenadas, bases de datos incompletas y archivos dispersos en un sistema limpio, estructurado y fácil de usar.
          </p>
        </div>

        <div className="service-card">
          <h3 className="service-title">Automatización con Ejecutables Personalizados</h3>
          <p className="service-description">
            herramientas diseñadas a la medida para automatizar, acelerar y simplificar los procesos operativos de tu empresa.
          </p>
        </div>

        <div className="service-card">
          <h3 className="service-title">Aplicaciones Web Progresivas (PWA)</h3>
          <p className="service-description">
            Diseñamos y desarrollamos PWAs que mejoran la experiencia de tus usuarios y aumentan la eficiencia de tus procesos internos. Es la forma más económica, rápida y escalable de tener una app profesional.
          </p>
        </div>

        <div className="service-card">
          <h3 className="service-title">implementación con IA</h3>
          <p className="service-description">
            , <strong>IA práctica, confiable y orientada a resultados reales en tu operación</strong>estructurado y fácil de usar.
          </p>
        </div>
      </section>

      <section className="clients-section">
        <div className="client-logo">
          <h3 className="client-name">see sas</h3>
        </div>
        <div className="client-logo">
          <h3 className="client-name">superfox</h3>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-logo">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/a485c0014e8c13cba57ebe4c43042fc43ca6c730?width=208" alt="MEBU Logo" />
        </div>
        <div className="footer-content">
          <h4 className="footer-title">MEBU SAS</h4>
          <p className="footer-subtitle">um volutpat aptent non venenatis</p>
          <p className="footer-copyright">© 2025 MEBU SAS--- LOREMIPSUM</p>
        </div>
        <a href="https://wa.me/" className="whatsapp-button" aria-label="Contact on WhatsApp">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/a485c0014e8c13cba57ebe4c43042fc43ca6c730?width=180" alt="WhatsApp" />
        </a>
      </footer>
    </div>
  )
}

export default App
