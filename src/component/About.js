import React from "react";
import "../styles/About.css";
import p1 from "../photos/img1.jpg";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Header />
      <section className="about" id="about">
        <h1 className="heading">
          <span>About </span>Us
        </h1>
        <div className="row">
          <div className="image">
            <img src={p1} alt="" />
          </div>
          <div className="content">
            <h3>"Where Every Detail Counts: Our Commitment to Excellence"</h3>
            <p>
              Welcome to PlanHub, where we understand that even the smallest
              details can make a profound impact on the success of an event. At
              PlanHub, our unwavering dedication to excellence is the
              cornerstone of our ethos. We firmly believe that every event,
              regardless of its scale, deserves meticulous attention to detail.
              From the initial brainstorming sessions to the final execution,
              our team meticulously plans and orchestrates every aspect to
              ensure a flawless experience for our clients and their guests.
              With a blend of creativity, professionalism, and a keen eye for
              detail, we strive to surpass expectations with each project we
              undertake. Our commitment to innovation and perfection drives us
              to deliver nothing short of exceptional results.
            </p>
            <Link
              to="/contact"
              style={{
                backgroundColor: "blue",
                padding: "10px",
                color: "white",
                borderRadius: "5px",
                textDecoration: "none",
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
