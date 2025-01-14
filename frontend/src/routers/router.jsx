import AddPage from "../pages/Add page";
import Basket from "../pages/Basket page";
import DetailPage from "../pages/Detail page";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import NotFound from "../pages/Not found";


const ROUTES = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "/basket",
                element: <Basket/>
            },
            {
                path: "/add",
                element: <AddPage/>
            },
            {
                path: "/detail/:id",
                element: <DetailPage/>
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
]

export default ROUTES