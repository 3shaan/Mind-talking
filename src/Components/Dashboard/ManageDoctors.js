import { useQuery } from "@tanstack/react-query";
import React from "react";
import Swal from "sweetalert2";

const ManageDoctors = () => {
  const { data: doctors = [], isLoading , refetch} = useQuery({
    queryKey: "doctors",
    queryFn: async () => {
      try {
          const res = await fetch("http://localhost:5000/doctors", {
              headers: {
                authorization : localStorage.getItem('token')
            }
        });
        const data = res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  if (isLoading) {
    return <div>loading......</div>;
    };

    const handledoctorDelete = data => {
        Swal.fire({
          title: `Are you sure to delete doctor ${data?.name}?`,
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/doctors/${data._id}`, {
                    method: "DELETE",
                    headers: {
                        authorization:localStorage.getItem('token')
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                         Swal.fire(
                           "Deleted!",
                           `Doctor ${data?.name}? has been deleted.`,
                           "success"
                         );
                        console.log(data)
                        refetch(); 
                    })
                    .catch(err => console.log(err));
           
          }
        });
    }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr className="hover">
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={doctor?.images} alt="" />
                    </div>
                  </div>
                </td>
                <td>{doctor?.name}</td>
                <td>{doctor?.email}</td>
                <td>{doctor?.specialty}</td>
                <td>
                  <button
                    onClick={()=>handledoctorDelete(doctor)}
                    className="btn-sm rounded-lg btn-error"
                  >
                    Delete
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

export default ManageDoctors;
