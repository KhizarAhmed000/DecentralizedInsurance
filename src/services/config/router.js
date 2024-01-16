import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../../screens/Home'
import UserHome from '../../screens/UserHome'
import Layout from "../../screens/Layout/Index";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>,
            },
            {
                path:`/UserHome`,
                element:<UserHome/>,
            }
        ]
    },
])

const Routing = () => {
    return <RouterProvider router={router} />;
  };
  
  export default Routing;
