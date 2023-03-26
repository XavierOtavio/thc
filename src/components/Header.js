import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const location = useLocation();
  return (
    <div className=" flex h-24 items-center justify-center bg-thc3">
      <Link
        to="/"
        className="ml-3 flex h-full w-auto justify-start align-baseline "
      >
        <img
          src="https://i.ibb.co/tQbJSSQ/logo-01.png"
          alt="logo-01"
          border="0"
        />
      </Link>
      <div className="ml-2 mr-3 flex w-full justify-end align-baseline">
        <Link to="/">
          <button
            className={`${
              location.pathname === "/" ? "bg-thc1 text-white" : "text-thc2"
            } ml-2 block rounded px-10 py-3 font-medium hover:border-thc1 hover:bg-thc1 hover:text-white`}
          >
            Home
          </button>
        </Link>

        <Link to="/dashboard">
          <button class="ml-2 block rounded px-10 py-3 font-medium text-thc2 hover:border-thc1 hover:bg-thc1 hover:text-white">
            Dashboard
          </button>
        </Link>
        <Link to="/login">
          <button class="ml-2 block rounded px-10 py-3 font-medium text-thc2 hover:border-thc1 hover:bg-thc1 hover:text-white">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <button
            className={`${
              location.pathname === "/cart" ? "bg-thc1 text-white" : "text-thc2"
            } ml-2 block rounded px-4 py-3 font-medium hover:border-thc1 hover:bg-thc1 hover:text-white`}
          >
            <FontAwesomeIcon icon={faCartShopping} />

            <span class="sr-only">Cart</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
