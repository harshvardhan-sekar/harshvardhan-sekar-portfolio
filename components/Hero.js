import { useEffect, useState } from 'react'

const roles = ['Credit Risk Analyst', 'Data Scientist', 'ML Engineer', 'Data Analyst']

export default function Hero() {
  const [name, setName] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isRoleVisible, setIsRoleVisible] = useState(true)

  useEffect(() => {
    const fullName = 'Harshvardhan Sekar'
    let currentIndex = 0
    let isDeleting = false
    const typeSpeed = 100

    const typeWriter = () => {
      if (currentIndex < fullName.length) {
        setName(fullName.substring(0, currentIndex + 1))
        currentIndex++
        setTimeout(typeWriter, typeSpeed)
      } else {
        setTimeout(() => {
          setShowCursor(false)
        }, 500)
      }
    }

    setTimeout(() => {
      typeWriter()
    }, 500)
  }, [])

  useEffect(() => {
    let fadeTimeout
    const cycleInterval = setInterval(() => {
      setIsRoleVisible(false)
      fadeTimeout = setTimeout(() => {
        setCurrentRoleIndex(prev => (prev + 1) % roles.length)
        setIsRoleVisible(true)
      }, 300)
    }, 3000)

    return () => {
      clearInterval(cycleInterval)
      if (fadeTimeout) {
        clearTimeout(fadeTimeout)
      }
    }
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">{name}</span>
            {showCursor && <span className="cursor">|</span>}
          </h1>
          <h2 className="hero-roles">
            <span className={`hero-role-highlight ${isRoleVisible ? 'fade-in' : 'fade-out'}`}>
              {roles[currentRoleIndex]}
            </span>
          </h2>
          <p>
            MS Information Management at UIUC (May 2026) | Former Credit Risk Analyst at HSBC | Transforming complex data into actionable intelligence across Credit Risk, Healthcare, and AI.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/harshvardhan-sekar" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/harshvardhan-sekar/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:sekar6@illinois.edu">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar-container">
            <img 
              src="/images/studio-ghibli-avatar.png" 
              alt="Harshvardhan Sekar - Studio Ghibli Avatar" 
              className="hero-avatar"
              width="350"
              height="350"
              loading="eager"
              onLoad={(e) => {
                e.target.classList.add('loaded')
              }}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextElementSibling.style.display = 'flex'
              }}
            />
            <div className="avatar-placeholder">
              <div className="avatar-initials">HS</div>
              <div className="avatar-text">Studio Ghibli Avatar</div>
              <div className="avatar-subtext">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
