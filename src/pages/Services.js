import React from 'react';
import './Services.css';

const Services = () => {
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
    <div className="services">
      <section className="services-hero">
        <h1>Nuestros Servicios</h1>
        <p className="lead">
          Soluciones integrales para todas tus necesidades digitales
        </p>
      </section>

      <section className="services-grid">
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
            <a href="/contact" className="service-btn">Solicitar información</a>
          </div>
        ))}
      </section>

      <section className="services-cta">
        <h2>¿No encuentras lo que buscas?</h2>
        <p>Contáctanos y cuéntanos sobre tu proyecto. Desarrollamos soluciones personalizadas.</p>
        <a href="/contact" className="btn btn-primary">Contáctanos</a>
      </section>
    </div>
  );
};

export default Services;
