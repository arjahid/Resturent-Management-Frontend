import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxious from "../../../Hooks/useAxious";
import { Link } from "react-router-dom";

const ManageItem = () => {
  const [menu, ,refetch] = useMenu();
  const axiousSecure=useAxious();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async(result) => {
      if (result.isConfirmed) {
        const res=await axiousSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
            refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been deleted.`,
            icon: "success",
          });
        }
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };

  return (
    <div>
      <SectionTitle
        heading="Manage All Item"
        subHeading="Hurry Up"
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full min-w-[600px]">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item name</th>
                <th>Price </th>
                <th>Update </th>
                <th>Delete </th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="break-all">{item.name}</td>
                  <td className="break-all">${item.price}</td>
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                        <FaEdit className="text-white"></FaEdit>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg"
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
    </div>
  );
};

export default ManageItem;
