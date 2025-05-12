import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxious from '../../../../Hooks/useAxious';

const Allusers = () => {
    const axiousSecure=useAxious();
    const {data:users=[]}=useQuery({
        queryKey:['users'],
        queryFn: async()=>{
            const res=await axiousSecure.get('/users');
            return res.data;

        }
    })
    return (
        <div>
           <div className='flex justify-evenly my-4'>
            <h2 className='text-3xl'>All users</h2>
            <h2 className='text-3xl'>Total users: {users.length}</h2>
           </div>
        </div>
    );
};

export default Allusers;