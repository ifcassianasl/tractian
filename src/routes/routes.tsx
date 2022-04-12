import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "../App";

import Assets from "../features/assets/Assets";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Assets />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
