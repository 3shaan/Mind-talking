import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ ServiceData }) => {
  const { _id, img, title, price, des } = ServiceData;
  return (
    <Link to={`/services/${_id}`}>
      <div className="max-w-sm min-h-[480px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 group overflow-hidden transform transition hover:scale-y-110 duration-500">
        <img
          className="w-96 h-64 rounded-t-lg transform transition duration-500 group-hover:scale-110 "
          src={img}
          alt=""
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-green-600 transition duration-800 ease-in-out">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {des.split("").splice(0, 100)}...
          </p>
          <div className="my-3">
            <p className="text-green-500 font-semibold hover:">
              Price :${price}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-green-500 font-semibold hover:">Read More </p>
            <FaArrowRight className="text-xl text-green-600"></FaArrowRight>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
