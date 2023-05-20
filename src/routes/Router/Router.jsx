import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Add from "../../pages/Add/Add";
import Blogs from "../../pages/Blogs/Blogs";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Toy from "../../pages/Toy/Toy";
import Toys from "../../pages/Toys/Toys";
import Update from "../../pages/Update/Update";
import UserToys from "../../pages/UserToys/UserToys";
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
