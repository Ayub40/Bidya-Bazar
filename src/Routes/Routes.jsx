import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home"
import AllClasses from "../Pages/AllClasses/AllClasses";
import TeachBidyaBazar from "../Pages/TeachBidyaBazar/TeachBidyaBazar";
// import BecomeInstructors from "../Pages/BecomeInstructors/BecomeInstructors";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'allClasses',
                element: <AllClasses></AllClasses>
            },
            {
                path: 'TeacherApply',
                // element: <TeacherApply></TeacherApply>
                // element: <BecomeInstructors></BecomeInstructors>
                element: <TeachBidyaBazar></TeachBidyaBazar>
            }
        ]
    }
])

