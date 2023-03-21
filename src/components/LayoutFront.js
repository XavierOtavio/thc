import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
// import Footer from "./Footer";

export default function LayoutFront() {
  return (
    <div className="bg-stone-50 h-screen">
      <div className="fixed w-full z-10">
        <Header />
      </div>
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
