import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = () => {
    return (
      <div>
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  transform transition duration-500 hover:scale-110 group">
          
            <img
              class="rounded-t-lg"
              src="https://img.freepik.com/free-photo/marriage-counselor-taking-notes-while-having-meeting-with-couple-office_637285-11122.jpg?w=1060&t=st=1667886888~exp=1667887488~hmac=e9883142ca9c191eeb62acb2a4d5be4eb92140474ccd8f94c582668f00fb8a6f"
              alt=""
            />
         
          <div class="p-5">
            <a href=".">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-green-600 transition duration-800">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div>
              <p className="text-green-500 font-semibold hover:">Read More </p>
              <FaArrowRight/>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;