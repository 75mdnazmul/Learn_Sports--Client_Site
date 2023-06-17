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
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import FeedBack from "../Pages/Dashboard/FeedBack";
import UserHome from "../Pages/Dashboard/UserHome";
import EnrolledCourse from "../Pages/Dashboard/StudentDashboard/EnrolledCourse";
import PaymentMethod from "../Pages/Dashboard/StudentDashboard/PaymentMethod";
import SelectedCourse from "../Pages/Dashboard/StudentDashboard/SelectedCourse";
import ManageCourses from "../Pages/Dashboard/ManageCourses";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddCourses from "../Pages/Dashboard/AddCourses";
import MyCourses from "../Pages/Dashboard/MyCourses";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/PaymentHistory";

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
    children: [
      {
        path: "userHome",
        element: <UserHome></UserHome>
      },
      {
        path: "manage-class",
        element: (
          <AdminRoute>
            <ManageCourses></ManageCourses>
          </AdminRoute>
        ),
      },
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: 'feedback/:id',
        element: <AdminRoute>
          <FeedBack></FeedBack>
        </AdminRoute>
      },
      {
        path: "myCourse",
        element: (
          <InstructorRoute>
            <MyCourses></MyCourses>
          </InstructorRoute>
        ),
      },
      {
        path: "addclasses",
        element: (
          <InstructorRoute>
            <AddCourses></AddCourses>
          </InstructorRoute>
        ),
      },
      {
        path: "selectedCourse",
        element: <PrivateRoutes>
          <SelectedCourse></SelectedCourse>
        </PrivateRoutes>,
      },
      {
        path: "enrolledCourse",
        element: <PrivateRoutes>
          <EnrolledCourse></EnrolledCourse>
        </PrivateRoutes>,
      },
      {
        path: "paymentHistory",
        element: <PrivateRoutes>
          <PaymentHistory></PaymentHistory>
        </PrivateRoutes>,
      },
      {
        path: "PaymentMethod/:id",
        element: <PrivateRoutes>
          <PaymentMethod></PaymentMethod>
        </PrivateRoutes>,
      },
    ],
  },
  {
    path: '/error',
    element: <ErrorPage></ErrorPage>
  }
]);