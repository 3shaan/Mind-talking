import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const ReviewCard = ({ reviewData }) => {
  const { img, comment,age,service,rating,name,} = reviewData;
  return (
    <div>
      <div class="px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800  border w-[600px] gap-10 relative">
        <div class="flex items-center space-x-4 w-full">
          <img
            class="p-1 w-28 h-28 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 border"
            src={img}
            alt="Bordered avatar"
          />
          <div class="font-medium dark:text-white mb-14">
            <div className="text-xl text-green-500">{ name}</div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              {age} years old
            </div>
            <div class=" text-green-500 font-semibold absolute top-3 right-3">
              {service}
            </div>
            <div class=" text-green-500 font-semibold absolute top-9 right-3">
              Rate: {rating}
            </div>
          </div>
        </div>
        <div className="ml-28 mt-[-20px]">
          <div>
            <ImQuotesLeft className="text-2xl text-green-600"></ImQuotesLeft>
          </div>
          <div className="ml-9 text-gray-600">
           {comment}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
