import { createBrowserRouter } from "react-router-dom";

import MainPage from "../pages/MainPage";
import About from "../pages/About";
import Error from "../pages/Error";
import MainLayout from "../components/layout/MainLayout";
import MyPage from "../pages/myPage/MyPage";
import { Suspense } from "react";

import { MyPageLoading, MainLoading } from "../components/loading";

import apiCaller from "../api/apiCaller";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
        <Suspense fallback={<MainLoading/>}>
          <MainPage />
        </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/myPage",
    element: (
    <Suspense fallback={<MyPageLoading/>}>
      <MyPage />
    </Suspense>
    ),
    errorElement: <Error />,
  },
]);

export default router;
