import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

const serviceData = [
  {
    imgUrl: "https://i.ibb.co/wN2sVpf/weather.png",
    title: "Calculate Weather",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptate.",
  },
  {
    imgUrl: "https://i.ibb.co/YBXQwCG/guide.png",
    title: "Best Tour Guide",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptate.",
  },
  {
    imgUrl: "https://i.ibb.co/HCyBRyT/customization.png",
    title: "customization",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptate.",
  },
];
const ServiceList = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
