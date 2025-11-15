import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Clínica Médica</h3>
            <p className="footer-description">
              Brindamos servicios de salud de calidad con profesionales altamente capacitados 
              y tecnología de vanguardia.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
              <li><Link to="/reservar-cita">Reservar Cita</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contacto</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📍</span>
                <span>Av. Principal 123, Ciudad</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <span>info@clinicamedica.com</span>
              </li>
              <li>
                <span className="contact-icon">🕒</span>
                <span>Lun - Vie: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Clínica Médica. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

