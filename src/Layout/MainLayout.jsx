import React from "react";
import { Outlet } from "react-router-dom";
import { LogoSection, Menu, Navbar } from "../components";
import BottomNavigation from "../components/bottomNavigation";

function MainLayout() {
  return (
    <>
      <Navbar />
      <LogoSection />
      <Menu />
      <Outlet />
      <BottomNavigation />
    </>
  );
}

export default MainLayout;
