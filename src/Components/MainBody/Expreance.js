import React from 'react';
import CountUp from "react-countup";

const Expreance = () => {
    return (
      <div>
        <section className="p-6 bg-gray-300 dark:bg-gray-800 dark:text-gray-200">
          <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">
                <CountUp end={50} suffix="+" />
              </p>
              <p className="text-sm sm:text-base">Clients</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">
                <CountUp end={89} suffix="K" />
              </p>
              <p className="text-sm sm:text-base">Followers on social media</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">
                <CountUp end={3} />
              </p>
              <p className="text-sm sm:text-base">Published books</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">
                <CountUp end={8} />
              </p>
              <p className="text-sm sm:text-base">TED talks</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">
                <CountUp end={22} />
              </p>
              <p className="text-sm sm:text-base">Years of experience</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">
                <CountUp end={10} suffix="+" />
              </p>
              <p className="text-sm sm:text-base">Office</p>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Expreance;