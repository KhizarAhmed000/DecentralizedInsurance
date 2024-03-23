import React from "react";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../../services/authcontext";

export default function Layout() {
  return (
    <>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </>
  );
}
