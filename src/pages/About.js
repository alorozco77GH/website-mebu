import React from 'react';
import teamImage from '../assets/images/about-team.svg';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>Sobre MeBu</h1>
        <p className="lead">
          Somos un equipo apasionado dedicado a transformar ideas en soluciones digitales exitosas
        </p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Nuestra Misión</h2>
          <p>
            En MeBu, nuestra misión es proporcionar soluciones digitales innovadoras que impulsen 
            el crecimiento y éxito de nuestros clientes. Nos comprometemos a entregar productos 
            de alta calidad que superen las expectativas.
          </p>
        </div>

        <div className="about-section">
          <h2>Nuestra Visión</h2>
          <p>
            Ser reconocidos como líderes en soluciones digitales, estableciendo nuevos estándares 
            de excelencia en la industria y creando un impacto positivo en cada proyecto que emprendemos.
          </p>
        </div>

        <div className="about-section">
          <h2>Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>🎯 Excelencia</h3>
              <p>Nos esforzamos por la perfección en cada proyecto</p>
            </div>
            <div className="value-item">
              <h3>🤝 Integridad</h3>
              <p>Actuamos con honestidad y transparencia</p>
            </div>
            <div className="value-item">
              <h3>💡 Innovación</h3>
              <p>Buscamos constantemente nuevas soluciones</p>
            </div>
            <div className="value-item">
              <h3>🌟 Compromiso</h3>
              <p>Dedicados al éxito de nuestros clientes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Nuestro Equipo</h2>
        <img src={teamImage} alt="Equipo MeBu" className="team-image" />
        <p>
          Contamos con profesionales altamente calificados con experiencia en diversas áreas 
          de tecnología y desarrollo digital.
        </p>
      </section>
    </div>
  );
};

export default About;
