import React, { useState } from "react";
import "../styles/Contact.css";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    destination: "",
    date: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Header />
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>Contact</span> Us
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-label="Your Name"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-label="Your Email"
            />
          </div>
          <div className="inputBox">
            <input
              type="tel"
              name="number"
              placeholder="Your Number"
              value={formData.number}
              onChange={handleChange}
              required
              aria-label="Your Number"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              aria-label="Subject"
            />
          </div>
          <div className="inputBox">
            <input
              type="text"
              name="destination"
              placeholder="Destination"
              value={formData.destination}
              onChange={handleChange}
              required
              aria-label="Destination"
            />
            <input
              type="date"
              name="date"
              placeholder="Select Date"
              value={formData.date}
              onChange={handleChange}
              required
              aria-label="Select Date"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            aria-label="Your Message"
            rows="10"
          ></textarea>
          <button type="submit" className="btn">Submit</button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
