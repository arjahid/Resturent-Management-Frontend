

import{
    createBrowserRouter,
   
  }from 'react-router-dom'
import MainLayouts from '../layouts/MainLayouts'
import Home from '../pages/Home/Home'
import Menu from '../pages/Home/Menu/Menu'
import Order from '../pages/Order/Order/Order'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import PrivateRoute from './PrivateRoute'
import Secret from '../pages/Secret'
import Dashboard from '../layouts/Dashboard'
import Cart from '../pages/Dashboard/Cart/Cart'
import Allusers from '../pages/Dashboard/Cart/ALlUsers/Allusers'
import AddItem from '../pages/Dashboard/Cart/AddItem/AddItem'
import AdminRoute from './AdminRoute'
import ManageItem from '../pages/Dashboard/ManageItem/ManageItem'
export const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayouts></MainLayouts>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },{
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
        
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      // normal user routes
      children:[
        {
          path:'/dashboard/cart',
          element:<Cart></Cart>
        },


        // admin only routes
        {
          path:'users',
          element:<AdminRoute><Allusers></Allusers></AdminRoute>
        },
        {
          path:'/dashboard/addItems',
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path:"/dashboard/manageItems",
          element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
        }
       
      ]
    }
  ])