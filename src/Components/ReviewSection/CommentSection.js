import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";

const CommentSection = ({ id, load }) => {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    fetch(`https://mind-talking-server-3shaan.vercel.app/review/${id}`)
      .then((res) => res.json())
      .then((data) => setComment(data))
      .catch((err) => console.log(err));
  }, [id, load]);
  return (
    <div>
      {
        comment.length > 0 ? <div>
      <h1 className="text-2xl font-semibold mb-5">
        Our Client's Comment for this service
      </h1>
      <div className="">
        {comment.map((data) => (
          <CommentCard key={data._id} commentData={data}></CommentCard>
        ))}
      </div>
    </div> : <div>""</div>
      }
    </div>
  );
};

export default CommentSection;
