import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from './Layout';
import LayoutAdmin from "./LayoutAdmin";
import AdminAdd from "./pages/AdminAdd";
import AdminChange from "./pages/AdminChange";
import AdminPanel from "./pages/AdminPanel";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import ProductView from "./pages/ProductView";
import ProductsList from "./pages/ProductsList";
import Empty from "./pages/Empty";

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductView />} />
          <Route path="prod-list/:page" element={<ProductsList />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Empty />} />
        </Route>
      <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<AdminPanel />} />
          <Route path="change-product/:id" element={<AdminChange />} />
          <Route path="add-product" element={<AdminAdd />} />
      </Route>

      </Routes>
      
    </BrowserRouter>

 
      
    </div>
  );
}

export default App;
