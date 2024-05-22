import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import MainLayout from "../components/layout/MainLayout";
import MyPage from "../pages/myPage/MyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/myPage",
    element: <MyPage />,
    errorElement: <Error />,
  },
]);

export default router;
