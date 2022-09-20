import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Contacts from "../pages/Contacts";
import ProductView from "../pages/ProductView";
import ProductsList from "../pages/ProductsList";
import Layout from "../Layout";

function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductView />} />
          <Route path="prodlist/:page" element={<ProductsList />} />
          <Route path="contact" element={<Contacts />} />
        </Route>
      </Routes>

 

  );
}

export default MainRoutes;

