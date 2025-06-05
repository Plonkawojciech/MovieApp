import { Link } from "react-router-dom"
import '../css/Navbar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">Movie App</Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/favourites" className="nav-link">Favourites</Link>
          <Link to="/myAccount" className="nav-link">My Account</Link>
          
        </div>
      </div>
    </nav>
  )
}

export default NavBar
