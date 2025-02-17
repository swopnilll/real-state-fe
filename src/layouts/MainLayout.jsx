import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div className="w-screen h-screen text-black">
      <Header />
      <main>
        <Outlet />
      </main>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          &copy; 2025 Nepali in Australia Real Estate. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
