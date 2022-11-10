import React, { useContext, useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router";
import { authContext } from "../Context/Context";
import MyReviewDelete from "./MyReviewDelete";
import MyReviewModal from "./MyReviewModal";

const MyReview = () => {
  const [reviews, setReview] = useState([]);
  const [isOpen, SetOpen] = useState(false);
  const [singleReview, setSingleReview] = useState([]);
  const [isDelete, SetDelete] = useState(false);
  const { user, logOut } = useContext(authContext);
  const [load, setLoad] = useState(false);
  const navigation = useNavigate();

  useEffect(() => {
    document.title = "My Review-Mind Talking";
    fetch(
      `https://mind-talking-server-3shaan.vercel.app/myreview/${user?.email}`,
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          navigation("/login");
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setReview(data);
      })
      .catch((err) => console.log(err));
  }, [user?.email, load, navigation, logOut]);

  //edit review
  const editModal = (review) => {
    setSingleReview(review);
    SetOpen(true);
  };

  //delete review
  const reviewDelete = (review) => {
    setSingleReview(review);
    SetDelete(true);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center text-gray-800 my-5">
        See all Your Review In one Place
      </h1>
      {reviews.length > 0 ? (
        <div>
          <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    <span class="">service</span>
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Comment
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Date
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Rating
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Action
                  </th>
                </tr>
              </thead>
              {reviews.map((review) => {
                const { service, comment, timeSt, rating } = review;
                return (
                  <tbody key={review._id}>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                      <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white text-2xl">
                        {service}
                      </td>
                      <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white w-96">
                        {comment}
                      </td>

                      <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        {timeSt.slice(0, 10)}, {timeSt.slice(11, 19)}
                      </td>
                      <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        {rating}
                      </td>
                      <td class="py-4 px-6 flex  gap-4">
                        <button onClick={() => editModal(review)}>
                          <AiFillEdit className="text-3xl text-green-600"></AiFillEdit>
                        </button>
                        <button onClick={() => reviewDelete(review)}>
                          <AiFillDelete className="text-3xl text-orange-700"></AiFillDelete>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
            <MyReviewModal
              singleReview={singleReview}
              open={isOpen}
              SetOpen={SetOpen}
              setLoad={setLoad}
              load={load}
            ></MyReviewModal>
            <MyReviewDelete
              SetDelete={SetDelete}
              isDelete={isDelete}
              singleReview={singleReview}
              setLoad={setLoad}
              load={load}
            ></MyReviewDelete>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl text-center mt-16 text-orange-600">
            You haven't review any Services.
          </h1>
        </div>
      )}
    </div>
  );
};

export default MyReview;
