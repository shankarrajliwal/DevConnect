import { Link } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
  return (
    <div className="home">

      <div className="home-bg-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      <div className="home-content">

        <div className="home-badge">👨‍💻 Developer Community</div>

        <h1 className="home-title">
          Welcome to <span className="highlight">DevConnect</span>
        </h1>

        <p className="home-tagline">
          A Family of Developers 🚀
        </p>

        <p className="home-desc">
          Discover talented developers, explore their amazing projects,
          and connect with the community. Whether you're a beginner or a pro
          — you belong here.
        </p>

        <div className="home-stats">
          <div className="stat">
            <h3>7+</h3>
            <p>Developers</p>
          </div>
          <div className="stat">
            <h3>14+</h3>
            <p>Projects</p>
          </div>
          <div className="stat">
            <h3>10+</h3>
            <p>Technologies</p>
          </div>
        </div>

        <div className="home-btns">
          <Link to="/developers" className="home-btn-primary">
            Meet Developers →
          </Link>
        </div>

      </div>

    </div>
  )
}

export default HomePage