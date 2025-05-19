import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxious from "../../../../Hooks/useAxious";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const Allusers = () => {
  const axiousSecure = useAxious();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiousSecure.get("/users");
      return res.data;
    },
  });
  const handleMakeAdmin = (user) => {
    axiousSecure
      .patch(`/users/admin/${user._id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Success!",
            text: `${user.name} is an admin now`,
            icon: "success",
          });
        }
      });
  };
  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiousSecure
          .delete(`/users/${user._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };
  return (
    <div className="px-2 sm:px-4 md:px-8">
      <div>
        <div className="flex flex-col md:flex-row md:justify-evenly my-4 gap-2 md:gap-0">
          <h2 className="text-2xl md:text-3xl">All users</h2>
          <h2 className="text-2xl md:text-3xl">Total users: {users.length}</h2>
        </div>
      </div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table w-full min-w-[600px]">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td className="break-all">{user.name}</td>
                <td className="break-all">{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-orange-500 btn-sm md:btn-lg"
                    >
                      <FaUser className="text-white text-xl md:text-2xl"></FaUser>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost btn-sm md:btn-lg"
                  >
                    <FaTrash className="text-red-600"></FaTrash>
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

export default Allusers;
