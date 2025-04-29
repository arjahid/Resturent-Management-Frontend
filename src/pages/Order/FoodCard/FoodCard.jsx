import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const FoodCard = ({item}) => {
    const { name, recipe, image, price } = item;
    const  {user}=useAuth();
    const navigate=useNavigate();
    const location=useLocation();

    const handleAddtoCart = (food) => {
      if(user && user.email){
        // TODO: Add to cart logic here
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
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <p className='bg-slate-900 text-white absolute right-0 mr-4 mt-2 px-4 rounded'>{price}</p>
  <div className="card-body text-center flex flex-col items-center justify-center">
    <h2 className="card-title">{name}</h2>
    <p className=''>${recipe}</p>
    <div className="card-actions flex flex-col items-center">
      <button
      onClick={()=>handleAddtoCart(item)}
       className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4 text-black hover:bg-black hover:text-white">Add to cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;