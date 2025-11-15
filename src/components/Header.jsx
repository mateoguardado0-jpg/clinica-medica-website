import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="logo-icon">🏥</span>
            <span className="logo-text">Clínica Médica</span>
          </Link>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Inicio
            </Link>
            <Link 
              to="/servicios" 
              className={`nav-link ${isActive('/servicios') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Servicios
            </Link>
            <Link 
              to="/sobre-nosotros" 
              className={`nav-link ${isActive('/sobre-nosotros') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Sobre Nosotros
            </Link>
            <Link 
              to="/reservar-cita" 
              className={`nav-link ${isActive('/reservar-cita') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Reservar Cita
            </Link>
            <Link 
              to="/contacto" 
              className={`nav-link ${isActive('/contacto') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

