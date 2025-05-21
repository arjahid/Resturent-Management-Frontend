import { useQueries, useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxious from './useAxious';

const useAdmin = () => {
    const {user,loading}=useAuth()
    const axiousSecure=useAxious();
    const {data:isAdmin,isPending:isAdminLoading}=useQuery({
        queryKey:['isAdmin',user?.email],
        enabled:!loading,
        queryFn:async()=>{
            const res=await axiousSecure.get(`/users/admin/${user?.email}`)
            console.log(res.data)
            return res.data?.admin
        },
        enabled:!!user?.email

    })
    return [isAdmin,isAdminLoading]
       
   
};

export default useAdmin;