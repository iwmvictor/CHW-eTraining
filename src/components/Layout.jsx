import React from "react";
import LandingHeader from "./Header";
import LandingFooter from "./Footer";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <>
      <LandingHeader />
      <Outlet />
      <LandingFooter />
    </>
  );
};

export default LandingLayout;
