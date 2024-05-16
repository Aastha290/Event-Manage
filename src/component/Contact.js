import React, { useState } from "react";
import "../styles/Contact.css";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, number, subject, destination, date, message }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Email sent successfully!");
        setName("");
        setEmail("");
        setNumber("");
        setSubject("");
        setDestination("");
        setDate("");
        setMessage("");
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the email.");
    }
  };

  return (
    <>
      <Header />
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>Contact</span> US
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="inputBox">
            <input
              type="number"
              placeholder="Your Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="inputBox">
            <input
              type="text"
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
            <input
              type="date"
              placeholder="Select Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            cols="30"
            rows="10"
            required
          ></textarea>
          <input type="submit" value="Submit" className="btn" />
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Contact;