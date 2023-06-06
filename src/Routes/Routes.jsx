import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Pages/Home/Home";
import Menu from "../Layout/Pages/Menu/Menu/Menu";
import Orders from "../Layout/Pages/Orders/Orders/Orders";
import Login from "../Layout/Pages/Login/Login";
import SignUp from "../Layout/Pages/SignUp/SignUp";
import PraivateRoute from "./PraivateRoute";
import Secret from "../Layout/Pages/Shared/Secret/Secret";
import Dashbord from "../Layout/Dashbord";
import MyCart from "../Layout/Pages/Dashbord/MyCart/MyCart";
import Users from "../Layout/Pages/Dashbord/Users/Users";
import AddItem from "../Layout/Pages/Dashbord/AddItem/AddItem";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path:'ourmenu',
          element: <Menu></Menu>
        },
        {
          path: 'orders/:category',
          element: <Orders></Orders>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'singup',
          element: <SignUp></SignUp>
        },
        {
          path: 'secret',
          element: <PraivateRoute><Secret></Secret></PraivateRoute>
        }
      ]
    },
    {
      path: 'dashboard',
      element:<PraivateRoute><Dashbord></Dashbord></PraivateRoute>,
      children:[
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        },
        {
          path: 'allusers',
          element:<AdminRoute><Users></Users></AdminRoute>
        },
        {
          path: 'additem',
          element: <AdminRoute> <AddItem></AddItem></AdminRoute>
        }
      ],
    }
  ]);

  export default router;