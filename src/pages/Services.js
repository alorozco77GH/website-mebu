import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Desarrollo Web',
      icon: '💻',
      description: 'Creamos sitios web modernos, responsivos y optimizados para tu negocio.',
      features: ['Diseño responsive', 'SEO optimizado', 'Alta velocidad', 'Seguridad']
    },
    {
      title: 'Aplicaciones Móviles',
      icon: '📱',
      description: 'Desarrollamos aplicaciones móviles nativas y multiplataforma.',
      features: ['iOS y Android', 'UX intuitiva', 'Rendimiento óptimo', 'Integración API']
    },
    {
      title: 'Consultoría Digital',
      icon: '🎯',
      description: 'Asesoramiento experto para transformar tu presencia digital.',
      features: ['Estrategia digital', 'Análisis de mercado', 'Optimización', 'Mejores prácticas']
    },
    {
      title: 'E-Commerce',
      icon: '🛒',
      description: 'Soluciones completas de comercio electrónico para vender online.',
      features: ['Tienda online', 'Pagos seguros', 'Gestión productos', 'Analytics']
    },
    {
      title: 'Mantenimiento',
      icon: '🔧',
      description: 'Soporte continuo y mantenimiento para tus proyectos digitales.',
      features: ['Actualizaciones', 'Seguridad', 'Backups', 'Soporte 24/7']
    },
    {
      title: 'Marketing Digital',
      icon: '📈',
      description: 'Estrategias de marketing para aumentar tu presencia online.',
      features: ['SEO/SEM', 'Social Media', 'Email Marketing', 'Analytics']
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
