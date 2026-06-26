import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav">

      <div className="logo">
        Dev<span className="logo-span">Connect</span>
      </div>

      <div className="links">
        <Link to="/" className="link">Home</Link>
        <Link to="/developers" className="link">Developers</Link>
        <Link to="/saved" className="link">Saved</Link>
      </div>

    </nav>
  )
}

export default Navbar