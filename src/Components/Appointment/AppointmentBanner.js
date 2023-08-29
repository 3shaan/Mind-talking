import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ SetSelectedDate, selectedDate }) => {
  return (
    <section className="lg:w-9/12 mx-auto">
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm ">
            <h1 className="mb-5 text-2xl font-semibold text-gray-700">
              Pick a date for Appointment
            </h1>
            <div>
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={(data) => {
                  if (data) {
                    SetSelectedDate(data);
                  }
                }}
              />
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://img.freepik.com/free-vector/cartoon-married-couple-communicating-with-doctor-flat-illustration_74855-20057.jpg?w=1060&t=st=1668344852~exp=1668345452~hmac=9f2867e97350c60ed15e08a49ebcde8595c989a6fb56f10671f8dfadb5dbc549"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default AppointmentBanner;