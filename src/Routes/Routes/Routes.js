import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import TermsAndConditions from "../../Other/TermsAndCondition/TermsAndConditions";
import Catagory from "../../Pages/Catagory/Catagory/Catagory";
import Home from "../../Pages/Home/Home/Home";
import News from "../../Pages/News/News/News";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/catagory/:id',
                element: <Catagory></Catagory>,
                loader: ({params}) => fetch(`http://localhost:5000/catagory/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <News></News>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            }
        ]
    }
])