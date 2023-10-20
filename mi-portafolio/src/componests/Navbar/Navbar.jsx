import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Mi Portafolio</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/portfolio">Portafolio</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <Link to="/skills">Habilidades</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;