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
import AllCourses from "../Pages/AllCourses/AllCourses";
// import MyCourses from "../Pages/Dashboard/MyCourses/MyCourses";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import UserHome from "../Pages/Dashboard/MyCourses/UserHome";
import AdminRoute from "./AdminRoute";
import ManageCourses from "../Pages/Dashboard/MyCourses/ManageCourses";
import AllUsers from "../Pages/Dashboard/MyCourses/AllUsers";
import InstructorRoute from "./InstructorRoute";
import AddCourses from "../Pages/Dashboard/MyCourses/AddCourses";
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
      },
      {
        path: '/allCourses',
        element: <AllCourses></AllCourses>
      },
      {
        path: '/allInstructors',
        element: <AllInstructors></AllInstructors>
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>{" "}
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "manage-class",
        element: <AdminRoute><ManageCourses></ManageCourses></AdminRoute>,
      },
      {
        path: "allusers",
        element: (
          <AdminRoute><AllUsers></AllUsers></AdminRoute>
        ),
      },
      {
        path: "myCourses",
        element: <InstructorRoute><MyCourses></MyCourses></InstructorRoute>,
      },
      {
        path: "addCourses",
        element: <InstructorRoute><AddCourses></AddCourses></InstructorRoute>,
      },
    ],
  },
  {
    path: '/error',
    element: <ErrorPage></ErrorPage>
  }
]);