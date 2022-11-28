import React from 'react';
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SiteBar from "./components/SiteBar";

const LayoutAdmin = () => {
    return (
        <div>
        <Header />
        <div className="container ">
        <div className="row">
        <SiteBar />
        <Outlet />
        </div>
        </div>
        <Footer />
        </div>
    );
};

export default LayoutAdmin;