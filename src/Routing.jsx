import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Pagenotfound from "./feature/Pagenotfound";
import Home from "./feature/Home";
import Register from "./feature/Register";
import Productlist from "./feature/Productlist";
import Login from "./feature/Login";
import Cart from "./feature/Cart";
import Dashboard from "./feature/Admin/Dashboard";
import DefaultLayout from "./feature/DefaultLayout";
import AdminLayout from "./feature/Admin/AdminLayout";
import AdminDash from "./feature/Admin/AdminDash";
import Addproduct from "./feature/Admin/Addproduct";
import Viewproduct from "./feature/Admin/Viewproduct";
import { Protected, Protectedadmin } from "./feature/hiddenlinks";



const router = createBrowserRouter([
    {
        path: "/", element: <DefaultLayout><App /></DefaultLayout>,
        children: [
            { path: '', element: <Home /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            { path: "products", element: <Productlist /> },
            { path: "cart", element: <Protected><Cart /></Protected> },

        ]
    },
    {
        path: "/admin", element: <Protectedadmin> <AdminLayout><Dashboard /></AdminLayout></Protectedadmin>, children: [
            { path: "", element: <AdminDash /> },
            { path: "dash", element: <AdminDash /> },
            { path: "add", element: <Addproduct /> },
            { path: "edit/:id", element: <Addproduct /> },
            { path: "view", element: <Viewproduct /> },
            { path: "edit/:id", element: <Addproduct /> },
        ]
    },
    { path: '*', element: <Pagenotfound /> }
])

export default router