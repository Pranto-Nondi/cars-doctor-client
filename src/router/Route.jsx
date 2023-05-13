import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main"
import Home from "../pages/Home/Home/Home"
import SignUp from "../pages/SignUp/SignUp"
import Login from "../pages/Login/Login"
import BookingService from "../pages/Booking/BookingService"
import PrivateRoute from "./PrivateRoute"
import BookingList from "../pages/BookingList/BookingList"
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/service/:id',
                element:<PrivateRoute> <BookingService /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allService/${params.id}`)

            },
            {
                path: '/bookings',
                element: <PrivateRoute><BookingList /></PrivateRoute>
            }
        ]
    },
])
export default router