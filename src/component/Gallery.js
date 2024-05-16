import React from "react";
import p1 from "../photos/img1.jpg";
import p2 from "../photos/img2.jpg";
import p3 from "../photos/img3.jpg";
import p4 from "../photos/img4.jpg";
import p5 from "../photos/img5.jpg";
import p6 from "../photos/img6.jpg";
import p7 from "../photos/img7.jpg";
import p8 from "../photos/img8.jpg";
import p9 from "../photos/img9.jpg";
import p10 from "../photos/img10.jpg";
import "../styles/Gallery.css";
import Header from "./Header";
import Footer from "./Footer";

const Gallery = () => {
  return (
    <>
      <Header />
      <section className="gallery" id="gallery">
        <h1 className="heading">
          Our <span>Gallery</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src={p1} alt="" />
            <h3 className="title">Photos and Events</h3>
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share"></a>
              <a href="#" className="fas fa-save"></a>
            </div>
          </div>

          <div className="box">
            <img src={p2} alt="" />
            <h3 className="title">Photos and Events</h3>
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share"></a>
              <a href="#" className="fas fa-save"></a>
            </div>
          </div>

          <div className="box">
            <img src={p3} alt="" />
            <h3 className="title">Photos and Events</h3>
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share"></a>
              <a href="#" className="fas fa-save"></a>
            </div>
          </div>

          <div className="box">
            <img src={p4} alt="" />
            <h3 className="title">Photos and Events</h3>
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share"></a>
              <a href="#" className="fas fa-save"></a>
            </div>
          </div>

          <div className="box">
            <img src={p5} alt="" />
            <h3 className="title">Photos and Events</h3>
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share"></a>
              <a href="#" className="fas fa-save"></a>
            </div>
          </div>

          <div className="box">
            <img src={p6} alt="" />
            <h3 className="title">Photos and Events</h3>
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share"></a>
              <a href="#" className="fas fa-save"></a>
            </div>
          </div>

          <div className="box">
            <img src={p7} alt="" />
            <h3 className="title">Photos and Events</h3>
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share"></a>
              <a href="#" className="fas fa-save"></a>
            </div>
          </div>

          <div className="box">
            <img src={p8} alt="" />
            <h3 className="title">Photos and Events</h3>
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share"></a>
              <a href="#" className="fas fa-save"></a>
            </div>
          </div>

          <div className="box">
            <img src={p9} alt="" />
            <h3 className="title">Photos and Events</h3>
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share"></a>
              <a href="#" className="fas fa-save"></a>
            </div>
          </div>

          <div className="box">
            <img src={p10} alt="" />
            <h3 className="title">Photos and Events</h3>
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share"></a>
              <a href="#" className="fas fa-save"></a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
