import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Success = () => {
  return (
    <>
      <Header />
      <div className="success-container">
        <h2>Payment Successful!</h2>
        <p>Thank you for your purchase. Your payment has been successfully processed.</p>
        <Link to="/events" className="back-link">Go back to Events</Link>
      </div>
      <Footer />
    </>
  );
};

export default Success;