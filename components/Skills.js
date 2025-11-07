import { useEffect, useState } from 'react'

export default function Skills() {
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateSkillBars()
          }
        })
      },
      { threshold: 0.3 }
    )

    const skillsSection = document.querySelector('#skills')
    if (skillsSection) {
      observer.observe(skillsSection)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const getExperienceColor = (percentage) => {
    const percent = parseInt(percentage)
    if (percent >= 85) {
      // Advanced - Green
      return {
        background: 'linear-gradient(90deg, #10b981 0%, #34d399 100%)',
        shadow: 'rgba(16, 185, 129, 0.5)',
        label: 'Advanced',
        labelClass: 'skill-level-advanced'
      }
    } else if (percent >= 70) {
      // Intermediate - Orange/Yellow
      return {
        background: 'linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%)',
        shadow: 'rgba(245, 158, 11, 0.5)',
        label: 'Intermediate',
        labelClass: 'skill-level-intermediate'
      }
    } else {
      // Beginner - Red/Orange
      return {
        background: 'linear-gradient(90deg, #ef4444 0%, #f97316 100%)',
        shadow: 'rgba(239, 68, 68, 0.5)',
        label: 'Beginner',
        labelClass: 'skill-level-beginner'
      }
    }
  }

  const getExperienceLevel = (percentage) => {
    const percent = parseInt(percentage)
    if (percent >= 85) return { label: 'Advanced', class: 'skill-level-advanced' }
    if (percent >= 70) return { label: 'Intermediate', class: 'skill-level-intermediate' }
    return { label: 'Beginner', class: 'skill-level-beginner' }
  }

  const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress')
    skillBars.forEach((bar, index) => {
      const width = bar.getAttribute('data-width')
      const delay = index * 150

      setTimeout(() => {
        bar.style.width = '0%'
        bar.style.transition = 'width 2s cubic-bezier(0.4, 0, 0.2, 1)'
        bar.style.background = 'linear-gradient(90deg, #ff6b6b 0%, #ffa726 50%, #66bb6a 100%)'
        bar.style.boxShadow = '0 0 10px rgba(102, 187, 106, 0.5)'

        setTimeout(() => {
          bar.style.width = width + '%'
          setTimeout(() => {
            bar.style.boxShadow = '0 0 15px rgba(102, 187, 106, 0.8)'
            bar.style.transform = 'scale(1.02)'
            setTimeout(() => {
              bar.style.transform = 'scale(1)'
            }, 300)
          }, 2000)
        }, 50)
      }, delay)
    })
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Certifications</h2>
        <div className="skills-content">
          <div className="skills-main">
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Programming Languages & Tools</h3>
                <div className="skill-items">
                <div className="skill-item">
                  <div className="skill-header">
                    <span>Python</span>
                    <span className={`skill-level ${getExperienceLevel(95).class}`}>{getExperienceLevel(95).label}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="95"></div>
                  </div>
                </div>
                  <div className="skill-item">
                    <div className="skill-header">
                      <span>SQL</span>
                      <span className={`skill-level ${getExperienceLevel(90).class}`}>{getExperienceLevel(90).label}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="90"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-header">
                      <span>C++</span>
                      <span className={`skill-level ${getExperienceLevel(85).class}`}>{getExperienceLevel(85).label}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="85"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-header">
                      <span>PySpark</span>
                      <span className={`skill-level ${getExperienceLevel(80).class}`}>{getExperienceLevel(80).label}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="80"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-header">
                      <span>SAS</span>
                      <span className={`skill-level ${getExperienceLevel(75).class}`}>{getExperienceLevel(75).label}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="75"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill-category">
                <h3>Machine Learning & AI</h3>
                <div className="skill-items">
                  <div className="skill-item">
                    <div className="skill-header">
                      <span>Scikit-learn</span>
                      <span className={`skill-level ${getExperienceLevel(90).class}`}>{getExperienceLevel(90).label}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="90"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-header">
                      <span>XGBoost</span>
                      <span className={`skill-level ${getExperienceLevel(85).class}`}>{getExperienceLevel(85).label}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="85"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-header">
                      <span>TensorFlow</span>
                      <span className={`skill-level ${getExperienceLevel(80).class}`}>{getExperienceLevel(80).label}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="80"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-header">
                      <span>HuggingFace Transformers</span>
                      <span className={`skill-level ${getExperienceLevel(80).class}`}>{getExperienceLevel(80).label}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="80"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-header">
                      <span>PyTorch</span>
                      <span className={`skill-level ${getExperienceLevel(75).class}`}>{getExperienceLevel(75).label}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="75"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill-category">
                <h3>Cloud & Data Platforms</h3>
                <div className="skill-items">
                  <div className="skill-item">
                    <div className="skill-header">
                      <span>Snowflake</span>
                      <span className={`skill-level ${getExperienceLevel(85).class}`}>{getExperienceLevel(85).label}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="85"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-header">
                      <span>AWS</span>
                      <span className={`skill-level ${getExperienceLevel(80).class}`}>{getExperienceLevel(80).label}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="80"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-header">
                      <span>Google Cloud Platform</span>
                      <span className={`skill-level ${getExperienceLevel(80).class}`}>{getExperienceLevel(80).label}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="80"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-header">
                      <span>Databricks</span>
                      <span className={`skill-level ${getExperienceLevel(75).class}`}>{getExperienceLevel(75).label}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="75"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill-category">
                <h3>Data Visualization & BI</h3>
                <div className="skill-items">
                  <div className="skill-item">
                    <div className="skill-header">
                      <span>Tableau</span>
                      <span className={`skill-level ${getExperienceLevel(85).class}`}>{getExperienceLevel(85).label}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="85"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-header">
                      <span>QlikSense</span>
                      <span className={`skill-level ${getExperienceLevel(80).class}`}>{getExperienceLevel(80).label}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="80"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-header">
                      <span>Power BI</span>
                      <span className={`skill-level ${getExperienceLevel(75).class}`}>{getExperienceLevel(75).label}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="75"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-header">
                      <span>Looker</span>
                      <span className={`skill-level ${getExperienceLevel(70).class}`}>{getExperienceLevel(70).label}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="70"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skills-sidebar">
            <div className="certifications">
              <h3>Key Expertise Areas</h3>
              <div className="cert-list">
                <div className="cert-item">
                  <i className="fas fa-shield-alt"></i>
                  <div className="cert-info">
                    <span>Regulatory Risk Frameworks</span>
                    <small>IFRS9, BASEL III, CCAR, CECL</small>
                  </div>
                </div>
                <div className="cert-item">
                  <i className="fas fa-chart-line"></i>
                  <div className="cert-info">
                    <span>Quantitative Modeling</span>
                    <small>Loss Forecasting, ECL, PD/LGD/EAD</small>
                  </div>
                </div>
                <div className="cert-item">
                  <i className="fas fa-database"></i>
                  <div className="cert-info">
                    <span>Data Engineering</span>
                    <small>ETL/ELT, Data Pipelines, Cloud Migration</small>
                  </div>
                </div>
                <div className="cert-item">
                  <i className="fas fa-brain"></i>
                  <div className="cert-info">
                    <span>Machine Learning</span>
                    <small>XGBoost, Random Forest, Neural Networks</small>
                  </div>
                </div>
                <div className="cert-item">
                  <i className="fas fa-cloud"></i>
                  <div className="cert-info">
                    <span>Cloud Platforms</span>
                    <small>AWS, GCP, Snowflake, Databricks</small>
                  </div>
                </div>
                <div className="cert-item">
                  <i className="fas fa-chart-bar"></i>
                  <div className="cert-info">
                    <span>Business Intelligence</span>
                    <small>Tableau, QlikSense, Power BI, Looker</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="certifications">
              <h3>Certifications</h3>
              <div className="cert-list">
                <a href="https://coursera.org/share/f848614b0b7b85102cf7d9acf9543ca7" target="_blank" rel="noopener noreferrer" className="cert-item cert-link">
                  <i className="fas fa-graduation-cap"></i>
                  <div className="cert-info">
                    <span>Deep Learning Specialization</span>
                    <small>DeepLearning.AI - Coursera</small>
                  </div>
                </a>
                <a href="https://coursera.org/share/757dc981108223ce6d611fd229d81645" target="_blank" rel="noopener noreferrer" className="cert-item cert-link">
                  <i className="fas fa-robot"></i>
                  <div className="cert-info">
                    <span>Machine Learning Specialization</span>
                    <small>Stanford University - Coursera</small>
                  </div>
                </a>
                <a href="https://coursera.org/share/2a6f4b9069e2de5ebe3d42c340bd02f6" target="_blank" rel="noopener noreferrer" className="cert-item cert-link">
                  <i className="fas fa-database"></i>
                  <div className="cert-info">
                    <span>IBM Data Engineering</span>
                    <small>IBM - Coursera</small>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
