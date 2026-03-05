export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills & Certifications</h2>
      <div className="skills-content">
        <div>
          <div className="skill-category">
            <h3 className="skill-category-title">Programming</h3>
            <div className="skill-chips">
              <span className="skill-chip">Python</span>
              <span className="skill-chip">SQL</span>
              <span className="skill-chip">C++</span>
              <span className="skill-chip">SAS</span>
              <span className="skill-chip">R</span>
              <span className="skill-chip">JavaScript</span>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">ML & AI</h3>
            <div className="skill-chips">
              <span className="skill-chip">Scikit-learn</span>
              <span className="skill-chip">XGBoost</span>
              <span className="skill-chip">TensorFlow</span>
              <span className="skill-chip">PyTorch</span>
              <span className="skill-chip">HuggingFace</span>
              <span className="skill-chip">LLMs</span>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">NLP & LLMs</h3>
            <div className="skill-chips">
              <span className="skill-chip">BERT</span>
              <span className="skill-chip">GPT</span>
              <span className="skill-chip">Transformers</span>
              <span className="skill-chip">RAG</span>
              <span className="skill-chip">Fine-tuning</span>
              <span className="skill-chip">Prompt Engineering</span>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">Cloud & Data</h3>
            <div className="skill-chips">
              <span className="skill-chip">AWS</span>
              <span className="skill-chip">GCP</span>
              <span className="skill-chip">Snowflake</span>
              <span className="skill-chip">Databricks</span>
              <span className="skill-chip">Apache Spark</span>
              <span className="skill-chip">Airflow</span>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">Databases & BI</h3>
            <div className="skill-chips">
              <span className="skill-chip">PostgreSQL</span>
              <span className="skill-chip">MongoDB</span>
              <span className="skill-chip">Tableau</span>
              <span className="skill-chip">Power BI</span>
              <span className="skill-chip">QlikSense</span>
              <span className="skill-chip">Looker</span>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">Risk Frameworks</h3>
            <div className="skill-chips">
              <span className="skill-chip">IFRS9</span>
              <span className="skill-chip">CECL</span>
              <span className="skill-chip">BASEL III</span>
              <span className="skill-chip">CCAR</span>
              <span className="skill-chip">Stress Testing</span>
              <span className="skill-chip">ECL Modeling</span>
            </div>
          </div>
        </div>

        <div>
          <div className="expertise-cards">
            <div className="expertise-card">
              <h3 className="expertise-title">Quantitative Modeling</h3>
              <p className="expertise-description">
                PD/LGD/EAD development, loss forecasting, macro stress testing, and regulatory capital modeling.
              </p>
            </div>
            <div className="expertise-card">
              <h3 className="expertise-title">Machine Learning</h3>
              <p className="expertise-description">
                Supervised and unsupervised learning, ensemble methods, deep neural networks, and model interpretation.
              </p>
            </div>
            <div className="expertise-card">
              <h3 className="expertise-title">NLP & LLMs</h3>
              <p className="expertise-description">
                Transformer architectures, retrieval-augmented generation, fine-tuning, and prompt engineering.
              </p>
            </div>
            <div className="expertise-card">
              <h3 className="expertise-title">Data Engineering</h3>
              <p className="expertise-description">
                ETL/ELT pipelines, data warehouse design, cloud migration, and big data processing.
              </p>
            </div>
          </div>

          <div className="certifications">
            <h3 className="certifications-title">Certifications</h3>
            <a href="https://coursera.org/share/f848614b0b7b85102cf7d9acf9543ca7" target="_blank" rel="noopener noreferrer" className="certification-item" style={{ textDecoration: 'none', color: 'inherit', display: 'block', cursor: 'pointer' }}>
              <div className="certification-name">Deep Learning Specialization</div>
              <div className="certification-issuer">DeepLearning.AI - Coursera</div>
              <span className="certification-link">
                View Certificate <i className="fas fa-external-link-alt"></i>
              </span>
            </a>
            <a href="https://coursera.org/share/757dc981108223ce6d611fd229d81645" target="_blank" rel="noopener noreferrer" className="certification-item" style={{ textDecoration: 'none', color: 'inherit', display: 'block', cursor: 'pointer' }}>
              <div className="certification-name">Machine Learning Specialization</div>
              <div className="certification-issuer">Stanford University - Coursera</div>
              <span className="certification-link">
                View Certificate <i className="fas fa-external-link-alt"></i>
              </span>
            </a>
            <a href="https://coursera.org/share/2a6f4b9069e2de5ebe3d42c340bd02f6" target="_blank" rel="noopener noreferrer" className="certification-item" style={{ textDecoration: 'none', color: 'inherit', display: 'block', cursor: 'pointer' }}>
              <div className="certification-name">IBM Data Engineering</div>
              <div className="certification-issuer">IBM - Coursera</div>
              <span className="certification-link">
                View Certificate <i className="fas fa-external-link-alt"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
