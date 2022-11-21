import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Error from "../Loader/Error";
import Loading from "../Loader/Loading";
import BlogsModal from "./BlogsModal";

const Blogs = () => {
  const [open, setOpen] = useState(false);
  const [singleBlog, setSingleBlog] = useState([]);

  const {
    data: blogs = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch("https://mind-talking-server.vercel.app/blogs");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    console.log(error.message);
    return <Error isError={error}></Error>;
  }
  const handleModal = (data) => {
    setOpen(true);
    setSingleBlog(data);
  };
  return (
    <div>
      <h1 className="text-3xl text-gray-600 font-semibold my-10 text-center">
        Here are some Blogs Article written by Me
      </h1>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto lg:w-9/12 gap-10">
          {blogs?.map((blog) => {
            return (
              <div
                key={blog?._id}
                className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <div>
                  <img
                    className="rounded-t-lg h-52 w-96"
                    src={blog?.img}
                    alt=""
                  />
                </div>
                <div className="p-5">
                  <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {blog?.name}
                    </h5>
                  </div>
                  <p className="text-sm my-3">{blog?.time.slice(0, 10)}</p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {blog?.ans?.slice(0, 100)}...
                  </p>
                  <button
                    onClick={() => handleModal(blog)}
                    type="button"
                    className="flex gap-3 items-center text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Read More <BsArrowRight className="text-lg"></BsArrowRight>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <BlogsModal
        open={open}
        setOpen={setOpen}
        singleBlog={singleBlog}
      ></BlogsModal>
    </div>
  );
};

export default Blogs;
