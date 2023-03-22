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
  faLocationDot,
  faCalendarDays,
  faUserGroup,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
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
      <section class="relative bg-[url(https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-thc3 sm:to-white/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-6xl text-center sm:text-left">
            <h1 class="text-3xl font-serif sm:text-5xl text-white">
              Bem vindo ao
              <strong class="block font-serif text-thc1">
                Luxuoso Hotel THC
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
              Cozinha e moveis feito à medida por encomenda para corresponder às
              suas necessidades
            </p>
            <form className="flex">
              <button
                type="button"
                className={`mx-0.5 flex h-10 flex-row rounded bg-white px-16 py-2 align-middle text-gray-500 hover:cursor-pointer ${
                  openDate
                    ? "ring-1 ring-thc1"
                    : "outline outline-1 outline-black"
                }`}
                onClick={() => setOpenDate(!openDate)}
              >
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="h-5 w-5 text-gray-500 mr-4"
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
                className={`flex relative h-10 rounded bg-white py-2 px-9 align-middle text-gray-500 hover:cursor-pointer ${
                  openQuantityOptions
                    ? "ring-1 ring-thc1"
                    : "outline outline-1 outline-black"
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
                <NavLink to="/search">
                  {/* <MagnifyingGlassIcon className="ml-2 h-11 w-11 rounded-full bg-orange-500 stroke-white p-2 hover:cursor-pointer hover:bg-orange-600" /> */}
                  <button className="ml-2 h-10 rounded bg-thc1 py-2 px-3 align-middle flex text-white  hover:cursor-pointer hover:bg-thc2">
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

      <div id="cozinhas">
        <div class="bg-white">
          <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-3xl text-center">
              <h1 class="mt-2 text-3xl font-serif text-gray-900 sm:text-4xl">
                - Hotel Tio Honório Colaço -
              </h1>
              <h2 class="text-base font-light uppercase tracking-wide text-gray-500 mt-4">
                Bem-vindo ao hotel ideal para fugir da rotina diária.
                <p>
                  {" "}
                  O Hotel Tio Honório Colaço encontra-se envolvido por uma
                  paisagem verdejante, dominado pelas vinhas e uma frondosa
                  mata, onde o silêncio impera. É um boutique hotel de 5
                  estrelas, em que a envolvência convida-o a deixar-se levar
                  pelo ritmo, sons, cores e serenidade da natureza. Situado na
                  freguesia de Canas, integra um dos mais emblemáticos edifícios
                  históricos de Nelas. Oferece uma ligação única entre história,
                  natureza, design e sofisticação que se fundem de forma
                  excecional.
                </p>
              </h2>
            </div>
          </div>
        </div>
        <div class="grid gap-1 grid-cols-2 ml-16 mr-16 mb-16">
          <img
            alt="Les Paul"
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            class="aspect-video w-full object-cover"
          />

          <div class="grid grid-cols-2 gap-1">
            <img
              alt="Les Paul"
              src="https://images.unsplash.com/photo-1534679541758-8dc76ff8081d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80"
              class="aspect-video w-full  object-cover"
            />

            <img
              alt="Les Paul"
              src="https://images.unsplash.com/photo-1529290130-4ca3753253ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
              class="aspect-video w-full object-cover"
            />

            <img
              alt="Les Paul"
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              class="aspect-video w-full object-cover"
            />

            <img
              alt="Les Paul"
              src="https://offloadmedia.feverup.com/lisboasecreta.co/wp-content/uploads/2019/01/16105523/039_Atmosfia-e1547811185510.jpg"
              class="aspect-video w-full object-cover"
            />
          </div>
        </div>
      </div>
      <section className="bg-stone-300">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div class="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
              <div class="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                    Cozinhas
                  </h2>

                  <p class="mt-4 text-gray-500">
                    Encontre uma grande variadade de designs e materiais para ir
                    de encontro às suas espectativas
                  </p>
                </header>
                <Link
                  to="productsList"
                  class="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  <h1>Veja aqi!</h1>
                </Link>
              </div>
            </div>

            <div class="lg:col-span-2 lg:py-8">
              <ul class="grid grid-cols-2 gap-4">
                <li>
                  <Link to="#" class="group block">
                    <img
                      src="https://www.gower-furniture.co.uk/wp-content/uploads/2021/05/Capri-Dark-Grey.jpg"
                      alt=""
                      class="aspect-square w-full rounded object-cover"
                    />

                    <div class="mt-3">
                      <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Cozinha Deluxe
                      </h3>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="#" class="group block">
                    <img
                      src="https://www.eshoper.in/wp-content/uploads/2021/12/best-kitchen-furniture-latest-design-low-price-furnitures-store-panvel-kamothe-navi-mumbai.jpg"
                      alt=""
                      class="aspect-square w-full rounded object-cover"
                    />

                    <div class="mt-3">
                      <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Cozinha Cerâmica
                      </h3>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
              Negocios de confiança
            </h2>

            <p class="mt-4 text-gray-500 sm:text-xl">
              Qualidade comprovada e testada pelos nossos técnicos
            </p>
          </div>

          <div class="mt-8 sm:mt-12">
            <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt class="order-last text-lg font-medium text-gray-500">
                  Total Vendas
                </dt>

                <dd class="text-4xl font-extrabold text-red-600 md:text-5xl">
                  4.8M€
                </dd>
              </div>

              <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt class="order-last text-lg font-medium text-gray-500">
                  Casas
                </dt>

                <dd class="text-4xl font-extrabold text-red-600 md:text-5xl">
                  26000
                </dd>
              </div>

              <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt class="order-last text-lg font-medium text-gray-500">
                  moveis
                </dt>

                <dd class="text-4xl font-extrabold text-red-600 md:text-5xl">
                  122000
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
