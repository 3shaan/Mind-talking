import React from "react";

const AppointmentCard = ({ data, handleSubmit }) => {
  const { name, slots , price } = data;
  return (
    <div>
      <div className="w-full max-w-sm px-4 py-3 bg-slate-100 hover:bg-slate-200 rounded-md shadow-xl dark:bg-gray-800 flex flex-col justify-center items-center gap-2">
        <h1>{name}</h1>
        <p>{slots[0]}</p>
        <p>
          {slots.length} {slots.length > 0 ? "spaces" : "space"} available
        </p>
        <h1>${price}</h1>
        <button
          onClick={() => handleSubmit(data)}
          type="button"
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
