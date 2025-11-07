export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Master of Science in Information Management</h3>
              <h4>University of Illinois at Urbana-Champaign</h4>
              <span className="date">Aug 2024 - May 2026</span>
              <p>
                GPA: 3.94/4.00. Coursework in Data Warehousing, Applied Machine Learning, Text Mining, 
                Statistical Models, and Information Systems. Specialized in quantitative modeling and 
                data science methodologies.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Decision Science Analyst</h3>
              <h4>HSBC - Loss Forecasting & Credit Decision Modelling</h4>
              <span className="date">Aug 2022 - May 2024</span>
              <p>
                Tracked $18B+ mortgage and $230M+ credit card portfolios across U.S. retail and consumer 
                lending segments. Led IFRS9/CECL provisioning for 200K+ accounts, monitoring ECL deltas 
                and ensuring reserves aligned with risk thresholds. Automated SAS and SQL pipelines for 
                receivables, roll-rate, and loss forecasting reports, improving efficiency by 40%. 
                Supported capital stress testing and scenario-weighted forecasting using macroeconomic 
                drivers (GDP, HPI, Unemployment).
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Bachelor of Technology in ECE</h3>
              <h4>National Institute of Technology, Tiruchirappalli</h4>
              <span className="date">Jul 2018 - May 2022</span>
              <p>
                GPA: 3.57/4.00. Coursework in Data Structures, Database Management, Big Data Mining 
                & Analytics, Pattern Recognition, and Software Engineering. Developed pneumonia 
                detection models using CNN architectures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
