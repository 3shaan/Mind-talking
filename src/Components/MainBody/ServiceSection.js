import { Button } from 'flowbite-react';
import React from 'react';
import { Get } from 'react-axios';
import ServiceCard from '../Services/ServiceCard';

const ServiceSection = () => {
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
          <Get url="http://localhost:5000/homeservice">
            {(error, response, isLoading, makeRequest, axios) => {
              console.log(response?.data);
              return (
                <div className="grid grid-cols-3">
                  {response?.data.map((data) => (
                    <ServiceCard
                      key={data._id}
                      ServiceData={data}
                    ></ServiceCard>
                  ))}
                </div>
              );
            }}
          </Get>
        </div>
        <div className='flex justify-center my-5'>
          <Button className=" transform transition duration-500 hover:scale-110 bg-green-600 hover:bg-green-700">
            See More Services
          </Button>
        </div>
      </div>
    );
};

export default ServiceSection;