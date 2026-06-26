import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import developers from '../Data/developers'
import './ProjectPage.css'

function ProjectPage() {

  const { id } = useParams()

  const project = developers
    .flatMap((dev) => {
      return dev.projects
    })
    .find((project) => {
      return project.id === Number(id)
    })

  const savedProjects = JSON.parse(localStorage.getItem('savedProjects')) || []
  const [isSaved, setIsSaved] = useState(savedProjects.includes(Number(id)))

  function handleSave() {
    const saved = JSON.parse(localStorage.getItem('savedProjects')) || []

    if (isSaved) {
      const updated = saved.filter((projectId) => {
        return projectId !== Number(id)
      })
      localStorage.setItem('savedProjects', JSON.stringify(updated))
      setIsSaved(false)
    } else {
      saved.push(Number(id))
      localStorage.setItem('savedProjects', JSON.stringify(saved))
      setIsSaved(true)
    }
  }

  if (!project) {
    return <h1>Project not found</h1>
  }

  return (
    <div className="project-page">

      <div className="project-hero">
        <img src={project.image} alt={project.title} className="project-banner" />
        <div className="project-banner-overlay"></div>
        <div className="project-hero-content">
          <h1 className="project-title">{project.title}</h1>
        </div>
      </div>

      <div className="project-body">

        <div className="project-desc-box">
          <h2 className="section-heading">About Project</h2>
          <p className="project-desc">{project.description}</p>
        </div>

        <div className="project-tools-box">
          <h2 className="section-heading">Tools Used</h2>
          <div className="project-tools">
            {project.tools.map((tool) => {
              return <span key={tool} className="tool-badge">{tool}</span>
            })}
          </div>
        </div>

        <div className="project-btns">
          <a href={project.github} target="_blank" className="btn-github">
            GitHub →
          </a>
          <a href={project.live} target="_blank" className="btn-live">
            Live Demo →
          </a>
          <button onClick={handleSave} className={isSaved ? 'btn-saved' : 'btn-save'}>
            {isSaved ? '🔖 Saved' : '🔖 Save Project'}
          </button>
        </div>

        <Link to={-1} className="btn-back">← Back</Link>

      </div>

    </div>
  )
}

export default ProjectPage