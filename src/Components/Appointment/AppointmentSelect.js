import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Error from "../Loader/Error";
import Loading from "../Loader/Loading";
import AppointmentCard from "./AppointmentCard";
import AppointmentModal from "./AppointmentModal";

const AppointmentSelect = ({ selectedDate }) => {
  // const [appointments, setAppointments] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [singleData, SetSingleData] = useState(null);
  const date = format(selectedDate, "PP");
  // const [load, setLaod] = useState(false);

  // useEffect(() => {
  //   fetch(`https://mind-talking-server.vercel.app/appointments?date=${date}`)
  //     .then((res) => res.json())
  //     .then((data) => setAppointments(data))
  //     .catch((err) => console.log(err));
  // }, [date, load]);

  const {
    data: appointments = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["date"],
    queryFn: async () => {
      const res = await fetch(
        `https://mind-talking-server.vercel.app/appointments?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    console.log(isError);
    return <Error isError={error}></Error>;
  }

  const handleSubmit = (data) => {
    SetSingleData(data);
    setOpen(true);
  };
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
            refetch={refetch}
          ></AppointmentModal>
        )}
      </div>
    </div>
  );
};

export default AppointmentSelect;
