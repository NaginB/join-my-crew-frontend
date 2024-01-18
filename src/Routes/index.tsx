import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as R from "./styles";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Sidebar from "../Components/Sidebar";
import AuthRoute from "./AuthRoute";

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
      private: false,
    },
    {
      element: NotFound,
      path: "*",
    },
  ]);

  const componentRenderHandler = ({
    element: Element,
    sidebar,
    private: checkAuth,
  }: RoutesInterface) => {
    const PathElement = sidebar ? (
      <R.RoutesWrapper>
        {sidebar && <Sidebar />}
        <R.Content>
          <Element />
        </R.Content>
      </R.RoutesWrapper>
    ) : (
      <Element />
    );

    if (checkAuth) return <AuthRoute element={PathElement} />;
    return PathElement;
  };

  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={`key-${route.path}`}
            element={<>{componentRenderHandler(route)}</>}
            path={route.path}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
