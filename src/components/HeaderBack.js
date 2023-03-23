import {
  faSearch,
  faXmark,
  faAngleDown,
  faUser,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function HeaderBack() {
  const [search, setSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  return (
    <div className="h-24 flex justify-around flex-nowrap items-center flex-row content-start bg-thc3">
      <div className="w-full h-full inline-flex items-center justify-start ml-10">
        <FontAwesomeIcon
          icon={search ? faXmark : faSearch}
          color="white"
          size="lg"
          onClick={() => setSearch(!search)}
          className="cursor-pointer pr-6"
        />
        {search && (
          <input
            type="text"
            placeholder="Procurar reservas"
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
          />
        )}
      </div>
      <div className="w-full h-full items-center inline-flex justify-around gap-6">
        <Link to="/dashboard">
          <p
            className={`hover:border-thc1 hover:bg-thc1 hover:text-white hover:font-bold rounded-xl p-4 cursor-pointer ${
              location.pathname === "/dashboard"
                ? "text-thc2 font-bold"
                : "text-gray-500"
            }`}
          >
            Dashboard
          </p>
        </Link>
        <Link to="/dashboard/booking">
          <p
            className={`hover:border-thc1 hover:bg-thc1 hover:text-white hover:font-bold rounded-xl p-4 cursor-pointer ${
              location.pathname === "/dashboard/booking"
                ? "text-thc2 font-bold"
                : "text-gray-500"
            }`}
          >
            Reservas
          </p>
        </Link>
        <Link to="/dashboard/rooms">
          <p
            className={`hover:border-thc1 hover:bg-thc1 hover:text-white hover:font-bold rounded-xl p-4 cursor-pointer ${
              location.pathname === "/dashboard/rooms"
                ? "text-thc2 font-bold"
                : "text-gray-500"
            }`}
          >
            Quartos
          </p>
        </Link>
      </div>
      <div className="w-full h-full inline-flex items-center justify-center">
        <Link to="/" className="h-full">
          <img
            src="https://i.ibb.co/Hhkqd5w/THC-01.png"
            alt="logo-01"
            className="h-full py-5"
          />
        </Link>
      </div>
      <div className="w-full h-full inline-flex items-center justify-around gap-6">
        <Link to="/dashboard/checkin">
          <p
            className={`hover:border-thc1 hover:bg-thc1 hover:text-white hover:font-bold rounded-xl p-4 cursor-pointer ${
              location.pathname === "/dashboard/checkin"
                ? "text-thc2 font-bold"
                : "text-gray-500"
            }`}
          >
            CheckIn
          </p>
        </Link>
        <Link to="/dashboard/checkout">
          <p
            className={`hover:border-thc1 hover:bg-thc1 hover:text-white hover:font-bold rounded-xl p-4 cursor-pointer ${
              location.pathname === "/dashboard/checkout"
                ? "text-thc2 font-bold"
                : "text-gray-500"
            }`}
          >
            CheckOut
          </p>
        </Link>
      </div>
      <div className="w-full h-full flex flex-col items-end justify-start mr-10">
        <button
          id="dropdownDividerButton"
          className="h-full w-40 flex items-center justify-center gap-2"
          type="button"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1082425024104894666/1082799435727253584/xSVMV6xD9Cf7K56wjeEF--1--2htnr.jpg"
            className="rounded-3xl h-full py-5"
            alt="adminLogo"
          />
          <FontAwesomeIcon icon={faAngleDown} color="white" size="lg" />
        </button>
        {openMenu && (
          <div
            className={`z-10 ${
              openMenu ? "" : "hidden"
            } bg-white divide-y divide-gray-100 text-left rounded-lg shadow w-44`}
          >
            <div className="py-2">
              <p className="block px-4 py-2 text-xs text-gray-500">
                @EngXavierOtávio
              </p>
            </div>
            <ul className="py-2 text-sm text-gray-700">
              <li>
                <Link
                  to="/dashboard/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    color="black"
                    className="mx-2"
                  />
                  Perfil
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/settings"
                  className="block px-4 py-2 hover:bg-gray-100 "
                >
                  <FontAwesomeIcon
                    icon={faGear}
                    color="black"
                    className="mx-2"
                  />
                  Definições
                </Link>
              </li>
            </ul>
            <div className="py-2">
              <Link
                to="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
              >
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  color="black"
                  className="mx-2"
                />
                Sair
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
