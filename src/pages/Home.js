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

      <section className="cta">
        <h2>¿Listo para comenzar tu proyecto?</h2>
        <p>Contáctanos hoy y descubre cómo podemos ayudarte</p>
        <a href="/contact" className="btn btn-primary">Comenzar ahora</a>
      </section>
    </div>
  );
};

export default Home;
