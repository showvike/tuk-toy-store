import { createBrowserRouter } from "react-router-dom";
import Add from "../../Add/Add";
import Blogs from "../../Blogs/Blogs";
import Error from "../../Error/Error";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import Toy from "../../Toy/Toy";
import Toys from "../../Toys/Toys";
import Update from "../../Update/Update";
import UserToys from "../../UserToys/UserToys";
import Home from "../../home/Home/Home";
import Main from "../../layout/Main/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/toys",
        element: <Toys />,
        loader: () =>
          fetch(
            "https://b7a11-toy-marketplace-server-side-showvike-showvike.vercel.app/toys"
          ),
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <Toy />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a11-toy-marketplace-server-side-showvike-showvike.vercel.app/toy/${params.id}`
          ),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <Add />
          </PrivateRoute>
        ),
      },
      {
        path: "/user_toys",
        element: (
          <PrivateRoute>
            <UserToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a11-toy-marketplace-server-side-showvike-showvike.vercel.app/toy/${params.id}`
          ),
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
