import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>react-router is here</div>,
  },
  {
    path: "/*",
    element: <div>Error | 404</div>,
  },
]);
