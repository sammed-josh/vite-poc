import { createBrowserRouter } from "react-router-dom";
import ROUTES from "./constant";
import Base from "../modules/Base";
import Home from "../modules/Home";

const routes : any = [
    {
        path: ROUTES.BASE,
        element: <Base/>
    },
    {
        path: ROUTES.HOME,
        element : <Home/>
    }
]

export const router = createBrowserRouter(routes , {basename : ROUTES.BASE})