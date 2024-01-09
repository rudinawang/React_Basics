import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1> hello World</h1>,
  },
  {
    path: "/about",
    element: <h2>About Page</h2>,
  },
]);

export default router;
