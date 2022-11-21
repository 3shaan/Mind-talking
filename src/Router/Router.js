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
import Payments from "../Components/Payments/Payments";
import CheckOut from "../Components/Payments/CheckOut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
          return fetch(`http://localhost:5000/services/${params.id}`);
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
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/appointments",
        element: <AppointmentPage></AppointmentPage>,
      },
    ],
  },
  {
    path: "/dashboard",
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
        element: (
          
            <AllUsers></AllUsers>
         
        ),
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
        path: "/dashboard/payments",
        element: (
          
            <CheckOut></CheckOut>
          
        ),
      },
    ],
  },
]);
