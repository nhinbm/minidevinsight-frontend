import React, { Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./client/components/MainLayout";
import { IRoute, MAIN_NAVIGATION } from "./client/routes/constants";

const AppContainer: React.FC = () => {
  const RouteView = useCallback(
    (routeData: IRoute[], isChild = false) =>
      routeData.map(({ key, Component, path, routes }) => (
        <Route
          key={key}
          element={
            <Suspense>
              <Component />
            </Suspense>
          }
          path={path}
        >
          {routes && RouteView(routes, true)}
        </Route>
      )),
    []
  );

  return (
    <main>
      <Routes>
        <Route element={<MainLayout />}>{RouteView(MAIN_NAVIGATION)}</Route>
      </Routes>
    </main>
  );
};

export default AppContainer;
