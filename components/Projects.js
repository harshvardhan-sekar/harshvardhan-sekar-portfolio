import { useState, useEffect } from 'react'
import { projectsData } from '../data/projects'

export default function Projects() {
  const [activeFilters, setActiveFilters] = useState(['all'])
  const [filteredProjects, setFilteredProjects] = useState(projectsData)

  useEffect(() => {
    if (activeFilters.includes('all')) {
      setFilteredProjects(projectsData)
    } else {
      setFilteredProjects(projectsData.filter(project => {
        // Handle both string categories and array categories
        const projectCategories = Array.isArray(project.category) 
          ? project.category 
          : [project.category]
        // Check if any of the project's categories match any active filter
        return projectCategories.some(cat => activeFilters.includes(cat))
      }))
    }
  }, [activeFilters])

  const handleFilterClick = (filter) => {
    if (filter === 'all') {
      setActiveFilters(['all'])
    } else {
      setActiveFilters(prev => {
        const newFilters = prev.filter(f => f !== 'all')
        if (newFilters.includes(filter)) {
          const updated = newFilters.filter(f => f !== filter)
          return updated.length === 0 ? ['all'] : updated
        } else {
          return [...newFilters, filter]
        }
      })
    }
  }

  const getCategoryName = (category) => {
    const categoryNames = {
      'ml': 'Machine Learning',
      'cv': 'Computer Vision',
      'nlp': 'Natural Language Processing',
      'credit': 'Credit Risk',
      'viz': 'Data Visualization',
      'de': 'Data Engineering',
      'consulting': 'Information Consulting'
    }
    return categoryNames[category] || category
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="project-filters">
          <button 
            className={`filter-btn ${activeFilters.includes('all') ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
            data-filter="all"
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeFilters.includes('ml') ? 'active' : ''}`}
            onClick={() => handleFilterClick('ml')}
            data-filter="ml"
          >
            Machine Learning
          </button>
          <button 
            className={`filter-btn ${activeFilters.includes('cv') ? 'active' : ''}`}
            onClick={() => handleFilterClick('cv')}
            data-filter="cv"
          >
            Computer Vision
          </button>
          <button 
            className={`filter-btn ${activeFilters.includes('nlp') ? 'active' : ''}`}
            onClick={() => handleFilterClick('nlp')}
            data-filter="nlp"
          >
            NLP
          </button>
          <button 
            className={`filter-btn ${activeFilters.includes('credit') ? 'active' : ''}`}
            onClick={() => handleFilterClick('credit')}
            data-filter="credit"
          >
            Credit Risk
          </button>
          <button 
            className={`filter-btn ${activeFilters.includes('viz') ? 'active' : ''}`}
            onClick={() => handleFilterClick('viz')}
            data-filter="viz"
          >
            Data Visualization
          </button>
          <button 
            className={`filter-btn ${activeFilters.includes('de') ? 'active' : ''}`}
            onClick={() => handleFilterClick('de')}
            data-filter="de"
          >
            Data Engineering
          </button>
          <button 
            className={`filter-btn ${activeFilters.includes('consulting') ? 'active' : ''}`}
            onClick={() => handleFilterClick('consulting')}
            data-filter="consulting"
          >
            Information Consulting
          </button>
        </div>
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card" data-category={Array.isArray(project.category) ? project.category.join(' ') : project.category}>
              <div className="project-image">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="project-image-img" />
                ) : (
                  <i className={project.image}></i>
                )}
              </div>
              <div className="project-content">
                {Array.isArray(project.category) ? (
                  <div className="project-categories">
                    {project.category.map((cat, index) => (
                      <span key={index} className="project-category">{getCategoryName(cat)}</span>
                    ))}
                  </div>
                ) : (
                  <span className="project-category">{getCategoryName(project.category)}</span>
                )}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className={project.github.includes('drive.google.com') ? 'fab fa-google-drive' : 'fab fa-github'}></i>
                    {project.github.includes('drive.google.com') ? 'View Project' : 'GitHub'}
                  </a>
                  {project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link secondary">
                      <i className={project.demo.includes('tableau.com') ? 'fab fa-tableau' : 'fas fa-external-link-alt'}></i>
                      {project.demo.includes('tableau.com') ? 'Tableau Visuals' : 'Demo'}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
