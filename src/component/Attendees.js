import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/AttendeesStyle.css"; // Import CSS file for styling
import Header from "./Header";
import Footer from "./Footer";

const Attendees = () => {
  const { eventId } = useParams();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sendingEmails, setSendingEmails] = useState({}); // State for tracking sending emails
  const [emailError, setEmailError] = useState(""); // State for email sending error

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `http://localhost:5000/bookings/event/${eventId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch bookings");
        }
        const data = await response.json();
        setBookings(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setLoading(false);
      }
    };

    fetchBookings();
  }, [eventId]);

  const sendEmail = async (email) => {
    setSendingEmails({ ...sendingEmails, [email]: true }); // Set sending email status for the specific email
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          email,
          eventId, 
        })
      });
      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      const data = await response.json();
      alert("Email sent successfully!");
      console.log("Email sent successfully:", data);
    } catch (error) {
      console.error("Error sending email:", error);
      setEmailError("Failed to send email."); // Set email error message
    } finally {
      setSendingEmails({ ...sendingEmails, [email]: false }); // Reset sending email status for the specific email
    }
  };

  return (
    <>
      <Header />
      <div className="attendees-container">
        <h2>Attendees for Event</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="attendees-list">
            {bookings.map((booking) => (
              <li key={booking._id} className="attendees-item">
                <p>Name: {booking.userId.username}</p>
                <p>Email: {booking.userId.email}</p>
                <p>Price Paid: ${booking.pricePaid}</p>
                <button
                  className="send-email-button"
                  onClick={() => sendEmail(booking.userId.email)}
                  disabled={sendingEmails[booking.userId.email]} // Disable button if email is being sent
                >
                  {sendingEmails[booking.userId.email] ? "Sending..." : "Send Email"}
                </button>
              </li>
            ))}
          </ul>
        )}
        {emailError && <p className="error-message">{emailError}</p>} {/* Display email error message */}
      </div>
      <Footer />
    </>
  );
};

export default Attendees;