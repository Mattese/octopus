import { Routes, Route } from "react-router-dom";
import { CurrencyDetail } from "../pages/CurrencyDetail";
import { Dashboard } from "../pages/dashboard";
import { CURRENCY_DETAIL, ROOT_URL } from "./routesConst";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROOT_URL} element={<Dashboard />} />
      <Route path={`${CURRENCY_DETAIL}/:id`} element={<CurrencyDetail />} />
    </Routes>
  );
};

export default AppRoutes;
