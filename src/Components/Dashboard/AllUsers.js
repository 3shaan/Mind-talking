import React, {  useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/users", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setAllUsers(data))
      .catch((err) => console.log(err));
  }, [load]);

  const handleAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("make admin successful");
          setLoad(!load);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Roll</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user, i) => (
              <tr key={user._id} className="hover">
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.roll === "admin" || (
                    <button
                      onClick={() => handleAdmin(user?._id)}
                      type="button"
                      className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
