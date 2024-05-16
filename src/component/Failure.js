import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Failure = () => {
  return (
    <>
      <Header />
      <div className="failure-container">
        <h2>Payment Failed</h2>
        <p>We encountered an issue while processing your payment. Please try again.</p>
        <Link to="/events" className="back-link">Go back to Events</Link>
      </div>
      <Footer />
    </>
  );
};

export default Failure;