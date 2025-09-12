import React from "react";
import StudentHeader from "./Header";
import StudentFooter from "./Footer";
import { Outlet } from "react-router-dom";
import ChatBot from "../../components/ChatBot";

const StudentLayout = () => {
  return (
    <>
      <StudentHeader />
      <Outlet />
      <ChatBot />
      <StudentFooter />
    </>
  );
};

export default StudentLayout;
