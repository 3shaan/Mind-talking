import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/Blogs/Blogs";
import Login from "../Components/Login and SignUp/Login";
import SignUp from "../Components/Login and SignUp/SignUp";
import MainPage from "../Components/MainBody/MainPage";
import MyReview from "../Components/ReviewSection/MyReview";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import AppointmentPage from "../Components/Appointment/AppointmentPage";
import AddService from "../Components/Services/AddService";
import Services from "../Components/Services/Services";
import PrivateRoute from "./PrivateRoute";
import Root from "./Root";
import Dashboard from "../Components/Dashboard/Dashboard";
import MainBodyDashBoard from "../Components/Dashboard/MainBodyDashBoard";
import AllUsers from "../Components/Dashboard/AllUsers";
import AdminRoute from "./AdminRoute";
import AddDoctors from "../Components/Dashboard/AddDoctors";
import ManageDoctors from "../Components/Dashboard/ManageDoctors";
import CheckOut from "../Components/Payments/CheckOut";
import Error from "../Components/Loader/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <MainPage></MainPage>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => {
          return fetch(
            `https://mind-talking-server.vercel.app/services/${params.id}`
          );
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/myreview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/add_services",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/blogs",
      //   element: <Blogs></Blogs>,
      // },
      {
        path: "/appointments",
        element: (
          <PrivateRoute>
            <AppointmentPage></AppointmentPage>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <Error></Error>,
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MainBodyDashBoard></MainBodyDashBoard>,
      },
      {
        path: "/dashboard/users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/add_doctors",
        element: (
          <AdminRoute>
            <AddDoctors></AddDoctors>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage_Doctors",
        element: (
          <AdminRoute>
            <ManageDoctors></ManageDoctors>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payments/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) => {
          return fetch(
            `https://mind-talking-server.vercel.app/payment/${params.id}`
          );
        },
      },
    ],
  },
]);
