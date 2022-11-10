import React from "react";

const AddService = () => {
    const handleSubmit = (e) =>{
       e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const des = form.des.value;
        const price = form.price.value;
        const img = form.img.value;
        const benifits = [form.benefits.value];
        const service = {
            title,
            des,
            price,
            img,
            benifits
        }
        console.log(service)
    }
  return (
    <div>
      <div className="my-10 text-center ">
        <h1 className="text-3xl font-semibold text-gray-700 my-3">
          Want to Add Services ?
        </h1>
        <p>
          If you want to add an Services , <br /> please fill the form and click
          'add service' Button.
        </p>
      </div>
      <div className="w-10/12 mx-auto">
        <section className="dark:bg-gray-800 dark:text-gray-50">
          <form
            action=""
            className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <fieldset className="rounded-md shadow-sm dark:bg-gray-900">
              <div className="grid grid-cols-4 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full ">
                  <label for="title" className="text-sm">
                    Service Title
                  </label>
                  <input
                    name="title"
                    id="title"
                    type="text"
                    placeholder="Service title"
                    className="w-full h-14 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <label className="text-sm col-span-full " htmlFor="des">
                  Service Details
                </label>
                <textarea
                  name="des"
                  id="des"
                  placeholder="Type service Description"
                  className="col-span-full h-20 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                ></textarea>
                <div className="col-span-full sm:col-span-2">
                  <label for="price" className="text-sm">
                    Price
                  </label>
                  <input
                    name="price"
                    id="price"
                    type="text"
                    placeholder="price"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label for="img" className="text-sm">
                    images URL
                  </label>
                  <input
                    name="img"
                    id="img"
                    type="url"
                    placeholder="https://"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full">
                  <label for="Benefits" className="text-sm">
                    Benefits
                  </label>
                  <textarea
                    name="benefits"
                    id="Benefits"
                    type="text"
                    placeholder="Benefits"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
              </div>
              <button
                onSubmit={handleSubmit}
                type="submit"
                class="w-full mt-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Add Service
              </button>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddService;
