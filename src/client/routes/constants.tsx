import React, { LazyExoticComponent } from "react";

export interface IRoute {
  key: string;
  path: string;
  title: string;
  Component: LazyExoticComponent<React.ComponentType>;
  exact?: boolean;
  routes?: IRoute[];
}

export const MAIN_NAVIGATION: IRoute[] = [
  {
    key: "home",
    path: "/",
    title: "",
    Component: React.lazy(() => import("../pages/Homepage")),
  },
];
