import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "../context/AuthContext";

// Public routes.
import Main from "../pages/Main/Main";
import PrivateLayout from "../components/PrivateLayout/PrivateLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RestorePassword from "../pages/RestorePassword/RestorePassword";
import ErrorPage from "../pages/_error";
import NotFoundPage from "../pages/404";

// Private routes.
import Dashboard from "../pages/Dashboard/Dashboard";

const RouterConfig = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route
          path="/login/"
          element={
            <PrivateLayout>
              <Login />
            </ PrivateLayout>
          }
        />
        <Route
          path="/register/"
          element={
            <PrivateLayout>
              <Register />
            </ PrivateLayout>
          }
        />
        <Route
          path="/restorepassword/"
          element={
            <PrivateLayout>
              <RestorePassword />
            </ PrivateLayout>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <Dashboard />
            </ PrivateRoute>
          }
        />
      </ Routes>
    </ BrowserRouter>
  </ AuthProvider>
);

export default RouterConfig;
