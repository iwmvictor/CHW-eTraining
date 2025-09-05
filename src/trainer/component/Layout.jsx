import React from "react";
import TrainerHeader from "./Header";
import { Outlet } from "react-router-dom";
import TrainerFooter from "./Footer";

const TrainerLayout = () => {
  return (
    <>
      <TrainerHeader />
      <Outlet />
      <TrainerFooter />
    </>
  );
};

export default TrainerLayout;
