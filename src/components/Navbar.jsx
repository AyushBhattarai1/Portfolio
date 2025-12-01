import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">◼ BOXY ◼</h2>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''}>
              GALLERY
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
