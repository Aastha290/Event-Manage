import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import "../styles/Bookevent.css"; 
import Header from "./Header";
import Footer from "./Footer";

const Book = () => {
  const { eventId } = useParams();
  const navigate = useNavigate(); 
  const [event, setEvent] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token"); 

    fetch(`http://localhost:5000/events/${eventId}`, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch event details");
      }
      return response.json();
    })
    .then((data) => {
      setEvent(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching event details:", error);
      setLoading(false);
    });
  }, [eventId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); 

    fetch("http://localhost:5000/bookings/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, 
      },
      body: JSON.stringify({
        eventId,
        pricePaid: parseInt(selectedPrice),
      }),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to submit booking");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Booking submitted:", data);
      alert("Booking submitted successfully!");
      navigate("/payment", { state: { selectedPrice: selectedPrice, eventId: eventId } });
    })
    .catch((error) => {
      console.error("Error submitting booking:", error);
      alert("Error submitting booking. Please try again.");
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <>
      <Header />
      <div className="book-container">
        <h2 className="book-heading">Book Event</h2>
        <h3 className="event-title">{event.title}</h3>
        <p className="event-description">Description: {event.description}</p>
        <p className="event-date">Date: {event.date}</p>
        <p className="event-time">Time: {event.time}</p>
        <p className="event-location">Location: {event.location}</p>
        <form onSubmit={handleSubmit} className="booking-form">
          <label htmlFor="ticketPrice" className="form-label">
            Ticket Price:
          </label>
          <select
            id="ticketPrice"
            name="ticketPrice"
            className="form-input"
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
            required
          >
            <option value="">Select Price</option>
            <option value={event.price.low}>Low: ${event.price.low}</option>
            <option value={event.price.mid}>Medium: ${event.price.mid}</option>
            <option value={event.price.high}>High: ${event.price.high}</option>
          </select>
          <button type="submit" className="submit-button">
            Book Event
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Book;