import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage.jsx"
import ExpensesDetail from "../pages/ExpensesDetail";

function MainRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route
          exact
          path="/expensesDetail/:expensesId"
          element={<ExpensesDetail />}
        />
      </Routes>
    </Suspense>
  );
}

export default MainRouter;
