import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminPanel from "../pages/AdminPanel";
import AdminChange from "../pages/AdminChange";
import AdminAdd from "../pages/AdminAdd";
import LayoutAdmin from "../LayoutAdmin";

function AdminRoutes() {
  return (
    <Routes>
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<AdminPanel />} />
          <Route path="change-product/:id" element={<AdminChange />} />
          <Route path="add-product" element={<AdminAdd />} />
        </Route>
       </Routes>

 

  );
}

export default AdminRoutes;

