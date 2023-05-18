import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
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
    ],
  },
]);

export default router;
