import { createBrowserRouter } from "react-router";
import Home from "../../Pages/Home";
import Root from "../../Layouts/Root/Root";
import Register from "../../Pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/auth-register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    element: <div>Error | 404</div>,
  },
]);
