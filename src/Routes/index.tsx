import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as R from "./styles";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Sidebar from "../Components/Sidebar";

interface RoutesInterface {
  element: React.FC;
  path: string;
  private?: boolean;
  sidebar?: boolean;
  header?: boolean;
}

const AppRoutes: React.FC = () => {
  const [routes] = useState<RoutesInterface[]>([
    {
      element: Home,
      path: "/dashboard",
      sidebar: true,
    },
    {
      element: NotFound,
      path: "*",
    },
  ]);

  return (
    <Router>
      <Routes>
        {routes.map(({ element: Element, path, sidebar }) => (
          <Route
            element={
              <R.RoutesWrapper>
                {sidebar && <Sidebar />}
                <R.Content>
                  <Element />
                </R.Content>
              </R.RoutesWrapper>
            }
            path={path}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
