import { useState, useEffect } from 'react'

const roles = ['Credit Risk Analyst', 'Data Scientist', 'ML Engineer', 'Data Analyst']

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isRoleVisible, setIsRoleVisible] = useState(true)
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRoleVisible(false)
      setTimeout(() => {
        setCurrentRoleIndex(prev => (prev + 1) % roles.length)
        setIsRoleVisible(true)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text fade-in">
          <div className="hero-status">
            <span className="status-dot"></span>
            Open to Work — Seeking 2026 Opportunities
          </div>
          <div className="hero-greeting">Welcome to my portfolio</div>
          <h1 className="hero-name">Hi, I'm <span className="hero-name-last">Harshvardhan Sekar</span></h1>
          <div className="hero-roles">
            <span className={`role-text ${isRoleVisible ? '' : 'fade-out'}`} style={{
              opacity: isRoleVisible ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}>
              {roles[currentRoleIndex]}
            </span>
          </div>
          <p className="hero-tagline">Transforming complex data into actionable intelligence across Credit Risk, Healthcare, and AI.</p>

          <div className="hero-accomplishments">
            <div className="accomplishment-pill">🎓 MS Information Management, UIUC</div>
            <div className="accomplishment-pill">📊 Data Science Track</div>
            <div className="accomplishment-pill">🏦 Ex-HSBC Credit Risk</div>
            <div className="accomplishment-pill">📈 3.96 GPA</div>
            <div className="accomplishment-pill">🎯 May 2026 Graduate</div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>
              Get In Touch
            </button>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/harshvardhan-sekar" className="social-link" target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/harshvardhan-sekar/" className="social-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:sekar6@illinois.edu" className="social-link" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://drive.google.com/drive/folders/1AXhb6GebVKAux7dnES2nw7B6RJAysFgu?usp=sharing" className="social-link" target="_blank" rel="noopener noreferrer" title="Resume">
              <i className="fas fa-file-alt"></i>
            </a>
          </div>
        </div>

        <div className={`hero-avatar fade-in ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
          <div className="avatar-flip-container">
            <div className="avatar-front">
              <img src="/images/studio-ghibli-avatar.png" alt="Harshvardhan Sekar - Animated" className="avatar-image" />
            </div>
            <div className="avatar-back">
              <img src="/images/Profile.JPG" alt="Harshvardhan Sekar" className="avatar-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
