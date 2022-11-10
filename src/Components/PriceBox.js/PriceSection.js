import React from 'react';
import { BsPatchCheck, BsPatchCheckFill } from 'react-icons/bs';

const PriceSection = () => {
    return (
      <div>
        <div>
          <section className="bg-gray-200 py-6 dark:bg-gray-800 dark:text-gray-100">
            <div className="container p-4 mx-auto sm:p-10">
              <div className="mb-12 space-y-4 text-center">
                <h1 className="text-4xl font-semibold leading-tight">
                  Join My Community
                </h1>
                <p className="px-4 sm:px-8 lg:px-24">
                  Join my Community and get up 30% free from my service. Just
                  choose a package and become a honorable to our community
                  member
                </p>
              </div>
              <div className="lg:w-8/12 flex justify-between max-w-md grid-cols-1 gap-10 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full">
                <div className="flex flex-col overflow-hidden border-2 rounded-md dark:border-violet-400 border-gray-700 hover:bg-gray-400 px-6">
                  <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 dark:bg-gray-800">
                    <p className="text-lg font-medium">Half-Yearly</p>
                    <p className="text-5xl font-bold">
                      8€
                      <span className="text-xl dark:text-gray-400"> /mo</span>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center px-2 py-8 dark:bg-gray-900">
                    <ul className="self-stretch flex-1 space-y-2">
                      <li className="flex items-center ml-10 space-x-2">
                        <BsPatchCheck className="text-xl"></BsPatchCheck>
                        <span> Get Online Counseling</span>
                      </li>
                      <li className="flex items-center ml-10 space-x-2">
                        <BsPatchCheck className="text-xl"></BsPatchCheck>
                        <span>Buy course on 20% free discount</span>
                      </li>
                      <li className="flex items-center ml-10 space-x-2">
                        <BsPatchCheck className="text-xl"></BsPatchCheck>
                        <span>Session in 3 days on week</span>
                      </li>
                      <li className="line-through flex items-center ml-10 space-x-2">
                        <BsPatchCheck className="text-xl"></BsPatchCheck>
                        <span>emergency session</span>
                      </li>
                      <li className="line-through flex items-center ml-10 space-x-2">
                        <BsPatchCheck className="text-xl"></BsPatchCheck>
                        <span>24 Hours service</span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      class="mt-10 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Join
                    </button>
                  </div>
                </div>
                <div className="border-gray-600 flex flex-col overflow-hidden px-6 border-2 rounded-md dark:border-gray-700 hover:bg-gray-400">
                  <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 dark:bg-gray-800">
                    <p className="text-lg font-medium">Yearly</p>
                    <p className="text-5xl font-bold">
                      19€
                      <span className="text-xl dark:text-gray-400"> /mo</span>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center px-2 py-8 dark:bg-gray-900">
                    <ul className="self-stretch flex-1 space-y-2">
                      <li className="flex items-center ml-10 space-x-2">
                        <BsPatchCheck className="text-xl"></BsPatchCheck>
                        <span> Get Online Counseling</span>
                      </li>
                      <li className="flex items-center ml-10 space-x-2">
                        <BsPatchCheck className="text-xl"></BsPatchCheck>
                        <span>Buy course on 30% free discount</span>
                      </li>
                      <li className="flex items-center ml-10 space-x-2">
                        <BsPatchCheck className="text-xl"></BsPatchCheck>
                        <span>Session in 5 days on week</span>
                      </li>
                      <li className="flex items-center ml-10 space-x-2">
                        <BsPatchCheck className="text-xl"></BsPatchCheck>
                        <span>emergency session</span>
                      </li>
                      <li className="flex items-center ml-10 space-x-2">
                        <BsPatchCheck className="text-xl"></BsPatchCheck>
                        <span>24 Hours service</span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      class="mt-10 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
};

export default PriceSection;