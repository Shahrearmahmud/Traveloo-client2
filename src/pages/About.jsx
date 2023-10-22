import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/about.css";

const About = () => {
  return (
    <section className="about">
      <Container>
        <Row>
          <Col lg="6">
            <h2 className="about__title">About Us</h2>
            <p className="about__description">
              Welcome to our website! We are a passionate team dedicated to
              providing high-quality services and solutions to our clients.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Col>
          <Col lg="6">
            <div className="about__image">
              <img src="https://i.ibb.co/T4vwKs8/about.png" alt="About Us" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
