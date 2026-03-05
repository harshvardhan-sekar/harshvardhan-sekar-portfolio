import { useState, useEffect } from 'react'
import { projectsData } from '../data/projects'

export default function Projects() {
  const [activeFilters, setActiveFilters] = useState(new Set(['all']))
  const [filteredProjects, setFilteredProjects] = useState(projectsData)

  useEffect(() => {
    if (activeFilters.has('all')) {
      setFilteredProjects(projectsData)
    } else {
      setFilteredProjects(projectsData.filter(project => {
        const projectCategories = Array.isArray(project.category)
          ? project.category
          : [project.category]
        return projectCategories.some(cat => activeFilters.has(cat))
      }))
    }
  }, [activeFilters])

  const handleFilterClick = (filter) => {
    const newFilters = new Set(activeFilters)

    if (filter === 'all') {
      newFilters.clear()
      newFilters.add('all')
    } else {
      newFilters.delete('all')
      if (newFilters.has(filter)) {
        newFilters.delete(filter)
      } else {
        newFilters.add(filter)
      }
      if (newFilters.size === 0) {
        newFilters.add('all')
      }
    }

    setActiveFilters(newFilters)
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
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2 className="section-title">My Projects</h2>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${activeFilters.has('all') ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
            data-filter="all"
          >
            All
          </button>
          <button
            className={`filter-btn ${activeFilters.has('ml') ? 'active' : ''}`}
            onClick={() => handleFilterClick('ml')}
            data-filter="ml"
          >
            Machine Learning
          </button>
          <button
            className={`filter-btn ${activeFilters.has('cv') ? 'active' : ''}`}
            onClick={() => handleFilterClick('cv')}
            data-filter="cv"
          >
            Computer Vision
          </button>
          <button
            className={`filter-btn ${activeFilters.has('nlp') ? 'active' : ''}`}
            onClick={() => handleFilterClick('nlp')}
            data-filter="nlp"
          >
            NLP
          </button>
          <button
            className={`filter-btn ${activeFilters.has('credit') ? 'active' : ''}`}
            onClick={() => handleFilterClick('credit')}
            data-filter="credit"
          >
            Credit Risk
          </button>
          <button
            className={`filter-btn ${activeFilters.has('viz') ? 'active' : ''}`}
            onClick={() => handleFilterClick('viz')}
            data-filter="viz"
          >
            Data Visualization
          </button>
          <button
            className={`filter-btn ${activeFilters.has('de') ? 'active' : ''}`}
            onClick={() => handleFilterClick('de')}
            data-filter="de"
          >
            Data Engineering
          </button>
          <button
            className={`filter-btn ${activeFilters.has('consulting') ? 'active' : ''}`}
            onClick={() => handleFilterClick('consulting')}
            data-filter="consulting"
          >
            Information Consulting
          </button>
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => {
          const projectCategories = Array.isArray(project.category)
            ? project.category
            : [project.category]

          const isGoogleDrive = project.github.includes('drive.google.com')
          const hasDemo = project.demo && project.demo !== '#'

          return (
            <div key={project.id} className="project-card visible" data-categories={projectCategories.join(' ')} style={{ cursor: 'pointer' }} onClick={(e) => {
              if (!e.target.closest('.project-link-btn')) {
                window.open(project.github, '_blank', 'noopener,noreferrer')
              }
            }}>
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <div className="project-body">
                <div className="project-tags">
                  {projectCategories.map((cat, index) => (
                    <span key={index} className="project-tag">{getCategoryName(cat)}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-chips">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-chip">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link project-link-btn">
                    <i className={isGoogleDrive ? 'fab fa-google-drive' : 'fab fa-github'}></i>
                    {isGoogleDrive ? 'View Project' : 'GitHub'}
                  </a>
                  {hasDemo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link secondary project-link-btn" onClick={(e) => e.stopPropagation()}>
                      <i className={project.demo.includes('tableau.com') ? 'fas fa-chart-bar' : 'fas fa-external-link-alt'}></i>
                      {project.demo.includes('tableau.com') ? 'Tableau Visuals' : 'Demo'}
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
