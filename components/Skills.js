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
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages & Tools</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <span>Python</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="95"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>SQL</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="90"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>SAS</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="85"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>PySpark</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="80"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>R</span>
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
                  <span>Scikit-learn</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="90"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>XGBoost</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="85"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>TensorFlow</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="80"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>LightGBM</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="80"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>PyTorch</span>
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
                  <span>AWS</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="80"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Google Cloud Platform</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="85"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Snowflake</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="80"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Databricks</span>
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
                  <span>Tableau</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="85"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>QlikSense</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="80"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Power BI</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="75"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Looker</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="70"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skills-right">
            <div className="certifications">
              <h3>Key Expertise Areas</h3>
              <div className="cert-grid">
                <div className="cert-item">
                  <i className="fas fa-shield-alt"></i>
                  <span>Regulatory Risk Frameworks</span>
                  <small>IFRS9, BASEL III, CCAR, CECL</small>
                </div>
                <div className="cert-item">
                  <i className="fas fa-chart-line"></i>
                  <span>Quantitative Modeling</span>
                  <small>Loss Forecasting, ECL, PD/LGD/EAD</small>
                </div>
                <div className="cert-item">
                  <i className="fas fa-database"></i>
                  <span>Data Engineering</span>
                  <small>ETL/ELT, Data Pipelines, Cloud Migration</small>
                </div>
                <div className="cert-item">
                  <i className="fas fa-brain"></i>
                  <span>Machine Learning</span>
                  <small>XGBoost, Random Forest, Neural Networks</small>
                </div>
                <div className="cert-item">
                  <i className="fas fa-cloud"></i>
                  <span>Cloud Platforms</span>
                  <small>AWS, GCP, Snowflake, Databricks</small>
                </div>
                <div className="cert-item">
                  <i className="fas fa-chart-bar"></i>
                  <span>Business Intelligence</span>
                  <small>Tableau, QlikSense, Power BI, Looker</small>
                </div>
              </div>
            </div>
            <div className="certifications">
              <h3>Certifications</h3>
              <div className="cert-grid">
                <div className="cert-item">
                  <i className="fas fa-graduation-cap"></i>
                  <span>Deep Learning Specialization</span>
                  <small>DeepLearning.AI - Coursera</small>
                </div>
                <div className="cert-item">
                  <i className="fas fa-robot"></i>
                  <span>Machine Learning Specialization</span>
                  <small>Stanford University - Coursera</small>
                </div>
                <div className="cert-item">
                  <i className="fab fa-aws"></i>
                  <span>AWS Cloud Practitioner</span>
                  <small>Amazon Web Services</small>
                </div>
                <div className="cert-item">
                  <i className="fas fa-database"></i>
                  <span>IBM Data Engineering</span>
                  <small>IBM - Coursera</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
