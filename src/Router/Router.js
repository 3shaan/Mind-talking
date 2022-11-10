import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/Blogs/Blogs";
import Login from "../Components/Login and SignUp/Login";
import SignUp from "../Components/Login and SignUp/SignUp";
import MainPage from "../Components/MainBody/MainPage";
import MyReview from "../Components/ReviewSection/MyReview";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import AddService from "../Components/Services/AddService";
import Services from "../Components/Services/Services";
import PrivateRoute from "./PrivateRoute";
import Root from "./Root";

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
          return fetch(
            `https://mind-talking-server-3shaan.vercel.app/services/${params.id}`
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
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);
