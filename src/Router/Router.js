import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Components/MainBody/MainPage";
import Root from "./Root";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element:<MainPage></MainPage>
            }
        ]
    }
])