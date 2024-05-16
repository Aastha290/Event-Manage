import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Gallery from "./component/Gallery";
import Review from "./component/Review";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Book from "./component/Book";
import Organizer from "./component/Organizer";
import Attendees from "./component/Attendees";
import Payment from "./component/Payment";
import Success from "./component/Success";
import Failure from "./component/Failure";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/organizer" element={<Organizer />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book/:eventId" element={<Book />} />
          <Route path="/attendees/:eventId" element={<Attendees />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
