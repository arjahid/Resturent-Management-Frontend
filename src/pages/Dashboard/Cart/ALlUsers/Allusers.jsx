import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxious from "../../../../Hooks/useAxious";
import { FaTrash, FaUser } from "react-icons/fa";

const Allusers = () => {
  const axiousSecure = useAxious();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiousSecure.get("/users");
      return res.data;
    },
  });
  const handleDelete = (id) => {};
  return (
    <div>
        <div>
        <div className="flex justify-evenly my-4">
          <h2 className="text-3xl">All users</h2>
          <h2 className="text-3xl">Total users: {users.length}</h2>
        </div>
      </div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
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
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn bg-orange-500  btn-lg"
                  >
                    <FaUser className="text-white text-2xl"></FaUser>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-ghost btn-lg"
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
