import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import MyCourses from "../Pages/Dashboard/MyCourses/MyCourses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      }
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><Dashboard/></PrivateRoutes>,
    children: [
      {
        path: 'myCourses',
        element: <MyCourses></MyCourses>
      }
    ]
  }
]);