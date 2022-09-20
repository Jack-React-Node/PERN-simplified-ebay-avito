import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminRoutes from "./routes/AdminRoutes";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
      <Route path="*" element={<MainRoutes />}></Route>
      <Route path="/admin" element={<AdminRoutes />}></Route>
      </Routes>
      
    </BrowserRouter>

 
      
    </div>
  );
}

export default App;
