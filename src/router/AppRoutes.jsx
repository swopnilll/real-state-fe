import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import PropertySearchPage from "../pages/PropertySearchPage";
import AgentSearchPage from "../pages/AgentSearchPage";
import NewsPage from "../pages/NewsPage";
import Commercial from "../pages/Commercial";
import MainLayout from "../layouts/MainLayout";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignUp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/property-search" element={<PropertySearchPage />} />
        <Route path="/agent-search" element={<AgentSearchPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/commercial" element={<Commercial />} />

        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
