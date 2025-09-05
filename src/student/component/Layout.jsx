import React from "react";
import StudentHeader from "./Header";
import StudentFooter from "./Footer";
import { Outlet } from "react-router-dom";

const StudentLayout = () => {
  return (
    <>
      <StudentHeader />
      <Outlet />
      <StudentFooter />
    </>
  );
};

export default StudentLayout;
