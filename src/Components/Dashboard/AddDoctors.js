import { useQuery } from "@tanstack/react-query";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsFillPersonFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { useNavigate } from "react-router";
import Error from "../Loader/Error";
import Loading from "../Loader/Loading";

const AddDoctors = () => {
  // const [allServices, setAllServices] = useState([]);
  const navigation = useNavigate();
  // useEffect(() => {
  //   fetch("https://mind-talking-server.vercel.app/services_name")
  //     .then((res) => res.json())
  //     .then((data) => setAllServices(data))
  //     .catch((err) => console.log(err));
  // }, []);

  const {
    data: allServices = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["service"],
    queryFn: async () => {
      const res = await fetch(
        "https://mind-talking-server.vercel.app/services_name"
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    return <Error isError={error}></Error>;
  }

  const handleAddDoctor = (data) => {
    data.preventDefault();
    const form = data.target;
    const name = form.name.value;
    const email = form.email.value;
    const select = form.select.value;

    const image = form.file.files[0];

    const formData = new FormData();
    formData.append("image", image);

    console.log(formData);
    console.log(image);

    fetch(
      "https://api.imgbb.com/1/upload?key=7393967092b740dbb7156b576663d2f7",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor = {
            name,
            email,
            specialty: select,
            images: imgData?.data?.url,
          };
          fetch("https://mind-talking-server.vercel.app/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: localStorage.getItem("token"),
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged) {
                toast.success(`${name} added successfully`);
                navigation("/dashboard/manage_Doctors");
              }
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-96 mx-auto mt-10">
      <CustomCard
        effectColor="#C780FF" // required
        color="#14AEFF" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <h1 className="text-2xl text-center my-3"> Add a Doctor</h1>
        <form onSubmit={handleAddDoctor}>
          <label htmlFor="name">Name :</label>
          <label className="relative block mb-4 ">
            <BsFillPersonFill className="transition pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"></BsFillPersonFill>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="form-input transition-colors duration-200 py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 w-full focus:shadow-sm focus:outline-none leading-none placeholder-gray-400 appearance-none block pl-12  rounded-lg "
              required
            />
          </label>
          <label htmlFor="password">Email :</label>
          <label className="relative block mb-4 ">
            <MdAlternateEmail className="transition pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"></MdAlternateEmail>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="form-input transition-colors duration-200 py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 w-full focus:shadow-sm focus:outline-none leading-none placeholder-gray-400 appearance-none block pl-12  rounded-lg "
              required
            />
          </label>
          <label htmlFor="service">Select a Specialty :</label>
          <select
            name="select"
            id="service"
            className="select select-bordered w-full max-w-xs mb-4"
          >
            {allServices.map((service) => (
              <option key={service._id} value={service?.title}>
                {service?.title}
              </option>
            ))}
          </select>
          <label htmlFor="file">Upload Images:</label>
          <input
            accept="image/jpeg, image/png, image/jpg"
            id="file"
            name="file"
            type="file"
            className="file-input file-input-bordered file-input-accent w-full max-w-xs"
          />
          <button
            type="submit"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full my-3"
          >
            add Doctor
          </button>
        </form>
      </CustomCard>
    </div>
  );
};

export default AddDoctors;
