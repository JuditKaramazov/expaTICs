'use client'

import React, { useState } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { Pages } from "./Dashboard.styled";
import { AnimatePresence } from "framer-motion";
import Sidebar from "../../components/Sidebar/Sidebar";
import Menu from "./Menu/Menu";
import Community from "./Community/Community";
import Solidarity from "./Solidarity/Solidarity";
import Support from "./Support/Support";
import Privacy from "./Privacy/Privacy";
import { AuthProvider } from "../../context/AuthContext";
import { WikiContextProvider } from "../../context/WikiContext";

function Dashboard() {
  const location = useLocation();
  const [selectedRoute, setSelectedRoute] = useState("");

  const handleRouteChange = (route) => {
    setSelectedRoute(route);
  };

  return (
    <>
      <Sidebar handleRouteChange={handleRouteChange} />
      <Pages>
        <AnimatePresence mode="wait" initial={false}>
          <AuthProvider>
            <WikiContextProvider>
                <Routes location={location}>
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="/solidarity" element={<Solidarity />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route
                    path="*"
                    element={
                      selectedRoute ? <Navigate to={selectedRoute} /> : <Navigate to="/dashboard/menu" />
                    }
                  />
                </ Routes>
            </ WikiContextProvider>
          </ AuthProvider>
        </ AnimatePresence>
      </ Pages>
    </>
  );
}

export default Dashboard;
