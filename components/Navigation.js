import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY
      setIsScrolled(scrollPos > 5)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : 'hero-nav'}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home">Harshvardhan Sekar</a>
        </div>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
          <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
          <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
          <a href="#experience" className="nav-link" onClick={closeMenu}>Experience</a>
          <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}
