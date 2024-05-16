import React from "react";

import "../styles/Review.css";
import p1 from "../photos/g1.jpg";
import p2 from "../photos/g2.jpg";
import p3 from "../photos/g3.jpg";
import p4 from "../photos/g4.jpg";
import Header from "./Header";
import Footer from "./Footer";

const Review = () => {
  return (
    <>
      <Header />
      <section className="review" id="review">
        <h1 className="heading">
          Customer <span>Review</span>
        </h1>
        <div className="review-slider swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <i className="fas fa-quote-right"></i>
              <div className="user">
                <img src={p1} alt="" />
                <div className="user-info">
                  <h3>Emily</h3>
                  <span>Happy Clients</span>
                </div>
              </div>
              <p>
                I couldn't have asked for a better birthday celebration thanks
                to PlanHub! From the moment I contacted them, their team was
                incredibly attentive to every detail. The venue selection was
                perfect, the decorations were exactly what I envisioned, and the
                entertainment kept everyone smiling all night. It truly was a
                memorable experience, and I highly recommend PlanHub for any
                special occasion!
              </p>
            </div>

            <div class="swiper-slide box">
              <i class="fas fa-quote-right"></i>
              <div class="user">
                <img src={p2} alt="" />
                <div class="user-info">
                  <h3>David</h3>
                  <span>Happy Clients</span>
                </div>
              </div>
              <p>
                My wedding day was nothing short of magical, and I owe it all to
                the amazing team at PlanHub. They took care of everything, from
                coordinating with vendors to ensuring the venue was set up
                beautifully. Their attention to detail and professionalism made
                the entire planning process stress-free. I couldn't be happier
                with how everything turned out, and I'm so grateful to PlanHub
                for making our special day perfect.
              </p>
            </div>

            <div class="swiper-slide box">
              <i class="fas fa-quote-right"></i>
              <div class="user">
                <img src={p3} alt="" />
                <div class="user-info">
                  <h3>Sarah</h3>
                  <span>Happy Clients</span>
                </div>
              </div>
              <p>
                PlanHub exceeded all expectations for our company's annual
                party. They worked closely with us to understand our vision and
                delivered an event that wowed all our employees. From the
                elegant venue to the delicious catering, every aspect was
                flawlessly executed. The PlanHub team's dedication and
                creativity truly made our event a success, and I look forward to
                working with them again in the future.
              </p>
            </div>

            <div class="swiper-slide box">
              <i class="fas fa-quote-right"></i>
              <div class="user">
                <img src={p4} alt="" />
                <div class="user-info">
                  <h3>Michael</h3>
                  <span>Happy Clients</span>
                </div>
              </div>
              <p>
                I recently hosted a holiday party with the help of PlanHub, and
                it was an absolute hit! Their team went above and beyond to
                create a festive atmosphere that had everyone in high spirits.
                The food and drinks were exceptional, and the entertainment kept
                guests entertained throughout the evening. It was a stress-free
                experience from start to finish, and I can't thank PlanHub
                enough for making our holiday celebration one to remember.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Review;
