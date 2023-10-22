import React from "react";
import "./commonSection.css";
import { Container, Row, Col } from "reactstrap";

const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <Container>
        <Row>
          <Col lg="12">
            <h1>
              {title} <i class="ri-flight-takeoff-line"></i>
            </h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CommonSection;
