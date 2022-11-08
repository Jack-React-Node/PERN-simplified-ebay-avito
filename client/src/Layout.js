import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import SiteBar from "./components/SiteBar";
import Preloader from './components/modal/Preloader';
import ModalBar from './components/modal/ModalBar';

export default function  Layout(){

    return ( <>
      <Preloader />
        <Header />
          <NavBar />
        <div className="container col-2">
          <Banner />
          <div className="row">
          <SiteBar />
          <Outlet />
          </div>
          </div>
      <Footer />
      <ModalBar />

    </>);
}