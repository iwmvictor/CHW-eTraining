import React from "react";
import AdminHeader from "./Header";
import { Outlet } from "react-router-dom";
import AdminFooter from "./Footer";

const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <Outlet />
      <AdminFooter />
    </>
  );
};

export default AdminLayout;
