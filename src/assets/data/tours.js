import tourImg01 from "../images/t-1.jpg";
import tourImg02 from "../images/t-2.jpg";
import tourImg03 from "../images/t-3.jpg";
import tourImg04 from "../images/t-4.jpg";
import tourImg05 from "../images/t-5.jpg";
import tourImg06 from "../images/t-6.jpg";
import tourImg07 from "../images/t-7.jpg";
import tourImg08 from "../images/t-8.jpg";

const tours = [

  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    address: "Bali",
    distance: 400,
    price: 188,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 4.9,
      },
      {
        name: "jhon doe",
        rating: 4.8,
      },
      {
        name: "jhon doe",
        rating: 4.7,
      },
      {
        name: "jhon doe",
        rating: 4.9,
      },
    ],
    avgRating: 4.9,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    address: "Cherry Blossom",
    price: 120,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [

    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "India, Agra",
    city: "India",
    address: "Agra",
    distance: 500,
    price: 59,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.8,
      },
    ],
    avgRating: 4.4,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "03",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    address: "Holmen",
    price: 89,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },

  {
    id: "08",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    address: "Nusa Pendia Bali",
    price: 350,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [

    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "05",
    title: "London Eye",
    city: "London",
    distance: 500,
    address: "London Eye",
    price: 699,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },

  {
    id: "07",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    address: "Beautiful Sunrise",
    price: 250,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },


  {
    id: "08",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    address: "Westminister Bridge",
    price: 299,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.7,
      },
    ],
    avgRating: 4.7,
    photo: tourImg01,
    featured: true,
  },
];

export default tours;
