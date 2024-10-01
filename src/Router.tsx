import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "./utils/protected-route";
import Root from "./pages/Route";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/products/:category/:filter?",
        element: <>product</>,
      },

      {
        element: <ProtectedRoute role="user" />,
        children: [
          {
            path: "/profile",
            element: <>profile</>,
          },
          {
            path: "/editprofile",
            element: <>edit profile</>,
          },
        ],
      },
      {
        element: <ProtectedRoute role="admin" />,
        children: [
          {
            path: "/admin",
            element: <>admin</>,
          },
        ],
      },
      {
        path: "*",
        element: <p>404 Error - Nothing here...</p>,
      },
    ],
  },
]);

export default router;
