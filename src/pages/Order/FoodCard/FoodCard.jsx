import React from 'react';

const FoodCard = ({item}) => {
    const { name, recipe, image, price } = item;
    const handleAddtoCart = (food) => {
      console.log(food)
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