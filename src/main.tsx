import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { userRoutes } from "./routes/userRoutes.tsx";

const router = createBrowserRouter([...userRoutes]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
);
