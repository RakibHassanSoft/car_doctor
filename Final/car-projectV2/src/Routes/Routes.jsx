import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home.jsx/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import CheckOut from "../Pages/CheckOut.jsx/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivetRoute from "./PrivetRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/checkout/:id',
        element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
        loader: ({params})=>{return fetch(`http://localhost:5000/services/${params.id}`)}
        
      },{
        path:'/bookings',
        element:<PrivetRoute><Bookings></Bookings></PrivetRoute>

      }
    ]
  },
]);

export default router