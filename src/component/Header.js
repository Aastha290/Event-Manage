import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserType = localStorage.getItem("userType");
    setUserType(storedUserType);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    navigate("/");
  };

  return (
    <header className="header">
      <Link to="/home" className="logo">
        <span>Plan</span>Hub
      </Link>

      <nav className={`navbar ${isMobileMenuOpen ? "open" : ""}`}>
        {userType === "organizer" ? (
          <>
            <Link to="/organizer" onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link to="/" onClick={handleLogout}>
              LogOut
            </Link>
          </>
        ) : (
          <>
            <Link to="/home" onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link to="/about" onClick={toggleMobileMenu}>
              About
            </Link>
            <Link to="/gallery" onClick={toggleMobileMenu}>
              Gallery
            </Link>
            <Link to="/review" onClick={toggleMobileMenu}>
              Review
            </Link>
            <Link to="/contact" onClick={toggleMobileMenu}>
              Contact
            </Link>
            <Link to="/" onClick={handleLogout}>
              LogOut
            </Link>
          </>
        )}
      </nav>

      <div
        id="menu-bars"
        className={`fas fa-bars ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
      ></div>
    </header>
  );
};

export default Header;
