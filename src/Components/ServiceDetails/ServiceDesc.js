import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

const ServiceDesc = ({ service }) => {
    const { title, des, img, benifits } = service;
  return (
    <div className="mt-10 w-11/12 mx-auto">
      <h1 className="text-3xl text-center">{title}</h1>
      <div>
        <h1 className="text-2xl my-5 font-semibold">{title} OverView </h1>
        <h1 className="text-xl text-gray-700 my-5 ml-2">{des}</h1>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h1 className="text-2xl my-5 font-semibold">
          What benefit's will you get from this Counciling?
        </h1>
        <ul className="grid grid-cols-2 gap-5 mb-10 border p-5 rounded-lg border-gray-300">
          {benifits.map((benifit) => {
            return (
              <div className="flex items-center gap-3 text-xl">
                <FaCheckCircle className="text-green-600"></FaCheckCircle>
                <li className="text-gray-800">{benifit}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDesc;