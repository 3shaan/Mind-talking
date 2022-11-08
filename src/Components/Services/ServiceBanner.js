import React from 'react';

const ServiceBanner = () => {
    return (
      <div>
        <div>
          <div
            class="relative h-96 w-full flex items-center justify-start text-left bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/appointment-psychologist_144627-39507.jpg?w=1060&t=st=1667914472~exp=1667915072~hmac=b04d4c5322e03ba83525d3e0ebde65d533c962b05b3958fd85d5bcf140cbaabe)",
            }}
          >
            <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

            <main class="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  absolute z-10">
              <h1 className="text-center text-white text-3xl my-3 font-bold">
                --- Our Services ---
              </h1>
              <h1 className="text-white text-4xl text-center font-semibold font-sans">
                Complete set of programs <br /> designed to help people having{" "}
                <br /> mental issues.
              </h1>
            </main>
          </div>
        </div>
      </div>
    );
};

export default ServiceBanner;