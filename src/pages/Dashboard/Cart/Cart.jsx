import React from "react";
import useCart from "../../../Hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxious from "../../../Hooks/useAxious";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart,refetch] = useCart();
  const totalprice = cart?.reduce((total, item) => total + item.price, 0) || 0;
  const axiousSecure=useAxious();
  const handleDelete=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axiousSecure.delete(`/carts/${id}`)
            .then(res => {
              if (res.data.deletedCount > 0) {
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              }
            })
            .catch(err => console.log(err));
        }
      });
  }
  return (
    <div>
      <div className="flex justify-evenly mb-6">
        <h2 className="text-4xl">Item :{cart?.length || 0}</h2>
        <h2 className="text-4xl">Tota Price :{totalprice}</h2>
         {cart?.length ? (
  <Link to="/dashboard/payment">
    <button className="btn btn-primary">Pay</button>
  </Link>
) : (
  <button disabled className="btn btn-primary">Pay</button>
)}
      </div>
      <div className="overflow-x-auto">
        <table className="table  w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
               #
              </th>
              <th>image</th>
              <th>Name</th>
              <th>Price </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart?.map((item, index) => (
              <tr key={item._id}>
                <th>
                  {index + 1}
                </th>
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
                <td>
                  {item.name}
                </td>
                <td>${item.price}</td>
                <th>
                  <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg">
                    <FaTrash className="text-red-600"></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
         
        </table>
      </div>
    </div>
  );
};

export default Cart;
