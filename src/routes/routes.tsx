import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "../App";

import Assets from "../features/assets/Assets";
import Users from "../features/users/Users";
import Units from "../features/units/Units";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Assets />} />
          <Route path="/users" element={<Users />} />
          <Route path="/units" element={<Units />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
