import { Card } from 'flowbite-react';
import React from 'react';
import Stars from "react-stars-display"

const CommentCard = ({ commentData }) => {
    console.log(commentData)
    const { name, img, timeSt, rating, comment } = commentData;
  return (
    <div>
      <Card className="shadow-lg lg:w-[800px] bg-gray-400 hover:bg-gray-400">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <img
              class="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src={img}
              alt="Bordered avatar"
            />
            <p className=" font-semibold">{name}</p>
            <p className="text-xs underline mt-1 cursor-pointer">
              {timeSt.slice(0, 10)}
            </p>
            <p className="text-xs underline mt-1 cursor-pointer">
              {timeSt.slice(11, 19)}
            </p>
          </div>
          <div>
            <Stars
              stars={rating}
              size={25} //optional
              spacing={2} //optional
              fill="#16A34A" //optional
            />
          </div>
        </div>
        <div className="ml-10">
          <p>{comment}</p>
          <div className="flex gap-10 mt-1">
            <p className="underline cursor-pointer"> Like</p>
            <p className="underline cursor-pointer">reply</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CommentCard;