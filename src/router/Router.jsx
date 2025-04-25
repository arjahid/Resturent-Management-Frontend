

import{
    createBrowserRouter,
   
  }from 'react-router-dom'
import MainLayouts from '../layouts/MainLayouts'
import Home from '../pages/Home/Home'
import Menu from '../pages/Home/Menu/Menu'
import Order from '../pages/Order/Order/Order'
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
          path:'order',
          element:<Order></Order>
        }
      ]
    }
  ])