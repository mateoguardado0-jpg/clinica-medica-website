import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Sobre Nosotros</h1>
          <p className="page-subtitle">
            Conoce más sobre nuestra clínica y nuestro compromiso con tu salud.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <div className="about-text">
              <h2 className="section-title">Nuestra Historia</h2>
              <p>
                Con más de 20 años de experiencia en el sector de la salud, nuestra clínica 
                médica y laboratorio clínico se ha consolidado como un referente en atención 
                médica de calidad. Fundada con la misión de brindar servicios de salud 
                accesibles y de excelencia, hemos crecido para convertirnos en una institución 
                confiable para miles de familias.
              </p>
              <p>
                Nuestro equipo de profesionales altamente capacitados trabaja con dedicación 
                y compromiso para ofrecer el mejor cuidado médico, utilizando tecnología de 
                vanguardia y siguiendo los más altos estándares de calidad y seguridad.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span className="placeholder-icon">🏥</span>
                <p>Imagen de la clínica</p>
              </div>
            </div>
          </div>

          <div className="mission-vision">
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h3 className="card-title">Nuestra Misión</h3>
              <p className="card-text">
                Proporcionar servicios de salud integrales de la más alta calidad, 
                accesibles para toda la comunidad, con un enfoque en la prevención, 
                el diagnóstico preciso y el tratamiento efectivo, siempre con calidez 
                humana y profesionalismo.
              </p>
            </div>

            <div className="vision-card">
              <div className="card-icon">👁️</div>
              <h3 className="card-title">Nuestra Visión</h3>
              <p className="card-text">
                Ser reconocidos como la clínica médica y laboratorio clínico líder en 
                nuestra región, destacando por nuestra excelencia en el servicio, 
                innovación tecnológica y compromiso con el bienestar de nuestros pacientes.
              </p>
            </div>
          </div>

          <div className="values-section">
            <h2 className="section-title">Nuestros Valores</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">❤️</div>
                <h4 className="value-title">Compromiso</h4>
                <p className="value-text">
                  Dedicación total al bienestar y salud de nuestros pacientes.
                </p>
              </div>
              <div className="value-item">
                <div className="value-icon">⭐</div>
                <h4 className="value-title">Excelencia</h4>
                <p className="value-text">
                  Mantenemos los más altos estándares de calidad en todos nuestros servicios.
                </p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h4 className="value-title">Integridad</h4>
                <p className="value-text">
                  Actuamos con honestidad, transparencia y ética profesional.
                </p>
              </div>
              <div className="value-item">
                <div className="value-icon">🔬</div>
                <h4 className="value-title">Innovación</h4>
                <p className="value-text">
                  Utilizamos tecnología avanzada para diagnósticos precisos y tratamientos efectivos.
                </p>
              </div>
              <div className="value-item">
                <div className="value-icon">👥</div>
                <h4 className="value-title">Respeto</h4>
                <p className="value-text">
                  Tratamos a cada paciente con dignidad, empatía y consideración.
                </p>
              </div>
              <div className="value-item">
                <div className="value-icon">📚</div>
                <h4 className="value-title">Educación</h4>
                <p className="value-text">
                  Promovemos la educación en salud para el bienestar de la comunidad.
                </p>
              </div>
            </div>
          </div>

          <div className="team-section">
            <h2 className="section-title">Nuestro Equipo</h2>
            <p className="section-description">
              Contamos con un equipo multidisciplinario de profesionales de la salud 
              altamente capacitados y comprometidos con tu bienestar.
            </p>
            <div className="team-stats">
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Años de Experiencia</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Profesionales</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10000+</div>
                <div className="stat-label">Pacientes Atendidos</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Especialidades</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

