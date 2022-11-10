import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../Services/ServiceCard";

const ServiceSection = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://mind-talking-server-3shaan.vercel.app/homeservice")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="mt-20 w-11/12 mx-auto">
      <h1 className="text-3xl text-center font-bold text-gray-700">
        What I'm Offer...
      </h1>
      <h3 className="text-xl text-center text-gray-700">
        I am offering flowing services and consulting.
      </h3>
      {/* <ServiceCard></ServiceCard> */}
      <div className="mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {services.map((data) => (
            <ServiceCard key={data._id} ServiceData={data}></ServiceCard>
          ))}
        </div>
      </div>
      <div className="flex justify-center mb-5 mt-10">
        <Link to={"/services"}>
          <Button className=" transform transition duration-500 hover:scale-110 bg-green-600 hover:bg-green-700">
            See More Services
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceSection;
