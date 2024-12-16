import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import "./styles/globals.css";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "../src/routes/AppRoutes.jsx";

const router = createBrowserRouter(AppRoutes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
