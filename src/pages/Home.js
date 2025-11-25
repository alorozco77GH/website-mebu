import React from 'react';
import heroImage from '../assets/images/hero-image.svg';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <img src={heroImage} alt="MeBu Hero" className="hero-image" />
          <h1 className="hero-title">Bienvenido a MeBu</h1>
          <p className="hero-subtitle">
            Soluciones digitales profesionales para impulsar tu negocio
          </p>
          <div className="hero-buttons">
            <a href="/services" className="btn btn-primary">Nuestros Servicios</a>
            <a href="/contact" className="btn btn-secondary">Contáctanos</a>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>¿Por qué elegir MeBu?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Rápido y Eficiente</h3>
            <p>Desarrollamos soluciones optimizadas para el mejor rendimiento</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Innovación</h3>
            <p>Utilizamos las últimas tecnologías y mejores prácticas</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Enfocados en Resultados</h3>
            <p>Tu éxito es nuestra prioridad número uno</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Soporte Dedicado</h3>
            <p>Estamos aquí para ayudarte en cada paso del camino</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>¿Listo para comenzar tu proyecto?</h2>
        <p>Contáctanos hoy y descubre cómo podemos ayudarte</p>
        <a href="/contact" className="btn btn-primary">Comenzar ahora</a>
      </section>
    </div>
  );
};

export default Home;
