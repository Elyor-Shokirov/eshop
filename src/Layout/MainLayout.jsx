import React from "react";
import { Outlet } from "react-router-dom";
import { LogoSection, Menu, Navbar } from "../components";

function MainLayout() {
  return (
    <>
      <Navbar />
      <LogoSection />
      <Menu />
      <Outlet />
    </>
  );
}

export default MainLayout;
