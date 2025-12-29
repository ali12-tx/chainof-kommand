import "./header.css";
import "./ResponsiveHeader.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.svg";


export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false); // Close menu after navigation
  };

  const isActive = (path) => {
    const active = location.pathname === path;
    console.log(`Checking ${path}: Current pathname is ${location.pathname}, Active: ${active}`);
    return active;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header>
      <div className="wraper">
        <div className="logo" onClick={() => handleNavigation("/")}>
          <img src={logo} alt="logo" className="m-" style={{ cursor: "pointer" }} />
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            <li>
              <button
                className={`mainBtn ${isActive("/terms") ? "active" : ""}`}
                type="button"
                onClick={() => handleNavigation("/terms")}
              >
                Terms
              </button>
            </li>
            <li>
              <button
                className={`secondaryBtn ${isActive("/privacy-policy") ? "active" : ""}`}
                type="button"
                onClick={() => handleNavigation("/privacy-policy")}
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                className={`secondaryBtn ${isActive("/contact") ? "active" : ""}`}
                type="button"
                onClick={() => handleNavigation("/contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <button
                className={`mainBtn ${isActive("/terms") ? "active" : ""}`}
                type="button"
                onClick={() => handleNavigation("/terms")}
              >
                Terms
              </button>
            </li>
            <li>
              <button
                className={`secondaryBtn ${isActive("/privacy-policy") ? "active" : ""}`}
                type="button"
                onClick={() => handleNavigation("/privacy-policy")}
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                className={`secondaryBtn ${isActive("/contact") ? "active" : ""}`}
                type="button"
                onClick={() => handleNavigation("/contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};