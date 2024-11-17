import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import PH from "../components/PH/PH";
import PH_child from "../components/PH/PH_child";
import SignUP from "../components/SignUP/SignUP";
import Login from "../components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
        children: [
          {
            path: "/about/ph",
            element: <PH></PH>,
            children: [
              {
                path: "/about/ph/child",
                element: <PH_child></PH_child>,
              },
            ],
          },
        ],
      },
      {
        path: "/signUp",
        element: <SignUP></SignUP>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
