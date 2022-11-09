import { Button, Checkbox, Label, Modal, Textarea, TextInput } from 'flowbite-react';
import React from 'react';

const MyReviewModal = ({ open, singleReview, SetOpen }) => {
    const { comment, rating ,email, age, img, name,} = singleReview;
  return (
    <div>
      <Modal show={open} size="7xl" popup={true}>
        <Modal.Header onClick={() => SetOpen(false)} />
        <Modal.Body>
          <p className="text-3xl font-semibold text-center text-gray-700">
            Update Your Review
          </p>
          <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <form
              action=""
              className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
            >
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label for="firstname" className="text-sm">
                      First name
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      defaultValue={name?.split(" ")[0]}
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label for="lastname" className="text-sm">
                      Last name
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      defaultValue={name?.split(" ")[1] ? name?.split(" ")[1] :''}
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label for="email" className="text-sm">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      readOnly
                      disabled
                      defaultValue={email}
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label for="username" className="text-sm">
                      PhotoURL
                    </label>
                    <input
                      id="username"
                      type="text"
                      defaultValue={img}
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label for="rate" className="text-sm">
                      Rating(out of 5)
                    </label>
                    <input
                      id="rate"
                      type="number"
                      defaultValue={age}
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label for="age" className="text-sm">
                      Your Age
                    </label>
                    <input
                      id="age"
                      type="number"
                      defaultValue={age}
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full">
                    <label for="bio" className="text-sm">
                      Your Comment
                    </label>
                    <textarea
                      id="bio"
                      defaultValue={comment}
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-gray-700 dark:text-gray-900"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="col-span-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Update
                  </button>
                </div>
              </fieldset>
            </form>
          </section>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyReviewModal;