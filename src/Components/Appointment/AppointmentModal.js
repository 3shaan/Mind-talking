import { Modal } from "flowbite-react";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { authContext } from "../Context/Context";

const AppointmentModal = ({
  setOpen,
  isOpen,
  singleData,
  date,
  SetSingleData,
  refetch,
}) => {
  const { name: appointmentName, slots, price } = singleData;
  console.log(singleData);
  const { user } = useContext(authContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const appointmentDate = date;
    const appointmentTime = form.select.value;
    const email = user?.email;
    const phone = form.phone.value;
    const name = form.name.value || user?.displayName;
    const appointment = {
      appointmentName,
      appointmentDate,
      appointmentTime,
      email,
      name,
      phone,
      price,
    };

    fetch("https://mind-talking-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("your appointment added, please pay to see the doctor");
          SetSingleData(null);
          refetch();
        } else {
          console.log(data);
          toast.error(data.message);
          SetSingleData(null);
          refetch();
        }
      })
      .catch((err) => console.log(err));

    console.log(appointment);
  };
  return (
    <div>
      <Modal show={isOpen}>
        <Modal.Header onClick={() => SetSingleData(null)}>
          <h1 className="text-2xl font-semibold">{appointmentName}</h1>
        </Modal.Header>
        <Modal.Body>
          <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <form onSubmit={handleSubmit}>
              <div className=" space-y-3">
                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    for="date"
                  >
                    Selected Date
                  </label>
                  <input
                    value={date}
                    disabled
                    id="date"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    for="time"
                    className="block mb-2 font-medium text-gray-900 dark:text-gray-400"
                  >
                    Select Appointment time
                  </label>
                  <select
                    name="select"
                    id="time"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {slots.map((slot, i) => {
                      return <option value={slot}>{slot}</option>;
                    })}
                  </select>
                </div>

                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    for="name"
                  >
                    Full Name
                  </label>
                  <input
                    defaultValue={user.displayName}
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    defaultValue={user?.email}
                    id="email"
                    type="Email"
                    name="email"
                    placeholder="Email"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    for="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="Number"
                    name="phone"
                    placeholder="Phone Number"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AppointmentModal;
