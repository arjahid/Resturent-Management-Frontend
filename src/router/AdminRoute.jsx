import React from 'react';
import useAuth from '../Hooks/useAuth';
import { useLocation } from 'react-router-dom';

const AdminRoute = (children) => {
   const {user,loading}=useAuth();

   if(loading){
    return <div className="flex justify-center items-center h-screen">
        <progress className="progress w-56"></progress>
    </div>
   }
};

export default AdminRoute;