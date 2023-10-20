import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/av-1.jpeg";
import ava02 from "../../assets/images/av-2.jpg";
import ava03 from "../../assets/images/av-3.jpeg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slideTOShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesTOShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 572,
        settings: {
          slidesTOShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          "I can't thank this website enough for making my travel experiences
          hassle-free and memorable. The user-friendly interface allowed me to
          quickly find and book my dream destinations, and their customer
          service was exceptional. Every trip I've taken using this website has
          been a smooth and enjoyable adventure. I highly recommend it to anyone
          looking to plan their next getaway.""
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />

          <div>
            <h6 className="mb-0 mt-3">Tom Cruise</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          "I've been using this booking website for years, and it's become my
          go-to platform for all my travel plans. The extensive selection of
          accommodations and activities, along with competitive prices, never
          cease to amaze me. It's like having a personal travel concierge at my
          fingertips. Thank you for making my vacations unforgettable!"
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />

          <div>
            <h6 className="mb-0 mt-3">Dwayne Johnson</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3 mt-3">
        <p>
          "I stumbled upon this booking website while planning a last-minute
          trip, and it was a game-changer. The site's flexibility in finding
          last-minute deals and the real-time availability updates saved me time
          and money. I couldn't believe how easy it was to secure a fantastic
          vacation on short notice. I'm now a loyal customer, and I'll continue
          to use this website for all my future trips."
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Gal Gadot</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
