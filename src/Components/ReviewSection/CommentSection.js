import React from 'react';
import { Get } from "react-axios";
import CommentCard from './CommentCard';

const CommentSection = ({id}) => {
    return (
      <div>
        <h1 className="text-2xl font-semibold mb-5">
          Our Client's Comment for this service
        </h1>
        <div>
          <Get url={`http://localhost:5000/review/${id}`}>
            {(error, response, isLoading, makeRequest, axios) => {
              console.log(response?.data);
              return (
                <div className="">
                  {response?.data.map((data) => (
                    <CommentCard
                      key={data._id}
                      commentData={data}
                    ></CommentCard>
                  ))}
                </div>
              );
            }}
          </Get>
        </div>
      </div>
    );
};

export default CommentSection;