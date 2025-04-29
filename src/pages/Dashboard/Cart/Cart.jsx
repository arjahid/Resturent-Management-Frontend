import React from "react";
import useCart from "../../../Hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const Cart = () => {
  const [cart] = useCart();
  const totalprice = cart.reduce((total, item) => total + item.price, 0);
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
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        }
      });
  }
  return (
    <div>
      <div className="flex justify-evenly mb-6">
        <h2 className="text-4xl">Item :{cart.length}</h2>
        <h2 className="text-4xl">Tota Price :{totalprice}</h2>
        <button className="btn btn-primary">Pay</button>
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
            {
                cart.map((item,index) =>  <tr key={item._id}>
                <th>
                 {index+1}
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
                  <button onCanPlay={()=>handleDelete(item._id)} className="btn btn-ghost btn-lg">
                    <FaTrash className="text-red-600"></FaTrash>
                  </button>
                </th>
              </tr>)
            }
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          
          </tbody>
          {/* foot */}
         
        </table>
      </div>
    </div>
  );
};

export default Cart;
