import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { authContext } from "../Context/Context";

const AddService = () => {
  const navigation = useNavigate();
  const { logOut } = useContext(authContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const des = form.des.value;
    const price = form.price.value;
    const img = form.img.value;
    const benifits = form.benefits.value.split(",");
    const service = {
      title,
      des,
      price,
      img,
      benifits,
      timeSt: new Date(),
    };

    fetch(`https://mind-talking-server.vercel.app/services`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(service),
    })
      .then((data) => {
        console.log(data);
        if (data.status === 401 || data.status === 403) {
          navigation("/login");
          return logOut();
        }
        if (data?.ok === true) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Service Added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((err) => console.log(err));

    console.log(service);
  };

  useEffect(() => {
    document.title = "Add-Service-Mind Talking";
  }, []);
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
            onSubmit={handleSubmit}
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
                    className="w-full h-14 rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-gray-700 dark:text-gray-900"
                    required
                  />
                </div>
                <label className="text-sm col-span-full " htmlFor="des">
                  Service Details
                </label>
                <textarea
                  name="des"
                  id="des"
                  placeholder="Type service Description"
                  className="col-span-full h-20 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-gray-700 dark:text-gray-900"
                  required
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
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-gray-700 dark:text-gray-900"
                    required
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
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-gray-700 dark:text-gray-900"
                    required
                  />
                </div>
                <div className="col-span-full">
                  <label for="Benefits" className="text-sm">
                    Benefits(for multiple benefits use comma)
                  </label>
                  <textarea
                    name="benefits"
                    id="Benefits"
                    type="text"
                    placeholder="Benefits"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full mt-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
