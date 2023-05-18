import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import Main from "../../layout/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
