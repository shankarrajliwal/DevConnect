import { useState } from 'react'
import { Link } from 'react-router-dom'
import developers from '../data/developers'
import './Developers.css'

function DevelopersPage() {

  const [filtered, setFiltered] = useState(developers)
  const [search, setSearch] = useState('')

  function handleSearch() {
    if (search === '') {
      setFiltered(developers)
      return
    }
    const result = developers.filter((dev) => {
      const nameMatch = dev.name.toLowerCase().includes(search.toLowerCase())
      const skillMatch = dev.skills.some((skill) => {
        return skill.toLowerCase().includes(search.toLowerCase())
      })
      return nameMatch || skillMatch
    })
    setFiltered(result)
  }

  function handleInput(e) {
    setSearch(e.target.value)
    if (e.target.value === '') {
      setFiltered(developers)
    }
  }

  return (
    <div className="dev-page">

      <div className="dev-hero">
        <h1 className="dev-heading">Meet Our <span className="highlight">Developers</span></h1>
        <p className="dev-subheading">Explore talented developers and their amazing projects</p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search here developers by their name or skills..."
            value={search}
            onChange={handleInput}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-btn">Search</button>
        </div>
      </div>

      <div className="dev-list">
        {filtered.map((dev) => {
          return (
            <div key={dev.id} className="dev-card">

              <img src={dev.avatar} alt={dev.name} className="dev-avatar" />
              <h2 className="dev-name">{dev.name}</h2>
              <p className="dev-bio">{dev.bio}</p>

              <div className="dev-skills">
                {dev.skills.map((skill) => {
                  return <span key={skill} className="skill-badge">{skill}</span>
                })}
              </div>

              <Link to={`/profile/${dev.id}`} className="view-btn">View Profile</Link>

            </div>
          )
        })}
      </div>

    </div>
  )
}

export default DevelopersPage