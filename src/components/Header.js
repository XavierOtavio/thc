import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSearch,
  faXmark,
  faAngleDown,
  faUser,
  faGear,
  faArrowRightFromBracket,
  faBookBookmark,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

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

        <Link to="/dashboard" className="mr-24">
          <button class="ml-2 block rounded px-10 py-3 font-medium text-thc2 hover:border-thc1 hover:bg-thc1 hover:text-white">
            Dashboard
          </button>
        </Link>
        {/* <Link to="/login">
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
        </Link> */}
        <div className="absolute mr-10 flex flex-col items-end justify-start">
          <button
            id="dropdownDividerButton"
            className="flex h-full w-12 items-center justify-center gap-2 "
            type="button"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <img
              src="https://cdn.discordapp.com/attachments/1082425024104894666/1082799435727253584/xSVMV6xD9Cf7K56wjeEF--1--2htnr.jpg"
              className="rounded-full object-cover text-3xl hover:outline hover:outline-thc1"
              alt="adminLogo"
            />
            {/* <FontAwesomeIcon icon={faAngleDown} color="white" size="lg" /> */}
          </button>
          {openMenu && (
            <div
              className={`z-10 ${
                openMenu ? "" : "hidden"
              }  mt-2 w-56 divide-y divide-gray-100 rounded-lg bg-white text-left shadow`}
            >
              <div className="py-2">
                <FontAwesomeIcon
                  icon={faAngleDown}
                  color="black"
                  size="lg"
                  className="ml-48 -mt-8"
                />
                <p className="block px-4 py-2 text-xs text-gray-500">
                  @EngXavierOtávio
                </p>
              </div>
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <Link
                    to="/bookings"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    <FontAwesomeIcon
                      icon={faBookmark}
                      color="black"
                      className="mx-2"
                    />
                    As minhas reservas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    className="block px-4 py-2 hover:bg-gray-100 "
                  >
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      color="black"
                      className="mx-2"
                    />
                    O meu carrinho
                  </Link>
                </li>
              </ul>
              <div className="py-2">
                <Link
                  to="/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                >
                  <FontAwesomeIcon
                    icon={faArrowRightFromBracket}
                    color="black"
                    className="mx-2"
                  />
                  Login com outra conta
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
