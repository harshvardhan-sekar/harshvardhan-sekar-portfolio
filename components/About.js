export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Data Science & Engineering professional pursuing an MS in Information Management from UIUC 
              (Aug 2024 - May 2026) with 2+ years of experience at HSBC in Loss Forecasting & Credit Decision Modelling. 
              I specialize in quantitative modeling, regulatory compliance (IFRS9, BASEL III, CCAR, CECL), and building 
              end-to-end data pipelines for financial risk management.
            </p>
            <p>
              At HSBC, I led tracking of $18B+ mortgage and $230M+ credit card portfolios, streamlined SAS reporting 
              processes saving 132 calendar days annually, and optimized data migration to Google Cloud Platform. My 
              expertise spans Python, SQL, SAS, PySpark, and cloud technologies with hands-on experience in ETL/ELT 
              pipelines, model monitoring, and regulatory financial risk frameworks.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>2+</h3>
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
