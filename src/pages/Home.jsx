import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import './Home.css'

const Home = () => {
  const featuredServices = [
    {
      icon: '🩺',
      title: 'Consulta Médica General',
      description: 'Atención médica integral con profesionales especializados en medicina general.'
    },
    {
      icon: '🧪',
      title: 'Análisis Clínicos',
      description: 'Laboratorio clínico con tecnología avanzada para análisis precisos y confiables.'
    },
    {
      icon: '💉',
      title: 'Vacunación',
      description: 'Servicio completo de vacunación para todas las edades con vacunas certificadas.'
    },
    {
      icon: '📋',
      title: 'Chequeos Preventivos',
      description: 'Exámenes médicos preventivos para mantener tu salud en óptimas condiciones.'
    }
  ]

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Cuidamos de tu Salud con Excelencia y Compromiso
            </h1>
            <p className="hero-subtitle">
              Clínica médica y laboratorio clínico con más de 20 años de experiencia 
              brindando servicios de salud de calidad para toda la familia.
            </p>
            <div className="hero-actions">
              <Link to="/reservar-cita" className="btn btn-primary">
                Reservar Cita
              </Link>
              <Link to="/servicios" className="btn btn-secondary">
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestros Servicios</h2>
            <p className="section-subtitle">
              Ofrecemos una amplia gama de servicios médicos y de laboratorio 
              para cuidar de tu salud y la de tu familia.
            </p>
          </div>
          <div className="services-grid">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <div className="section-footer">
            <Link to="/servicios" className="btn btn-outline">
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">¿Por Qué Elegirnos?</h2>
          </div>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">👨‍⚕️</div>
              <h3 className="feature-title">Profesionales Certificados</h3>
              <p className="feature-description">
                Contamos con médicos y técnicos altamente capacitados y certificados.
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔬</div>
              <h3 className="feature-title">Tecnología Avanzada</h3>
              <p className="feature-description">
                Equipos modernos y tecnología de vanguardia para diagnósticos precisos.
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">⏰</div>
              <h3 className="feature-title">Horarios Flexibles</h3>
              <p className="feature-description">
                Atención de lunes a viernes con horarios que se adaptan a tus necesidades.
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">❤️</div>
              <h3 className="feature-title">Atención Personalizada</h3>
              <p className="feature-description">
                Trato humano y personalizado para cada uno de nuestros pacientes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

