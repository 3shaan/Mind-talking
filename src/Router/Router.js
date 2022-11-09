import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login and SignUp/Login";
import SignUp from "../Components/Login and SignUp/SignUp";
import MainPage from "../Components/MainBody/MainPage";
import MyReview from "../Components/ReviewSection/MyReview";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import Services from "../Components/Services/Services";
import Root from "./Root";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element:<MainPage></MainPage>
            },
            {
                path: '/services',
                element:<Services></Services>
            },
            {
                path: "/services/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => {
                    return fetch(
                      `http://localhost:5000/services/${params.id}`
                    );
                }
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
                path: "/myreview",
                element:<MyReview></MyReview>
            }
        ]
    }
])