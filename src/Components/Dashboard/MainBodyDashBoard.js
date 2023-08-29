import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Context/Context";
import Error from "../Loader/Error";
import Loading from "../Loader/Loading";

const MainBodyDashBoard = () => {
  const { user } = useContext(authContext);
  // const [bookings, setBookings] = useState([]);
  // useEffect(() => {
  //   fetch(`https://mind-talking-server.vercel.app/bookings?email=${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //           setBookings(data);
  //       })
  //     .catch(err=>console.log(err))
  // }, [user]);

  const {
    data: bookings = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch(
        `https://mind-talking-server.vercel.app/bookings?email=${user?.email}`
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

  console.log(bookings);
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
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings.map((booking, index) => {
                return (
                  <tr key={booking._id} className="hover">
                    <th>{index + 1}</th>
                    <td>{booking.appointmentName}</td>
                    <td>{booking.appointmentDate}</td>
                    <td>{booking.appointmentTime}</td>
                    <td>{booking?.price}</td>
                    <td>
                      {booking.paid === true ? (
                        <div className="text-green-500 font-bold">paid</div>
                      ) : (
                        <Link to={`/dashboard/payments/${booking?._id}`}>
                          <button
                            type="button"
                            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                          >
                            Pay
                          </button>
                        </Link>
                      )}
                    </td>
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
