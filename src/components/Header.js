import React from "react";
import { Link, useLocation } from "react-router-dom";
// import Logotipo from "./Logotipo";

function Header() {
  const location = useLocation();
  return (
    <div className=" h-24 justify-center items-center flex bg-thc3">
      <Link
        to="/"
        className="w-auto h-full flex align-baseline justify-start ml-3 "
      >
        <img
          src="https://i.ibb.co/tQbJSSQ/logo-01.png"
          alt="logo-01"
          border="0"
        />
      </Link>
      <div className="w-full flex align-baseline justify-end ml-2 mr-3">
        <Link to="/">
          <button
            // class="block border border-red-600  px-10 py-3 text-red-600 ml-2 font-medium hover:border-red-600 hover:bg-red-600 hover:text-white"
            className={`${
              location.pathname === "/" ? "bg-thc1 text-white" : "text-thc2"
            } block rounded px-10 py-3 ml-2 font-medium hover:border-thc1 hover:bg-thc1 hover:text-white`}
          >
            Home
          </button>
        </Link>
        <Link to="/productsList">
          <button
            className={`${
              location.pathname === "/productsList"
                ? "bg-thc1 text-white"
                : "text-thc2"
            } block rounded px-10 py-3  ml-2 font-medium hover:border-thc1 hover:bg-thc1 hover:text-white`}
          >
            Catálogo
          </button>
        </Link>
        <Link to="/dashboard">
          <button class="block rounded px-10 py-3 text-thc2 ml-2 font-medium hover:border-thc1 hover:bg-thc1 hover:text-white">
            Dashboard
          </button>
        </Link>
        <Link to="/login">
          <button class="block rounded px-10 py-3 text-thc2 ml-2 font-medium hover:border-thc1 hover:bg-thc1 hover:text-white">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
