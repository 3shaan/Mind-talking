import React, { useEffect, useState } from 'react';
import AppointmentCard from './AppointmentCard';
import { format } from "date-fns";
import AppointmentModal from './AppointmentModal';

const AppointmentSelect = ({ selectedDate }) => {
    const [appointments, setAppointments] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [singleData, SetSingleData] = useState(null);
    const date = format(selectedDate, "PP");
  const [load, setLaod] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/appointments?date=${date}`)
      .then((res) => res.json())
      .then((data) => setAppointments(data))
      .catch((err) => console.log(err));
  }, [date, load]);
    
    const handleSubmit = (data) => {
        SetSingleData(data);
        setOpen(true);
    }
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-center text-2xl text-green-500 font-semibold my-5">
        availAble Appointment on {date}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {appointments.map((data) => (
          <AppointmentCard
            key={data._id}
            data={data}
            handleSubmit={handleSubmit}
          ></AppointmentCard>
        ))}
      </div>
      <div>
        {singleData && (
          <AppointmentModal
            isOpen={isOpen}
            setOpen={setOpen}
            singleData={singleData}
            date={date}
            SetSingleData={SetSingleData}
            load={load}
            setLaod={setLaod}
          ></AppointmentModal>
        )}
      </div>
    </div>
  );
};

export default AppointmentSelect;