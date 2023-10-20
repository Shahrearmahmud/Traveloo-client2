import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/1mg2.jpg";
import heroImg02 from "../assets/images/im4.jpg";
import heroVideo from "../assets/images/video (1080p).mp4";
import worldImg from "../assets/images/logo2.png";
import experienceImg from "../assets/images/experience-2.png";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/*======== Hero section start ==========*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <img src={worldImg} alt="" />
                  <Subtitle subtitle={" Get ready, get set, and then go.."} />
                </div>
                <h1>
                  "Travel far, capture the moments, and create lasting
                  <span className="highlight"> memories..."</span>
                </h1>
                <p>
                  Planning before traveling is a crucial step that helps ensure
                  a smooth and enjoyable journey. It involves researching your
                  destination, creating an itinerary, and making necessary
                  arrangements such as booking accommodation and transportation.
                  In essence, planning before traveling is the foundation for a
                  successful and memorable adventure.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-3">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      {/*======== Hero section end ==========*/}

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title"> We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/*======== Feature section start ==========*/}
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <Subtitle subtitle={"Explore"} />
            <h2 className="featured__tour-title">Our featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>

      {/*======== Feature section end ==========*/}
      {/*======== Experience section start ==========*/}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Excellence "} />

                <h2>
                  through experience, <br /> every step of the way
                </h2>

                <p>
                  Discover a booking website with years of industry experience.
                  Our seasoned team understands your needs and delivers seamless
                  reservations for your convenience. Trust in our expertise for
                  a hassle-free booking experience
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>20k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>8k+</span>
                  <h6>Regular Client</h6>
                </div>
                <div className="counter__box">
                  <span>10</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*======== Experience section end ==========*/}
      {/*======== Gallery section start ==========*/}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">Eyes in our tour gallery.</h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/*======== Gallery section end ==========*/}
      {/*======== Testimonial section start ==========*/}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">
                Join the chorus of voices that endorse our brand
              </h2>
            </Col>

            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/*======== Testimonial section end ==========*/}

      <Newsletter />
    </>
  );
};

export default Home;
