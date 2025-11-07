export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I'm Harshvardhan "Harsha" Sekar, a Data Science and Machine Learning professional pursuing my Master's 
              in Information Management at the University of Illinois Urbana-Champaign. Previously, I worked at HSBC as a 
              Decision Science Analyst in Credit Risk, where I worked on IFRS9-compliant loss forecasting models and 
              automated reporting pipelines for mortgage portfolios exceeding $18B. My background bridges finance, data 
              engineering, and applied machine learning, translating complex data into actionable insights that drive 
              smarter, risk-aware decisions.
            </p>
            <p>
              At Illinois, I've expanded my focus to Generative AI and Large Language Models, developing systems that blend 
              language, vision, and retrieval-based reasoning. My recent work includes a Retrieval-Augmented Medical QA Agent 
              using T5, BioBART, and SBERT, and a Multimodal Comics Understanding Model leveraging OpenFlamingo, LLaVA, and 
              Stable Diffusion. I'm passionate about building ethical, grounded, and scalable AI systems that enhance how 
              people interact with information — from credit modeling and healthcare analytics to intelligent, trustworthy 
              LLM applications.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>2 years</h3>
              <p>Years at HSBC</p>
            </div>
            <div className="stat">
              <h3>$18B+</h3>
              <p>Portfolio Managed</p>
            </div>
            <div className="stat">
              <h3>3.94</h3>
              <p>GPA at UIUC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
