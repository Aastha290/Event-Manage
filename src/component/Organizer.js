import React, { useState, useEffect } from "react";
import "../styles/EventOrganizer.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const EventOrganizer = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    price: { low: "", mid: "", high: "" },
  });
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [eventIdToUpdate, setEventIdToUpdate] = useState(null);
  const API_ENDPOINT = "http://localhost:5000/events";

  useEffect(() => {
    fetchEvents();
  }, []);
  
  const fetchEvents = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(API_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("price.")) {
      const priceKey = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        price: {
          ...prevData.price,
          [priceKey]: value,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const requestOptions = {
        method: isUpdateMode ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      };
      const url = isUpdateMode ? `${API_ENDPOINT}/${eventIdToUpdate}` : API_ENDPOINT;
      await fetch(url, requestOptions);
      
      resetForm();
      fetchEvents();
      alert("Event has been successfully " + (isUpdateMode ? "updated" : "added"));
    } catch (error) {
      console.error("Error adding/updating event:", error);
      alert("Error adding/updating event. Please try again.");
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      price: { low: "", mid: "", high: "" },
    });
    setIsUpdateMode(false);
    setEventIdToUpdate(null);
  };

  const handleUpdateClick = (event) => {
    setFormData(event);
    setIsUpdateMode(true);
    setEventIdToUpdate(event._id);
  };

  const deleteEvent = async (eventId) => {
    try {
      const token = localStorage.getItem("token");
      await fetch(`${API_ENDPOINT}/${eventId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchEvents();
      alert("Event has been successfully deleted");
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("Error deleting event. Please try again.");
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={handleSubmit} className="event-form">
          <h2>{isUpdateMode ? "Update Event" : "Add Event"}</h2>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title"
            required
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            placeholder="Date"
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            placeholder="Time"
            required
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Location"
            required
          />
          <input
            type="number"
            name="price.low"
            value={formData.price.low}
            onChange={handleInputChange}
            placeholder="Low Price"
            required
          />
          <input
            type="number"
            name="price.mid"
            value={formData.price.mid}
            onChange={handleInputChange}
            placeholder="Mid Price"
            required
          />
          <input
            type="number"
            name="price.high"
            value={formData.price.high}
            onChange={handleInputChange}
            placeholder="High Price"
            required
          />
          <button type="submit">
            {isUpdateMode ? "Update Event" : "Add Event"}
          </button>
        </form>

        <div className="event-list">
          {events.map((event) => (
            <div key={event._id} className="event-item">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
              <p>Location: {event.location}</p>
              <p>
                Price: Low: {event.price.low}, Mid: {event.price.mid}, High:{" "}
                {event.price.high}
              </p>
              <div className="button-group">
                <button onClick={() => deleteEvent(event._id)}>Delete</button>
                <button onClick={() => handleUpdateClick(event)}>Update</button>
                <Link to={`/attendees/${event._id}`}>Show Attendees</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventOrganizer;