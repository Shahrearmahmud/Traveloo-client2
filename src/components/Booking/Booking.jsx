import React, { useContext, useState } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { BASE_URL } from "../../utils/config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setBooking((prev) => ({
      ...prev,
      [id]: id === "guestSize" ? Math.min(Math.max(1, value), 40) : value,
    }));
  };

  const today = new Date().toISOString().split("T")[0];

  const handleClick = async (e) => {
    e.preventDefault();

    const selectedDate = booking.bookAt;

    if (selectedDate < today) {
      return alert("Please select a future date for booking.");
    }

    console.log(booking);
    navigate("/thankYou");
    try {
      if (!user) {
        return alert("Please sign in");
      }
      const res = await fetch(`${BASE_URL}/booking`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });
      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(booking.guestSize) + Number(serviceFee);

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i className="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating}({reviews?.length})
        </span>
      </div>

      <div className="booking__form">
        <h5> Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
              min={today}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              value={booking.guestSize}
              onChange={handleChange}
              min="1"
              max="40"
            />
          </FormGroup>
        </Form>
      </div>

      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price}
              <i className="ri-close-line">1 person</i>
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service charge</h5>
            <span>{serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>

        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
