import React from "react";
import { FaAngleRight, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceDetailsBanner = ({ service }) => {
  const { title, banner_img, banner_title } = service;

  return (
    <div>
      <div>
        <div
          className="relative h-96 w-full flex items-center justify-start text-left bg-cover bg-center"
          style={{
            backgroundImage: `url(${banner_img})`,
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

          <main className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  absolute z-10">
            <h1 className="text-center text-white text-3xl my-3 font-bold">
              {title}
            </h1>
            <h1 className="text-white text-center text-lg italic">
              {banner_title}
            </h1>

            {/* Breadcrumb */}

            <div className="text-white">
              <nav
                class="flex px-5 py-3 text-white border-gray-200 rounded-lg bg-gray-0 dark:bg-gray-800 dark:border-gray-700 justify-center mt-5 "
                aria-label="Breadcrumb"
              >
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                  <li class="inline-flex items-center">
                    <Link
                      to={"/"}
                      class="inline-flex items-center text-lg font-medium text-white hover:text-gray-900 dark:text-gray-400 dark:hover:text-white gap-2"
                    >
                      <FaHome></FaHome>
                      Home
                    </Link>
                  </li>
                  <li>
                    <div class="flex items-center text-xl">
                      <FaAngleRight></FaAngleRight>
                      <Link
                        to={"/services"}
                        class="ml-1 font-medium text-white hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white text-lg"
                      > 
                        Services
                      </Link>
                    </div>
                  </li>
                  <li aria-current="page">
                    <div class="flex items-center text-xl">
                      <FaAngleRight></FaAngleRight>
                      <span class="ml-1 font-medium text-white text-lg md:ml-2 dark:text-gray-400 ">
                        {title}
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsBanner;
