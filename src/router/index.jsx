import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "../layout";
import routes from "./routes"

const getRoutes = (allRoutes) =>
allRoutes.map((route) => {
  if (route.route) {
    return <Route path={route.route} element={route.component} key={route.key} />;
  }
  return null;
});


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {getRoutes(routes)}
        </Route>
        <Route path={"*"} element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
