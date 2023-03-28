import { faX } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { Combobox } from "@headlessui/react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faUserGroup,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ConfimationModal(props) {
  const setOpenModal = props.setConfirmModal;
  const [quantityOptions, setQuantityOptions] = useState({
    pessoas: 2,
    quartos: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [query, setQuery] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openQuantityOptions, setOpenQuantityOptions] = useState(false);
  const handleQuantityOption = (item, operacao) => {
    setQuantityOptions((prev) => {
      return {
        ...prev,
        [item]:
          operacao === "mais"
            ? quantityOptions[item] + 1
            : quantityOptions[item] - 1,
      };
    });
  };

  return (
    <div>
      <div class="fixed z-50 flex h-[calc(100%-1rem)] w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-thc3/75 p-4 md:inset-0 md:h-full">
        <div class="h-full w-full max-w-4xl shadow-lg md:h-auto">
          {/* <!-- Modal content --> */}
          <div class="relative rounded-lg bg-white shadow">
            {/* <!-- Modal header --> */}
            <div class="flex  rounded-t border-b p-4 ">
              <h3 class="text-xl font-semibold text-gray-900">Aviso</h3>{" "}
              <Link
                to="/"
                class="ml-auto rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
              >
                <FontAwesomeIcon icon={faX} className="h-6 w-6" />
              </Link>
            </div>
            {/* <!-- Modal body --> */}
            <div class="space-y-6 p-6 text-center">
              <form class="grid grid-cols-6 gap-4">
                <h3 class="col-span-6 text-3xl font-semibold text-gray-900">
                  A sua reserva foi efetuada com sucesso!
                </h3>
                <div class="col-span-6 px-28 text-lg text-gray-900">
                  <p>
                    A sua reserva foi confirmada. Enviámos-lhe um email com os
                    detalhes da sua reserva ou pode consultá-los na aba "As
                    minhas reservas" no menu superior.
                  </p>
                  <p> Obrigado por escolher o Luxuoso Hotel THC.</p>
                </div>

                <div class="col-span-6 my-8">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="h-36 text-thc1"
                  />
                </div>
              </form>
            </div>
            {/* <!-- Modal footer --> */}
            <div class=" space-x-2 rounded-b border-t border-gray-200 p-6">
              <Link to="/">
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  class=" ml-2 w-full rounded border border-thc3 bg-thc3 px-10 py-3 font-medium text-white hover:border-thc3 hover:bg-transparent hover:text-thc3"
                >
                  OK
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* sdfgh */}

      <section class="relative bg-[url(https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-thc3 sm:to-white/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-6xl text-center sm:text-left">
            <h1 class="font-serif text-3xl text-white sm:text-5xl">
              Bem vindo ao
              <strong class="block font-serif text-thc1">
                Luxuoso Hotel THC
              </strong>
            </h1>

            <p class="bg-thc mt-4 max-w-lg font-thin text-white sm:text-xl sm:leading-relaxed">
              Descobre já onde vais passar as tuas próximas férias.
            </p>
            <form className="flex">
              <button
                type="button"
                className={`mx-0.5 flex h-10 flex-row rounded bg-white px-16 py-2 align-middle text-gray-500 hover:cursor-pointer ${
                  openDate ? "ring-1 ring-thc1" : "border shadow-sm"
                }`}
                onClick={() => setOpenDate(!openDate)}
              >
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="mr-4 h-5 w-5 text-gray-500"
                />
                {`${format(date[0].startDate, "dd/MM/yyyy")} até ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </button>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="absolute top-2/4 z-40 mr-5 mt-28 rounded-md border border-gray-600 p-2 outline-red-500"
                />
              )}
              <button
                className={`relative flex h-10 rounded bg-white py-2 px-9 align-middle text-gray-500 hover:cursor-pointer ${
                  openQuantityOptions ? "ring-1 ring-thc1" : "border shadow-sm"
                }`}
                type="button"
                onClick={() => setOpenQuantityOptions(!openQuantityOptions)}
              >
                <FontAwesomeIcon icon={faUserGroup} className="mr-2 h-6 w-6" />
                {quantityOptions.pessoas} Pessoas {quantityOptions.quartos}{" "}
                Quartos
              </button>
              {openQuantityOptions && (
                <div className="absolute top-2/4 left-2/4 -ml-60 mt-28 w-60 rounded bg-white p-2">
                  <div className="m-2 flex  justify-between">
                    <p>Pessoas</p>
                    <div className="flex items-center gap-5">
                      <button
                        className="h-6 w-6 border border-black hover:border-thc1"
                        type="button"
                        onClick={() => handleQuantityOption("pessoas", "menos")}
                      >
                        -
                      </button>
                      <span>{quantityOptions.pessoas}</span>
                      <button
                        className="h-6 w-6 border border-black hover:border-thc1"
                        type="button"
                        onClick={() => handleQuantityOption("pessoas", "mais")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="m-2 flex justify-between">
                    <p>Quartos</p>
                    <div className="flex items-center gap-5">
                      <button
                        className="h-6 w-6 border border-black hover:border-thc1"
                        type="button"
                        onClick={() => handleQuantityOption("quartos", "menos")}
                      >
                        -
                      </button>
                      <span>{quantityOptions.quartos}</span>
                      <button
                        className="h-6 w-6 border border-black hover:border-thc1"
                        type="button"
                        onClick={() => handleQuantityOption("quartos", "mais")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <NavLink to="/roomsearch">
                  <button className="ml-2 flex h-10 rounded bg-thc1 py-2 px-3 align-middle text-white  hover:cursor-pointer hover:bg-thc2">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      color="white"
                      className="mr-3 mt-1 h-4"
                    />
                    Pesquisar
                  </button>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ConfimationModal;
