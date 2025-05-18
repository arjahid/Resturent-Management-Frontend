import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { FaEdit, FaTrash } from "react-icons/fa";

const ManageItem = () => {
  const [menu, loading] = useMenu();

    const handleDelete = (item) => {

    }

  return (
    <div>
      <SectionTitle
        heading="Manage All Item"
        subHeading="Hurry Up"
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
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
                <tr>
                  <td>{index + 1}</td>

                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="">${item.price}</td>
                  <td>
                    <button className="btn btn-ghost btn-sm md:btn-lg">
                        <FaEdit className="text-white"></FaEdit>
                    </button>
                  </td>
                  <td>
                     
                  <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-sm md:btn-lg">
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
