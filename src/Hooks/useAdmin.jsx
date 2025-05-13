import { useQueries, useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxious from './useAxious';

const useAdmin = () => {
    const {user}=useAuth()
    const axiousSecure=useAxious();
    const {data:isAdmin}=useQuery({
        queryKey:['isAdmin',user?.email],
        queryFn:async()=>{
            const res=await axiousSecure.get(`/users/admin/${user?.email}`)
            console.log(res.data)
            return res.data?.admin
        },
        enabled:!!user?.email

    })
    return [isAdmin]
       
   
};

export default useAdmin;