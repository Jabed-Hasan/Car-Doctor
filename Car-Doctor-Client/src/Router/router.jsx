import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SingUp/SignUp";
import BookService from "../pages/Bookings/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/signup',
          element:<SignUp></SignUp>
        },
        {
          path: '/book/:id',
          element:<PrivateRoutes><BookService></BookService></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
          path: '/bookings',
          element:<PrivateRoutes>
            <Bookings></Bookings>
          </PrivateRoutes>
          
        },
        
      ]
    },
  ]);


  export default router;