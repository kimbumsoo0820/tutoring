import { createBrowserRouter } from "react-router-dom";

import MainPage from "../pages/MainPage";
import About from "../pages/About";
import Error from "../pages/Error";
import MainLayout from "../components/layout/MainLayout";
import React, { Suspense } from "react";

import { MyPageLoading, MainLoading } from "../components/loading";

const LazyMyPage = React.lazy(() => import('../pages/myPage/MyPage'))

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
      <LazyMyPage />
    </Suspense>
    ),
    errorElement: <Error />,
  },
]);

export default router;
