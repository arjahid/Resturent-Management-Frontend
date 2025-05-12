

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
      children:[
        {
          path:'/dashboard/cart',
          element:<Cart></Cart>
        },
        {
          
        }
      ]
    }
  ])