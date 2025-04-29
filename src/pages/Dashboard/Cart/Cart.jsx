import React from 'react';
import useCart from '../../../Hooks/useCart';

const Cart = () => {
     const [cart]=useCart();
     const totalprice=cart.reduce((total,item)=>total +item.price,0)
    return (
        <div>
          <div className='flex justify-evenly'>
          <h2 className='text-4xl'>Item :{cart.length}</h2>  
          <h2 className='text-4xl'>Tota Price :{totalprice}</h2>  
          <button className='btn btn-primary'>Pay</button>
          </div>
        </div>
    );
};

export default Cart;