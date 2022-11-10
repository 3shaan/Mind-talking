import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import ServiceDesc from './ServiceDesc';
import ServiceDetailsBanner from './ServiceDetailsBanner';
import MoreService from './MoreService';
import Review from './Review';
import { authContext } from '../Context/Context';
import { Link } from 'react-router-dom';
import CommentSection from '../ReviewSection/CommentSection';

const ServiceDetails = () => {
    const service = useLoaderData();
  const { _id, title, price } = service;
  const { user } = useContext(authContext);
    return (
      <div>
        <div>
          <ServiceDetailsBanner service={service}></ServiceDetailsBanner>
        </div>
        <div className="flex w-full">
          <div className="w-9/12 mx-auto p-4 border">
            <ServiceDesc service={service}></ServiceDesc>
          </div>
          <div className="w-3/12 mx-auto">
            <div>
              <div class="mt-10 mx-3 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
                <p class="mt-5 font-semibold text-gray-700 dark:text-gray-400">
                  Price :${price}
                </p>
                <button
                  type="button"
                  class="mt-5 w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Make An Appointment Now
                </button>
              </div>
            </div>
            <MoreService id={_id}></MoreService>
          </div>
        </div>
        {/* review  */}
        {user?.uid ? (
          <Review singleService={service}></Review>
        ) : (
          <div className="text-xl ml-16 mb-10 text-center font-semibold">
            Please
            <Link to={"/login"} className="underline text-green-600">
              log in
            </Link>
            to leave a review
          </div>
        )}
        {/* <Review></Review> */}
        <div className="w-11/12 mx-auto mb-2">
          <CommentSection id={_id}></CommentSection>
        </div>
      </div>
    );
};

export default ServiceDetails;