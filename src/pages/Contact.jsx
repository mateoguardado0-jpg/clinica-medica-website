import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido'
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido'
    }

    if (!formData.asunto.trim()) {
      newErrors.asunto = 'El asunto es requerido'
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validate()) {
      // Here you would typically send the data to a backend
      console.log('Contact form data:', formData)
      setSubmitted(true)
      setTimeout(() => {
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          asunto: '',
          mensaje: ''
        })
        setSubmitted(false)
      }, 3000)
    }
  }

  if (submitted) {
    return (
      <div className="contact-page">
        <div className="container">
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>¡Mensaje Enviado!</h2>
            <p>Hemos recibido tu mensaje. Te contactaremos pronto.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Contacto</h1>
          <p className="page-subtitle">
            Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes posible.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="section-title">Información de Contacto</h2>
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h3>Dirección</h3>
                    <p>Av. Principal 123<br />Ciudad, Estado 12345</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h3>Teléfono</h3>
                    <p>+1 (555) 123-4567</p>
                    <p>+1 (555) 123-4568</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p>info@clinicamedica.com</p>
                    <p>citas@clinicamedica.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">🕒</div>
                  <div className="info-content">
                    <h3>Horarios</h3>
                    <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                    <p>Sábados: 9:00 AM - 2:00 PM</p>
                    <p>Domingos: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h2 className="section-title">Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre Completo *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className={errors.nombre ? 'error' : ''}
                    placeholder="Tu nombre completo"
                  />
                  {errors.nombre && <span className="error-message">{errors.nombre}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                      placeholder="tu@email.com"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono *</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className={errors.telefono ? 'error' : ''}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.telefono && <span className="error-message">{errors.telefono}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="asunto">Asunto *</label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    className={errors.asunto ? 'error' : ''}
                    placeholder="¿Sobre qué quieres contactarnos?"
                  />
                  {errors.asunto && <span className="error-message">{errors.asunto}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    className={errors.mensaje ? 'error' : ''}
                    placeholder="Escribe tu mensaje aquí..."
                    rows="6"
                  />
                  {errors.mensaje && <span className="error-message">{errors.mensaje}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

