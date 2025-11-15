import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import './Services.css'

const Services = () => {
  const medicalServices = [
    {
      icon: '🩺',
      title: 'Consulta Médica General',
      description: 'Atención médica integral para pacientes de todas las edades. Diagnóstico y tratamiento de enfermedades comunes.'
    },
    {
      icon: '👶',
      title: 'Pediatría',
      description: 'Atención especializada para bebés, niños y adolescentes con enfoque en su bienestar y desarrollo.'
    },
    {
      icon: '👵',
      title: 'Geriatría',
      description: 'Cuidado médico especializado para adultos mayores, enfocado en su salud y calidad de vida.'
    },
    {
      icon: '💉',
      title: 'Vacunación',
      description: 'Servicio completo de vacunación para todas las edades. Vacunas certificadas y almacenamiento adecuado.'
    },
    {
      icon: '📋',
      title: 'Chequeos Preventivos',
      description: 'Exámenes médicos preventivos y evaluaciones de salud para detectar problemas a tiempo.'
    },
    {
      icon: '🩸',
      title: 'Control de Presión Arterial',
      description: 'Monitoreo y control de presión arterial con seguimiento personalizado.'
    }
  ]

  const labServices = [
    {
      icon: '🧪',
      title: 'Análisis de Sangre',
      description: 'Hematología completa, química sanguínea, perfil lipídico y más análisis de laboratorio.'
    },
    {
      icon: '💧',
      title: 'Análisis de Orina',
      description: 'Exámenes de orina completos para diagnóstico y seguimiento de diversas condiciones.'
    },
    {
      icon: '🦠',
      title: 'Cultivos y Antibiogramas',
      description: 'Identificación de microorganismos y pruebas de sensibilidad a antibióticos.'
    },
    {
      icon: '🧬',
      title: 'Pruebas Especializadas',
      description: 'Análisis especializados incluyendo hormonas, marcadores tumorales y más.'
    },
    {
      icon: '🩺',
      title: 'Pruebas de Embarazo',
      description: 'Pruebas de embarazo rápidas y confiables con resultados precisos.'
    },
    {
      icon: '📊',
      title: 'Perfiles de Laboratorio',
      description: 'Perfiles completos de laboratorio para evaluación integral de la salud.'
    }
  ]

  return (
    <div className="services-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Nuestros Servicios</h1>
          <p className="page-subtitle">
            Ofrecemos una amplia gama de servicios médicos y de laboratorio 
            con tecnología de vanguardia y profesionales altamente capacitados.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="services-category">
            <h2 className="category-title">
              <span className="category-icon">🩺</span>
              Servicios Médicos
            </h2>
            <div className="services-grid">
              {medicalServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>

          <div className="services-category">
            <h2 className="category-title">
              <span className="category-icon">🧪</span>
              Servicios de Laboratorio
            </h2>
            <div className="services-grid">
              {labServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">¿Necesitas más información?</h2>
            <p className="cta-text">
              Contáctanos o reserva una cita para conocer más sobre nuestros servicios.
            </p>
            <div className="cta-actions">
              <Link to="/reservar-cita" className="btn btn-primary">Reservar Cita</Link>
              <Link to="/contacto" className="btn btn-secondary">Contactar</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

