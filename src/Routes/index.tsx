import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as R from "./styles";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Sidebar from "../Components/Sidebar";
import AuthRoute from "./AuthRoute";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Explore from "../Pages/Explore";
import Chat from "../Pages/Chat";
import TestPage from "../Pages/Test";
import Account from "../Pages/Account";
import Landing from "../Pages/Landing";
import ViewProfile from "../Pages/Profile/ViewProfile";
import CreatorDetails from "../Pages/CreatorDetails";
import Thankyou from "../Pages/Thankyou";
import ResetPassword from "../Pages/ResetPassword";
import ForgotPassword from "../Pages/ForgotPassword";

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
      element: Login,
      path: "/login",
      sidebar: false,
    },
    {
      element: Landing,
      path: "/",
      sidebar: false,
    },
    {
      element: SignUp,
      path: "/signup",
      sidebar: false,
    },
    {
      element: SignUp,
      path: "/signup/:role",
      sidebar: false,
    },
    {
      element: Home,
      path: "/home",
      sidebar: true,
      private: true,
    },
    {
      element: Explore,
      path: "/explore",
      sidebar: true,
      private: true,
    },
    {
      element: Chat,
      path: "/messages",
      sidebar: true,
      private: true,
    },
    {
      element: TestPage,
      path: "/test",
      sidebar: false,
      private: false,
    },
    {
      element: Account,
      path: "/account",
      sidebar: true,
      private: true,
    },
    {
      element: ViewProfile,
      path: "/profile/:id",
      sidebar: true,
      private: true,
    },
    {
      element: CreatorDetails,
      path: "/creator-details",
      sidebar: false,
      private: true,
    },
    {
      element: Thankyou,
      path: "/thankyou-for-applying",
      sidebar: false,
      private: true,
    },
    {
      element: ResetPassword,
      path: "/password/reset",
      sidebar: false,
      private: true,
    },
    {
      element: ForgotPassword,
      path: "/password/forgot",
      sidebar: false,
      private: true,
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
