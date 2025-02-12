import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import NewsPage from "../pages/NewsPage";
import Commercial from "../pages/Commercial";
import MainLayout from "../layouts/MainLayout";
import AgentSearchPage from "../pages/AgentSearchPage";
import PropertySearchPage from "../pages/PropertySearchPage";

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
