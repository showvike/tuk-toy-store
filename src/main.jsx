import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./providers/AuthProvider";
import router from "./routes/Router/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <div className="font-fira-sans container mx-auto my-4">
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </React.StrictMode>
  </AuthProvider>
);
