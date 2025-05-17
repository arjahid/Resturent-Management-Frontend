import React from 'react';
import useAuth from '../Hooks/useAuth';
import { useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = (children) => {
   const {user,loading}=useAuth();
   const [isAdmin,isisAdminLoading]=useAdmin()
   const location=useLocation()

    if(loading || isisAdminLoading){
        return <div className="flex justify-center items-center h-screen">
            <progress className="progress w-56"></progress>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}}></Navigate>
   
};

export default AdminRoute;