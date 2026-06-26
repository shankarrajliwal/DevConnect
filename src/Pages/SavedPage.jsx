import { Link } from 'react-router-dom'
import developers from '../Data/developers'
import './SavedPage.css'

function SavedPage() {

  const savedIds = JSON.parse(localStorage.getItem('savedProjects')) || []

  const savedProjects = developers
    .flatMap((dev) => {
      return dev.projects
    })
    .filter((project) => {
      return savedIds.includes(project.id)
    })

  if (savedProjects.length === 0) {
    return (
      <div className="saved-empty">
        <div className="empty-icon">🔖</div>
        <h1 className="empty-heading">No Saved Projects</h1>
        <p className="empty-desc">Koi project save nahi kiya abhi tak</p>
        <Link to="/developers" className="explore-btn">Explore Developers →</Link>
      </div>
    )
  }

  return (
    <div className="saved-page">

      <div className="saved-hero">
        <h1 className="saved-heading">
          Saved <span className="highlight">Projects</span>
        </h1>
        <p className="saved-subheading">{savedProjects.length} projects saved</p>
      </div>

      <div className="saved-list">
        {savedProjects.map((project) => {
          return (
            <div key={project.id} className="saved-card">

              <div className="saved-img-box">
                <img src={project.image} alt={project.title} className="saved-img" />
                <div className="saved-img-overlay"></div>
              </div>

              <div className="saved-content">
                <h2 className="saved-title">{project.title}</h2>
                <p className="saved-desc">{project.description}</p>

                <div className="saved-tools">
                  {project.tools.map((tool) => {
                    return <span key={tool} className="tool-badge">{tool}</span>
                  })}
                </div>

                <Link to={`/project/${project.id}`} className="view-btn">
                  View Project →
                </Link>

              </div>

            </div>
          )
        })}
      </div>

    </div>
  )
}

export default SavedPage