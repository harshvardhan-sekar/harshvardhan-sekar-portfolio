export default function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Experience & Education</h2>
      <div className="timeline">
        <div className="timeline-item fade-in">
          <div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="timeline-logo">
                  <img src="/images/UIUC_Logo.jpg" alt="UIUC" />
                </div>
                <div className="timeline-info">
                  <h3>Master of Science in Information Management</h3>
                  <p className="subtitle">University of Illinois at Urbana-Champaign</p>
                </div>
              </div>
              <div className="timeline-date">Aug 2024 - May 2026</div>
              <div className="timeline-description">
                GPA: 3.96/4.00. Coursework in Data Warehousing, Applied Machine Learning, Text Mining, Statistical Models, and Information Systems. Specialized in quantitative modeling and data science methodologies.
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-item fade-in">
          <div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="timeline-logo">
                  <img src="/images/bank-hsbc.png" alt="HSBC" />
                </div>
                <div className="timeline-info">
                  <h3>Decision Science Analyst</h3>
                  <p className="subtitle">HSBC - Loss Forecasting & Credit Decision Modelling</p>
                </div>
              </div>
              <div className="timeline-date">Aug 2022 - May 2024</div>
              <div className="timeline-description">
                Tracked $18B+ mortgage and $230M+ credit card portfolios across U.S. retail and consumer lending segments. Led IFRS9/CECL provisioning for 200K+ accounts, monitoring ECL deltas and ensuring reserves aligned with risk thresholds. Automated SAS and SQL pipelines for receivables, roll-rate, and loss forecasting reports, improving efficiency by 40%. Supported capital stress testing and scenario-weighted forecasting using macroeconomic drivers (GDP, HPI, Unemployment).
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-item fade-in">
          <div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="timeline-logo">
                  <img src="/images/National_Institute_of_Technology,_Tiruchirappalli.svg" alt="NIT Trichy" />
                </div>
                <div className="timeline-info">
                  <h3>Bachelor of Technology in ECE</h3>
                  <p className="subtitle">National Institute of Technology, Tiruchirappalli</p>
                </div>
              </div>
              <div className="timeline-date">Jul 2018 - May 2022</div>
              <div className="timeline-description">
                GPA: 3.57/4.00. Coursework in Data Structures, Database Management, Big Data Mining & Analytics, Pattern Recognition, and Software Engineering. Developed pneumonia detection models using CNN architectures.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
