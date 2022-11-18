import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../Context/Context";

const MainBodyDashBoard = () => {
  const { user } = useContext(authContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=3shan.bd@gmail.com`)
      .then((res) => res.json())
        .then((data) => {
            setBookings(data);
        })
      .catch(err=>console.log(err))
  }, [user]);
    // console.log(bookings)
  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>appointmentName</th>
              <th>appointmentDate</th>
              <th>appointmentTime</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => {
              return (
                <tr key={booking._id} className="hover">
                  <th>{index +1 }</th>
                  <td>{booking.appointmentName}</td>
                  <td>{booking.appointmentDate}</td>
                  <td>{booking.appointmentTime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainBodyDashBoard;
