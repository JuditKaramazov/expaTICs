'use client'

import React, { useState } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "../../components/Sidebar/Sidebar";
import Menu from "./Menu/Menu";
import Community from "./Community/Community";
import Solidarity from "./Solidarity/Solidarity";
import Support from "./Support/Support";
import Privacy from "./Privacy/Privacy";
import { AuthProvider } from "../../context/AuthContext";
import { WikiContextProvider } from "../../context/WikiContext";

const Pages = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #ff4f7e 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

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
