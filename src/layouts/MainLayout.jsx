import React from "react";

import { Outlet } from "react-router-dom"; // Import Outlet

import Header from "../components/Header"; // Assuming you have a Header component

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
