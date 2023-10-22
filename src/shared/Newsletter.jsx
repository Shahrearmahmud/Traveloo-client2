import React from "react";
import "./newsLetter.css";
import { Container, Row, Col } from "reactstrap";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__img">
              <img src="https://i.ibb.co/zbyXy6C/male-tourist2.png" alt="" />
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>
                Your passport to exclusive travel insights - Subscribe now!
              </h2>
              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>

              <p>
                Travel subscription services offer a gateway to an exciting
                world of exploration and adventure. By subscribing to these
                services, travelers gain access to a wealth of valuable
                resources, including expert travel advice, destination
                recommendations, exclusive deals, and personalized itineraries.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
