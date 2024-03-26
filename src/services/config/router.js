import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../../screens/Home'
import UserHome from '../../screens/UserHome'
import Layout from "../../screens/Layout/Index";
import AdminCovers from "../../screens/AdminCovers";
import AdminEditCovers from "../../screens/AdminEditCovers";
import AdminAddCover from "../../screens/AdminAddCover";
import BuyCovers from "../../screens/BuyCovers";
import CoverPurchase from "../../screens/CoverPurchase";
import SubmitClaim from "../../screens/SubmitClaim";

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
            },
            {
                path:`/AdminCovers`,
                element:<AdminCovers/>,
            },
            {
                path:`/AdminEditCovers`,
                element:<AdminEditCovers/>,
            },
            {
                path:`/AdminAddCover`,
                element:<AdminAddCover/>,
            },
            {
                path:`/BuyCovers`,
                element:<BuyCovers/>,
            },
            {
                path:`/CoverPurchase`,
                element:<CoverPurchase/>,
            },
            {
                path:"/SubmitClaim",
                element:<SubmitClaim/>
            }
        ]
    },
])

const Routing = () => {
    return <RouterProvider router={router} />;
  };
  
  export default Routing;
