import React, { useState } from 'react';
import heroImage from '../assets/images/hero-image.svg';
import client1 from '../assets/images/clients/client-1.png';
import client2 from '../assets/images/clients/client-2.png';
import './Home.css';
import './Services.css';
import './About.css';
import './Contact.css';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const services = [
    {
      title: 'Desarrollo Web',
      icon: '💻',
      description: 'Creamos sitios web modernos, responsivos para tu negocio.',
      features: ['Diseño responsive', 'Simplicidad', 'Alta velocidad', 'Seguridad']
    },
    {
      title: 'Progressive Web Apps',
      icon: '📱',
      description: 'Creamos aplicaciones web que funcionan como apps, rápidas, seguras y disponibles en cualquier dispositivo.',
      features: ['Instalable en dispositivos', 'Responsive y multiplataforma', 'Rendimiento óptimo', 'Integración con APIs y servicios web']
    },
    {
      title: 'Implementación con IA',
      icon: '🤖',
      description: ' IA práctica, confiable y orientada a resultados reales en tu operación.',
      features: ['Tienda online', 'Pagos seguros', 'Gestión productos', 'Analytics']
    },
    {
      title: 'Data Cleansing',
      icon: '📈',
      description: 'Convertimos hojas de cálculo desordenadas, bases de datos incompletas y archivos dispersos en un sistema limpio, estructurado y fácil de usar.',
      features: ['Organización de datos', 'Limpieza de datos', 'Estandarización', 'Validación']
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <img src={heroImage} alt="MeBu Hero" className="hero-image" />
          <h1 className="hero-title">Bienvenido a MeBu</h1>
          <p className="hero-subtitle">
            Soluciones digitales profesionales para impulsar tu negocio
          </p>
          <div className="hero-buttons">
            <a href="#servicios" className="btn btn-primary">Nuestros Servicios</a>
            <a href="#contacto" className="btn btn-secondary">Contáctanos</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="services">
        <div className="services-hero">
          <h1>Nuestros Servicios</h1>
          <p className="lead">
            Soluciones integrales para todas tus necesidades digitales
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <a href="#contacto" className="service-btn">Solicitar información</a>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h2>¿No encuentras lo que buscas?</h2>
          <p>Contáctanos y cuéntanos sobre tu proyecto. Desarrollamos soluciones personalizadas.</p>
          <a href="#contacto" className="btn btn-primary">Contáctanos</a>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="about">
        <div className="about-hero">
          <h1>Sobre MeBu</h1>
          <p className="lead">
            Somos un equipo apasionado dedicado a transformar ideas en soluciones digitales exitosas
          </p>
        </div>

        {/* Carrusel de logos de clientes */}
        <div className="clients-carousel">
          <div className="carousel-track">
            <div className="client-logo">
              <img src={client1} alt="Cliente 1" />
            </div>
            <div className="client-logo">
              <img src={client2} alt="Cliente 2" />
            </div>
            <div className="client-logo">LOGO 3</div>
            <div className="client-logo">LOGO 4</div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
