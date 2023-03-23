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
  faWifi,
  faSquareParking,
  faUtensils,
  faPersonSwimming,
  faDumbbell,
  faBellConcierge,
  faUser,
  faTv,
  faBath,
  faFan,
  faBed,
} from "@fortawesome/free-solid-svg-icons";

function RoomSearch() {
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
  let filteredLocation = [];
  return (
    <div>
      <section class="overflow-hidden bg-[url(https://images.unsplash.com/photo-1521783988139-89397d761dce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80)] bg-cover bg-center bg-no-repeat">
        <div class="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-16">
          <div class="text-center sm:text-left">
            <h2 class="text-2xl font-bold text-white shadow-lg sm:text-3xl md:text-5xl">
              Descubra os nossos incríveis quartos
            </h2>

            <p class="mb-8 hidden max-w-lg text-white/90 shadow-lg md:mt-6 md:block md:text-lg md:leading-relaxed">
              Aqui poderá encontrar os melhores quartos para a sua estadia.
              Temos uma grande variedade de quartos para todos os gostos.
            </p>

            <form className="flex">
              <button
                type="button"
                className={`mx-0.5 flex h-10 flex-row rounded border bg-white px-16 py-2 align-middle text-gray-500 shadow-sm hover:cursor-pointer ${
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
                  className="absolute top-40 z-40 mr-5 mt-28 rounded-md border border-gray-600 p-2 outline-red-500"
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
                <div className="absolute top-40 left-1/4 -ml-10 mt-28 w-60 rounded bg-white p-2">
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
      <section className="bg-white ">
        <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="relative z-10 lg:py-5">
              <div class="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="https://assets.tivolihotels.com/image/upload/q_auto,f_auto,c_limit,w_1378/media/minor/tivoli/images/hotels/tspm/rooms/topimage1920x1000/tspm_presidential-suite_5_1920x1000.jpg"
                  class="absolute inset-0 h-full aspect-video w-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div class="relative flex items-center bg-thc4 rounded-r-lg">
              <span class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 rounded-l-lg lg:bg-thc4"></span>

              <div class="px-32 sm:p-16 lg:py-16 text-left">
                <h2 class="text-2xl font-bold text-thc3 sm:text-3xl">
                  Quarto Presidencial
                </h2>

                <p class="mt-4 text-gray-600">
                  {" "}
                  Capacidade: <FontAwesomeIcon icon={faUser} />{" "}
                  <FontAwesomeIcon icon={faUser} />{" "}
                  <FontAwesomeIcon icon={faUser} />{" "}
                  <FontAwesomeIcon icon={faUser} />
                </p>

                <p class="mt-4 text-gray-600">
                  Serviços incluídos: <FontAwesomeIcon icon={faWifi} />
                  {""} <FontAwesomeIcon icon={faTv} />{" "}
                  <FontAwesomeIcon icon={faBath} />{" "}
                  <FontAwesomeIcon icon={faFan} />
                </p>

                <p class="mt-4 text-gray-600 mb-3">
                  Quarto com zona de estar espaçosa com secretária e sofá e
                  varanda. O quarto tem cama de...
                </p>

                <div className="w-full justify-end flex">
                  <span class="text-2xl font-bold text-thc1 ">1.000,00€</span>
                  <span class="text-sm font-medium text-gray-500">/noite</span>
                </div>

                <Link
                  to="/room"
                  class="mt-8 rounded border w-full justify-center flex border-thc1 bg-thc1 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-thc1 focus:outline-none focus:ring active:text-thc1"
                >
                  Adicionar ao carrinho
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="relative z-10 lg:py-5">
              <div class="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="https://www.hotelgarance.com/_novaimg/galleria/342681.jpg"
                  class="absolute inset-0 h-full aspect-video w-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div class="relative flex items-center bg-thc4 rounded-r-lg">
              <span class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 rounded-l-lg lg:bg-thc4"></span>

              <div class="px-32 sm:p-16 lg:py-16 text-left">
                <h2 class="text-2xl font-bold text-thc3 sm:text-3xl">
                  Quarto de Casal
                </h2>

                <p class="mt-4 text-gray-600">
                  {" "}
                  Capacidade: <FontAwesomeIcon icon={faUser} />{" "}
                  <FontAwesomeIcon icon={faUser} />
                </p>

                <p class="mt-4 text-gray-600">
                  Serviços incluídos: <FontAwesomeIcon icon={faWifi} />
                  {""} <FontAwesomeIcon icon={faTv} />{" "}
                  <FontAwesomeIcon icon={faBath} />{" "}
                  <FontAwesomeIcon icon={faFan} />
                </p>

                <p class="mt-4 text-gray-600 mb-5">
                  Com um quarto com cama de casal, a suite dispõe de wi-fi, uma
                  sala de estar com...
                </p>

                <div className="w-full justify-end flex">
                  <span class="text-2xl font-bold text-thc1 ">250,00€</span>
                  <span class="text-sm font-medium text-gray-500">/noite</span>
                </div>

                <Link
                  to="/room"
                  class="mt-8 rounded border w-full justify-center flex border-thc1 bg-thc1 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-thc1 focus:outline-none focus:ring active:text-thc1"
                >
                  Adicionar ao carrinho
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="relative z-10 lg:py-5">
              <div class="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="https://hotelemile.com/_novaimg/galleria/1493923.jpg"
                  class="absolute inset-0 h-full aspect-video w-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div class="relative flex items-center bg-thc4 rounded-r-lg">
              <span class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 rounded-l-lg lg:bg-thc4"></span>

              <div class="px-32 sm:p-16 lg:py-16 text-left">
                <h2 class="text-2xl font-bold text-thc3 sm:text-3xl">
                  Quarto Individual
                </h2>

                <p class="mt-4 text-gray-600">
                  {" "}
                  Capacidade: <FontAwesomeIcon icon={faUser} />
                </p>

                <p class="mt-4 text-gray-600">
                  Serviços incluídos: <FontAwesomeIcon icon={faWifi} />
                  {""} <FontAwesomeIcon icon={faTv} />{" "}
                  <FontAwesomeIcon icon={faBath} />{" "}
                  <FontAwesomeIcon icon={faFan} />
                </p>

                <p class="mt-4 text-gray-600 mb-5">
                  Localizados do 3º ao 6º piso do hotel, este quarto têm uma
                  varanda com vista plena sobre...
                </p>

                <div className="w-full justify-end flex">
                  <span class="text-2xl font-bold text-thc1 ">150,00€</span>
                  <span class="text-sm font-medium text-gray-500">/noite</span>
                </div>

                <Link
                  to="/room"
                  class="mt-8 rounded border w-full justify-center flex border-thc1 bg-thc1 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-thc1 focus:outline-none focus:ring active:text-thc1"
                >
                  Adicionar ao carrinho
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="relative z-10 lg:py-5">
              <div class="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="https://cdn-hweb.hsystem.com.br/603e8a92acb6940aa8b6bc13/4459f7a96dca47318f3cf31c16b86e98.jpg"
                  class="absolute inset-0 h-full aspect-video w-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div class="relative flex items-center bg-thc4 rounded-r-lg">
              <span class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 rounded-l-lg lg:bg-thc4"></span>

              <div class="px-32 sm:p-16 lg:py-16 text-left">
                <h2 class="text-2xl font-bold text-thc3 sm:text-3xl">Suite</h2>

                <p class="mt-4 text-gray-600">
                  {" "}
                  Capacidade: <FontAwesomeIcon icon={faUser} />{" "}
                  <FontAwesomeIcon icon={faUser} />{" "}
                  <FontAwesomeIcon icon={faUser} />{" "}
                  <FontAwesomeIcon icon={faUser} />
                </p>

                <p class="mt-4 text-gray-600">
                  Serviços incluídos: <FontAwesomeIcon icon={faWifi} />
                  {""} <FontAwesomeIcon icon={faTv} />{" "}
                  <FontAwesomeIcon icon={faBath} />{" "}
                  <FontAwesomeIcon icon={faFan} />
                </p>

                <p class="mt-4 text-gray-600 mb-3">
                  Suite com zona de estar espaçosa com secretária e sofá e
                  varanda. O quarto tem cama de...
                </p>

                <div className="w-full justify-end flex">
                  <span class="text-2xl font-bold text-thc1 ">700,00€</span>
                  <span class="text-sm font-medium text-gray-500">/noite</span>
                </div>

                <Link
                  to="/room"
                  class="mt-8 rounded border w-full justify-center flex border-thc1 bg-thc1 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-thc1 focus:outline-none focus:ring active:text-thc1"
                >
                  Adicionar ao carrinho
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RoomSearch;

