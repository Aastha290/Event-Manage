import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";


const Footer = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  return (
    <footer className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Branches</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> Mumbai
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Bengaluru
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Pune
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Bhubaneswar
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Jajpur
          </p>
        </div>

        <div className="box">
          <h3>Quick Links</h3>
          <p>
            <i className="fas fa-arrow-right"></i> <Link to="/home" onClick={toggleMobileMenu}>Home</Link>
          </p>
          <p>
            <i className="fas fa-arrow-right"></i> <Link to="/home" onClick={toggleMobileMenu}>Service</Link>
          </p>
          <p>
            <i className="fas fa-arrow-right"></i> <Link to="/home" onClick={toggleMobileMenu}>About</Link>
          </p>
          <p>
            <i className="fas fa-arrow-right"></i> <Link to="/home" onClick={toggleMobileMenu}>Gallery</Link>
          </p>
          <p>
            <i className="fas fa-arrow-right"></i> <Link to="/home" onClick={toggleMobileMenu}>Price</Link>
          </p>
          <p>
            <i className="fas fa-arrow-right"></i> <Link to="/home" onClick={toggleMobileMenu}>Review</Link>
          </p>
          <p>
            <i className="fas fa-arrow-right"></i> <Link to="/home" onClick={toggleMobileMenu}>Contact</Link>
          </p>
        </div>

        <div className="box">
          <h3>Contact Info</h3>
          <p>
            <i className="fas fa-phone"></i> +123-456-789
          </p>
          <p>
            <i className="fas fa-phone"></i> +098-765-4321
          </p>
          <p>
            <i className="fas fa-envelope"></i> aastha@gmail.com
          </p>
          <p>
            <i className="fas fa-envelope"></i> mohanty@gmail.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> India - 755019{" "}
          </p>
        </div>

        <div className="box">
          <h3>Follow Us</h3>
          <p>
            <i className="fab fa-instagram"></i> Instagram
          </p>
          <p>
            <i className="fab fa-linkedin"></i> LinkedIn
          </p>
          <p>
            <i className="fab fa-twitter"></i> Twitter
          </p>
          <p>
            <i className="fab fa-whatsapp"></i> WhatsApp
          </p>
        </div>
      </div>

      <div className="credit">
        Created by <span>PlanHub</span> | All rights reserved!{" "}
      </div>
    </footer>
  );
};

export default Footer;
