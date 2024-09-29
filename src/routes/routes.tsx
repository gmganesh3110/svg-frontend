import React from "react";
import Login from "../pages/auth/login";
import Dashboard from "../pages/dashboard/dashboard";

const routes = [
  { path: "/", element: <Dashboard />, exact: true },
  { path: "/login", element: <Login />, exact: true },
];

export default routes;
