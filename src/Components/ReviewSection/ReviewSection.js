import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Slider from "react-slick";

const ReviewSection = () => {
  const [review, setReview] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    fetch("https://mind-talking-server-3shaan.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReview(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="my-10">
        <h1 className="text-3xl text-center font-semibold text-gray-700">
          Happy client About me
        </h1>
        <p className="text-center text-xl text-green-600 font-semibold mt-3">
          testimonial
        </p>
      </div>
      <div>
        <Slider {...settings} className="w-11/12 mx-auto mb-20">
          {review.map((data) => (
            <ReviewCard key={data._id} reviewData={data}></ReviewCard>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewSection;
