import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
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
    // Aquí irá la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <h1>Contáctanos</h1>
        <p className="lead">
          ¿Tienes un proyecto en mente? Nos encantaría escucharte
        </p>
      </section>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Información de Contacto</h2>
          
          <div className="info-item">
            <div className="info-icon">📧</div>
            <div>
              <h3>Email</h3>
              <p>info@mebu.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📞</div>
            <div>
              <h3>Teléfono</h3>
              <p>+1 234 567 890</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📍</div>
            <div>
              <h3>Ubicación</h3>
              <p>Tu Ciudad, País</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">⏰</div>
            <div>
              <h3>Horario</h3>
              <p>Lun - Vie: 9:00 - 18:00</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Envíanos un Mensaje</h2>
          
          {submitted && (
            <div className="success-message">
              ¡Mensaje enviado con éxito! Te contactaremos pronto.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Asunto *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Cuéntanos sobre tu proyecto..."
              />
            </div>

            <button type="submit" className="submit-btn">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
