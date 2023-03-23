import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function LayoutFront() {
  return (
    <div className="h-screen bg-stone-50">
      <div className="fixed z-10 w-full">
        <Header />
      </div>
      <div className="relative inset-0 top-24">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
