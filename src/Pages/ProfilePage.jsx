import { useParams, Link } from 'react-router-dom'
import developers from '../Data/developers'
import './ProfilePage.css'

function ProfilePage() {

  const { id } = useParams()

  const developer = developers.find((dev) => {
    return dev.id === Number(id)
  })

  if (!developer) {
    return <h1>Developer not found</h1>
  }

  return (
    <div className="profile-page">

      <div className="profile-hero">
        <div className="profile-hero-bg"></div>
        <div className="profile-info">
          <img src={developer.avatar} alt={developer.name} className="profile-avatar" />
          <h1 className="profile-name">{developer.name}</h1>
          <p className="profile-bio">{developer.bio}</p>
          <p className="profile-followers">👥 {developer.followers} Followers</p>

          <div className="profile-skills">
            {developer.skills.map((skill) => {
              return <span key={skill} className="skill-badge">{skill}</span>
            })}
          </div>

          <Link to={`/contact/${developer.id}`} className="contact-link">
            Contact Me →
          </Link>

        </div>
      </div>

      <div className="projects-section">
        <h2 className="projects-heading">
          Projects <span className="highlight">({developer.projects.length})</span>
        </h2>

        <div className="projects-list">
          {developer.projects.map((project) => {
            return (
              <div key={project.id} className="project-card">

                <div className="project-img-box">
                  <img src={project.image} alt={project.title} className="project-img" />
                  <div className="project-img-overlay"></div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-tools">
                    {project.tools.map((tool) => {
                      return <span key={tool} className="tool-badge">{tool}</span>
                    })}
                  </div>

                  <Link to={`/project/${project.id}`} className="view-project-btn">
                    View Project →
                  </Link>
                </div>

              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default ProfilePage