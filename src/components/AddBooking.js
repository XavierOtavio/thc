import React from "react";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { Combobox } from "@headlessui/react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import ConfimationModal from "./ConfimationModal";
import { useLocation } from "react-router-dom";

export default function AddBooking() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);

  return (
    <section class="bg-gray-100">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="max-w-6xl text-left lg:col-span-2">
            <h2 class="text-3xl font-bold sm:text-4xl">Nova Reserva</h2>
          </div>
          <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-6 lg:p-12">
            <form action="" class="space-y-4">
              <div>
                <label
                  for="UserEmail"
                  class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-thc3 focus-within:ring-1 focus-within:ring-thc3"
                >
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Nome Completo"
                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span class="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    Nome completo
                  </span>
                </label>
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    for="UserEmail"
                    class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-thc3 focus-within:ring-1 focus-within:ring-thc3"
                  >
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="Nome Completo"
                      class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span class="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Email
                    </span>
                  </label>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                  <label
                    for="UserEmail"
                    class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-thc3 focus-within:ring-1 focus-within:ring-thc3"
                  >
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="Nome Completo"
                      class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span class="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Telefone
                    </span>
                  </label>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                  <label
                    for="UserEmail"
                    class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-thc3 focus-within:ring-1 focus-within:ring-thc3"
                  >
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="Nome Completo"
                      class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span class="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Morada
                    </span>
                  </label>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                  <label
                    for="UserEmail"
                    class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-thc3 focus-within:ring-1 focus-within:ring-thc3"
                  >
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="Nome Completo"
                      class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span class="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      NIF
                    </span>
                  </label>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                  <button
                    type="button"
                    className={`mx-0.5 flex h-10 w-full flex-row rounded bg-white px-16 py-2 align-middle text-gray-500 hover:cursor-pointer ${
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
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                  <div className="w-full">
                    <select class="h-10 rounded-l-md border border-gray-200 bg-gray-100 pl-3 pr-8 text-gray-500">
                      <option>individual</option>
                      <option>casal</option>
                      <option>suite</option>
                      <option>presidencial</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 7L10 10L13 7"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-4">
                <button
                  type="submit"
                  class="inline-block w-full rounded-lg bg-thc3 px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Reservar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
