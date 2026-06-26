import { useParams, Link } from 'react-router-dom'
import developers from '../Data/developers'
import './ContactPage.css'

function ContactPage() {

  const { id } = useParams()

  const developer = developers.find((dev) => {
    return dev.id === Number(id)
  })

  if (!developer) {
    return <h1>Developer not found</h1>
  }

  return (
    <div className="contact-page">

      <div className="contact-hero-bg"></div>

      <div className="contact-box">

        <img src={developer.avatar} alt={developer.name} className="contact-avatar" />
        <h1 className="contact-name">{developer.name}</h1>
        <p className="contact-bio">{developer.bio}</p>

        <div className="contact-links">

          <a href={developer.contact.github} target="_blank" className="contact-btn github">
            <span>🐙</span> GitHub
          </a>

          <a href={developer.contact.whatsapp} target="_blank" className="contact-btn whatsapp">
            <span>💬</span> WhatsApp
          </a>

          <a href={developer.contact.instagram} target="_blank" className="contact-btn instagram">
            <span>📸</span> Instagram
          </a>

          <a href={developer.contact.phone} className="contact-btn phone">
            <span>📞</span> Call Me
          </a>

        </div>

        <Link to={-1} className="back-btn">← Back</Link>

      </div>

    </div>
  )
}

export default ContactPage