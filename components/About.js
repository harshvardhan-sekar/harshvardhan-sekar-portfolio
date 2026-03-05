export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text fade-in">
          <p>
            Hi, I'm Harshvardhan "Harsha" Sekar, a Data Science and Machine Learning professional pursuing my Master's in Information Management at the University of Illinois Urbana-Champaign. Previously, I worked at HSBC as a Decision Science Analyst in Credit Risk, where I worked on IFRS9-compliant loss forecasting models and automated reporting pipelines for mortgage portfolios exceeding $18B. My background bridges finance, data engineering, and applied machine learning, translating complex data into actionable insights that drive smarter, risk-aware decisions.
          </p>
          <p>
            At Illinois, I've expanded my focus to Generative AI and Large Language Models, developing systems that blend language, vision, and retrieval-based reasoning. My recent work includes a Retrieval-Augmented Medical QA Agent using T5, BioBART, and SBERT, and a Multimodal Comics Understanding Model leveraging OpenFlamingo, LLaVA, and Stable Diffusion. I'm passionate about building ethical, grounded, and scalable AI systems that enhance how people interact with information — from credit modeling and healthcare analytics to intelligent, trustworthy LLM applications.
          </p>
        </div>

        <div className="about-stats fade-in">
          <div className="stat-card">
            <div className="stat-icon"><i className="fas fa-briefcase"></i></div>
            <div className="stat-number">2 Years</div>
            <div className="stat-label">Industry Experience at HSBC</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><i className="fas fa-chart-line"></i></div>
            <div className="stat-number">$18B+</div>
            <div className="stat-label">Portfolio Managed</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><i className="fas fa-graduation-cap"></i></div>
            <div className="stat-number">3.96</div>
            <div className="stat-label">GPA at UIUC</div>
          </div>
        </div>
      </div>
    </section>
  )
}
