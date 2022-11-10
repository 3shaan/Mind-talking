import { jsonEval } from '@firebase/util';
import React, { useContext } from 'react';
import { authContext } from '../Context/Context';

const Review = ({ singleService }) => {
  const { user } = useContext(authContext);
  console.log(user);
  console.log(singleService);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = user?.email;
    const rating = form.rate.value;
    const img = form.url.value;
    const age = form.age.value;
    const comment = form.text.value;
    const name = firstName + " " + lastName;
    const serviceId = singleService?._id;
    const service = singleService?.title;
    const timeSt = new Date().toJSON();
    const review = {
      name,
      age,
      comment,
      img,
      rating,
      service,
      serviceId,
      timeSt,
      email
    };

    console.log(review);

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    


  };
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold ml-10">
        Please Leave A Review of this Service
      </h1>
      <div>
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
          <form
            onSubmit={handleSubmit}
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
                    name="firstName"
                    defaultValue={user?.displayName?.split(" ")[0] || ""}
                    id="firstname"
                    type="text"
                    placeholder="First name"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="lastname" className="text-sm">
                    Last name
                  </label>
                  <input
                    defaultValue={user?.displayName?.split(" ")[1] || ""}
                    name="lastName"
                    id="lastname"
                    type="text"
                    placeholder="Last name"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="email" className="text-sm">
                    Email
                  </label>
                  <input
                    defaultValue={user?.email}
                    readOnly
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="username" className="text-sm">
                    PhotoURL
                  </label>
                  <input
                    name="url"
                    id="username"
                    type="text"
                    placeholder="https://"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="rate" className="text-sm">
                    Rating(out of 5)
                  </label>
                  <input
                    name="rate"
                    id="rate"
                    type="text"
                    placeholder="4.5"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="age" className="text-sm">
                    Your Age
                  </label>
                  <input
                    name="age"
                    id="age"
                    type="number"
                    placeholder="ex.23"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full">
                  <label for="bio" className="text-sm">
                    Your Comment
                  </label>
                  <textarea
                    name="text"
                    id="bio"
                    placeholder="Write your comment about this service"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-gray-700 dark:text-gray-900"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="col-span-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Review;