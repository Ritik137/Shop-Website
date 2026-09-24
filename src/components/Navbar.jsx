import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar-wrap">
      <div className="container navbar">
        <Link to="/" className="brand">
          <span className="brand-mark">R</span>

          <span>
            <strong>RAJSYA</strong>
            <small>ALUMINIUM & FURNITURE</small>
          </span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <a href="tel:+919334497202" className="top-phone">
          <span>☎</span>

          <div>
            <small>Call Now</small>
            <strong>93344 97202</strong>
          </div>
        </a>
      </div>
    </header>
  );
}

export default Navbar;