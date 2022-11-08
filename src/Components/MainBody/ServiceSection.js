import React from 'react';
import ServiceCard from '../Services/ServiceCard';

const ServiceSection = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-3xl text-center font-bold text-gray-700'>What I'm Offer...</h1>
            <h3 className='text-xl text-center text-gray-700'>I am offering flowing services and consulting.</h3>
            <ServiceCard></ServiceCard>
        </div>
    );
};

export default ServiceSection;