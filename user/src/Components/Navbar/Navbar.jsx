import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from "../../assets/bread-black.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu visibility
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img className="logo" src={logo} alt="Bread Logo" />
        </a>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i> {/* Custom hamburger icon */}
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className={`navbar-nav ms-auto align-items-center ${isMenuOpen ? 'bg-custom' : ''}`}>
            {location.pathname === '/donation' ? (
              <li className="nav-item">
                <Link className="btn btn-success rounded-pill px-3 py-1" to="/" onClick={closeMenu}>Home</Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <a href="/" className="nav-link" onClick={closeMenu}>About</a>
                </li>
                <li className="nav-item">
                  <a href="/careers" className="nav-link" onClick={closeMenu}>Careers</a>
                </li>
                <li className="nav-item">
                  <a href="/bfg" className="nav-link" onClick={closeMenu}>Bread for Good</a>
                </li>
                <li className="nav-item">
                  <Link 
                    className={`nav-link ${isMenuOpen ? 'btn btn-outline-success' : 'btn btn-success rounded-pill px-3 py-1 text-white'}`} 
                    to="/donation" 
                    onClick={closeMenu}
                  >
                    Donate here
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;