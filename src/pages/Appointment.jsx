import { useState } from 'react'
import './Appointment.css'

const Appointment = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    tipoServicio: '',
    fecha: '',
    hora: '',
    motivo: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
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

    if (!formData.apellido.trim()) {
      newErrors.apellido = 'El apellido es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido'
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido'
    }

    if (!formData.tipoServicio) {
      newErrors.tipoServicio = 'Debe seleccionar un tipo de servicio'
    }

    if (!formData.fecha) {
      newErrors.fecha = 'Debe seleccionar una fecha'
    } else {
      const selectedDate = new Date(formData.fecha)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        newErrors.fecha = 'La fecha no puede ser en el pasado'
      }
    }

    if (!formData.hora) {
      newErrors.hora = 'Debe seleccionar una hora'
    }

    if (!formData.motivo.trim()) {
      newErrors.motivo = 'El motivo de la consulta es requerido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validate()) {
      // Here you would typically send the data to a backend
      console.log('Form data:', formData)
      setSubmitted(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          nombre: '',
          apellido: '',
          email: '',
          telefono: '',
          tipoServicio: '',
          fecha: '',
          hora: '',
          motivo: ''
        })
        setSubmitted(false)
      }, 3000)
    }
  }

  // Generate time slots
  const timeSlots = []
  for (let hour = 8; hour < 18; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
      timeSlots.push(timeString)
    }
  }

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0]
  // Get maximum date (3 months from now)
  const maxDate = new Date()
  maxDate.setMonth(maxDate.getMonth() + 3)
  const maxDateString = maxDate.toISOString().split('T')[0]

  if (submitted) {
    return (
      <div className="appointment-page">
        <div className="container">
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>¡Cita Reservada Exitosamente!</h2>
            <p>Hemos recibido tu solicitud de cita. Te contactaremos pronto para confirmar los detalles.</p>
            <p className="success-details">
              <strong>Fecha:</strong> {formData.fecha}<br />
              <strong>Hora:</strong> {formData.hora}<br />
              <strong>Servicio:</strong> {formData.tipoServicio}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="appointment-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Reservar Cita</h1>
          <p className="page-subtitle">
            Completa el formulario para reservar tu cita médica o de laboratorio.
          </p>
        </div>
      </section>

      <section className="appointment-form-section">
        <div className="container">
          <div className="form-container">
            <form onSubmit={handleSubmit} className="appointment-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className={errors.nombre ? 'error' : ''}
                    placeholder="Ingresa tu nombre"
                  />
                  {errors.nombre && <span className="error-message">{errors.nombre}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="apellido">Apellido *</label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    className={errors.apellido ? 'error' : ''}
                    placeholder="Ingresa tu apellido"
                  />
                  {errors.apellido && <span className="error-message">{errors.apellido}</span>}
                </div>
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
                <label htmlFor="tipoServicio">Tipo de Servicio *</label>
                <select
                  id="tipoServicio"
                  name="tipoServicio"
                  value={formData.tipoServicio}
                  onChange={handleChange}
                  className={errors.tipoServicio ? 'error' : ''}
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Consulta Médica General">Consulta Médica General</option>
                  <option value="Pediatría">Pediatría</option>
                  <option value="Geriatría">Geriatría</option>
                  <option value="Vacunación">Vacunación</option>
                  <option value="Chequeo Preventivo">Chequeo Preventivo</option>
                  <option value="Análisis de Sangre">Análisis de Sangre</option>
                  <option value="Análisis de Orina">Análisis de Orina</option>
                  <option value="Cultivos y Antibiogramas">Cultivos y Antibiogramas</option>
                  <option value="Pruebas Especializadas">Pruebas Especializadas</option>
                  <option value="Otro">Otro</option>
                </select>
                {errors.tipoServicio && <span className="error-message">{errors.tipoServicio}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fecha">Fecha *</label>
                  <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    min={today}
                    max={maxDateString}
                    className={errors.fecha ? 'error' : ''}
                  />
                  {errors.fecha && <span className="error-message">{errors.fecha}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="hora">Hora *</label>
                  <select
                    id="hora"
                    name="hora"
                    value={formData.hora}
                    onChange={handleChange}
                    className={errors.hora ? 'error' : ''}
                  >
                    <option value="">Selecciona una hora</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  {errors.hora && <span className="error-message">{errors.hora}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="motivo">Motivo de la Consulta *</label>
                <textarea
                  id="motivo"
                  name="motivo"
                  value={formData.motivo}
                  onChange={handleChange}
                  className={errors.motivo ? 'error' : ''}
                  placeholder="Describe brevemente el motivo de tu consulta..."
                  rows="4"
                />
                {errors.motivo && <span className="error-message">{errors.motivo}</span>}
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                Reservar Cita
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Appointment

