import React from "react";
import { Link } from "react-router-dom";

const Banner = ({img}) => {

  return (
    <div>
      <div
        className="relative h-[600px] w-full flex items-center justify-start text-left bg-cover bg-center"
        style={{
          backgroundImage: `url(${img?.img})`,
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

        <main className="px-10 lg:px-24 z-10">
          <div className="text-left">
            <h2
              className="text-white text-2xl lg:text-6xl font-semibold"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Descover the Secret of <br /> Living a Life with <br /> Passion !
            </h2>
            <div className="mt-5 sm:mt-8 sm:flex justify-start">
              <div>
                <p className="text-2xl text-white">Need Advice?</p>
              </div>
              <div className="lg:ml-10 mt-5 lg:mt-0">
                <Link to={'/appointments'} >
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Make an Appointment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Banner;
