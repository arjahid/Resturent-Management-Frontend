import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios, { AxiosHeaders } from 'axios';
import useAxious from '../../../Hooks/useAxious';
import useCart from '../../../Hooks/useCart';

const FoodCard = ({item}) => {
    const { name, recipe, image, price,_id } = item;
    const  {user}=useAuth();
    const navigate=useNavigate();
    const location=useLocation();
    const axiousSecure=useAxious();
    const [,refetch]=useCart();

    const handleAddtoCart = (food) => {
      if(user && user.email){
        // TODO: Add to cart logic here
        const cartItem={
          menuId:_id,
          email:user.email,
          name:name,
          recipe:recipe,
          image:image,
          price:price
        }
        axiousSecure.post('/carts',cartItem)
       .then(res=>{
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Item added to cart!",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Go to cart",
            width: '90%', // or a specific px value, e.g., '400px'
            customClass: {
              popup: 'max-w-xs sm:max-w-sm md:max-w-md', // Tailwind classes if using Tailwind
            },
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/dashboard/cart');
            }
          });
          refetch();
        }
       })
      }
      
      else{
        Swal.fire({
          title: "Please login",
          text: "Please login to add to cart?!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login!"
        }).then((result) => {
          if (result.isConfirmed) {
           navigate('/login', { state: { from: location } });
          }
        });
      }
    }
    return (
      <div className="card bg-base-100 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-sm mx-auto relative">
        <figure className="h-48 sm:h-56 md:h-64 w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full"
          />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 top-0 mr-4 mt-2 px-4 rounded">${price}</p>
        <div className="card-body text-center flex flex-col items-center justify-center">
          <h2 className="card-title text-lg md:text-xl">{name}</h2>
          <p className="mb-2 text-sm md:text-base">${recipe}</p>
          <div className="card-actions flex flex-col items-center w-full">
            <button
              onClick={() => handleAddtoCart(item)}
              className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4 text-black hover:bg-black hover:text-white w-full"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;