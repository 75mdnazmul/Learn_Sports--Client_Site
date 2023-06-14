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
import Mycourses from "../Pages/Dashboard/Mycourses/Mycourses";
import AllCourses from "../Pages/AllClasses/AllCourses";

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
      },
      {
        path: '/courses',
        element: <AllCourses></AllCourses>
      },
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><Dashboard/></PrivateRoutes>,
    children: [
      {
        path: 'mycourses',
        element: <Mycourses></Mycourses>
      }
    ]
  },
  {
    path: '/error',
    element: <ErrorPage></ErrorPage>
  }
]);