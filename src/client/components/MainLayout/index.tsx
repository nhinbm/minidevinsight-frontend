import React, { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <Outlet />
    </>
  );
};

export default MainLayout;
