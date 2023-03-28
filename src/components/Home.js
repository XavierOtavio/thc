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
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import ConfimationModal from "./ConfimationModal";
import { useLocation } from "react-router-dom";

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
  let params = useParams();
  const [openConfrimationModal, setOpenConfrimationModal] = useState(false);
  let location = useLocation();

  return (
    <div>
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

      <div id="cozinhas">
        <div class="bg-white">
          <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-3xl text-center">
              <h1 class="mt-2 font-serif text-3xl text-gray-900 sm:text-4xl">
                - Hotel Tio Honório Colaço -
              </h1>
              <h2 class="mt-4 text-base font-light  tracking-wide text-gray-500">
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
        <div class="ml-16 mr-16 mb-16 grid grid-cols-2 gap-1">
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
                    Quartos
                  </h2>

                  <p class="mt-4 text-gray-500">
                    Encontre uma grande gama de quartos para todos os gostos, de
                    forma a desfrutar de uma estadia única.
                  </p>
                </header>
                <Link
                  to="/roomsearch"
                  class="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  <h1>Descobre mais!</h1>
                </Link>
              </div>
            </div>

            <div class="lg:col-span-2 lg:py-8">
              <ul class="grid grid-cols-2 gap-4">
                <li>
                  <Link to="/roomdetails/1" class="group block">
                    <img
                      src="https://assets.tivolihotels.com/image/upload/q_auto,f_auto,c_limit,w_1378/media/minor/tivoli/images/hotels/tspm/rooms/topimage1920x1000/tspm_presidential-suite_5_1920x1000.jpg"
                      alt=""
                      class="aspect-square w-full rounded object-cover"
                    />

                    <div class="mt-3">
                      <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Quarto Presidencial
                      </h3>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/roomdetails/2" class="group block">
                    <img
                      src="https://www.hotelgarance.com/_novaimg/galleria/342681.jpg"
                      alt=""
                      class="aspect-square w-full rounded object-cover"
                    />

                    <div class="mt-3">
                      <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Quarto de Casal
                      </h3>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class=" flex justify-center">
        <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="max-w-xl text-left">
            <h2 class="text-3xl font-bold sm:text-4xl">
              Descubra os nossos serviços
            </h2>

            <p class="mt-4 font-thin text-gray-500">
              O nosso hotel oferece uma grande variedade de serviços para que se
              sinta em casa. Desde o pequeno-almoço até ao serviço de quartos,
              passando pelo bar e restaurante, temos tudo o que precisa para uma
              estadia perfeita. Testado e aprovado pelo Selo de Qualidade
              Turística do senhor doutor Marcelo Rebelo de Sousa.
            </p>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 text-left md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div class="flex items-start gap-4">
              <FontAwesomeIcon icon={faWifi} className="h-8 w-8 text-thc1" />

              <div>
                <h2 class="text-lg font-bold">Wi-Fi</h2>

                <p class="mt-1 text-sm text-gray-500">
                  Gratuito em todo o hotel. Dispomos de uma rede de Wi-Fi de
                  alta velocidade (10Gbps) em todo o hotel, para que possa
                  navegar sem preocupações. Avaliado pela Deco com 5 estrelas.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faSquareParking}
                className="h-8 w-8 text-thc1"
              />

              <div>
                <h2 class="text-lg font-bold">Estacionamento</h2>

                <p class="mt-1 text-sm text-gray-500">
                  O estacionamento é gratuito para todos os hóspedes do hotel.
                  Dispõe de 500 lugares de estacionamento subterrâneo, com
                  vigilancia 24 horas por dia, 7 dias por semana e 365 dias por
                  ano e acesso directo ao hotel. Acessível apenas a carros,
                  motas, bicicletas, autocarros, autocaravanas e camiões.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faUtensils}
                className="h-8 w-8 text-thc1"
              />

              <div>
                <h2 class="text-lg font-bold">Restauração</h2>

                <p class="mt-1 text-sm text-gray-500">
                  Dispomos de 3 restaurantes, especialistas em gastronomia de
                  todo o mundo, com uma grande variedade de pratos e bebidas.
                  Inlcui ainda um bar de cocktails e um bar de snacks.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faPersonSwimming}
                className="h-8 w-8 text-thc1"
              />

              <div>
                <h2 class="text-lg font-bold">Piscinas</h2>

                <p class="mt-1 text-sm text-gray-500">
                  Piscinas exteriores e interiores. Horário de funcionamento:
                  9h00 - 22h00. A piscina exterior está aberta de Abril a
                  Outubro. Piscinas certificas pela Deco com 5 estrelas pois
                  cumprem com todos os requisitos de segurança e não apresentam
                  riscos para a saúde dos utilizadores tais como a presença de
                  bactérias, fungos, algas, e urina.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faDumbbell}
                className="h-8 w-8 text-thc1"
              />

              <div>
                <h2 class="text-lg font-bold">Ginásio</h2>

                <p class="mt-1 text-sm text-gray-500">
                  O ginásio está aberto 24 horas por dia, 7 dias por semana e
                  365 dias por ano. Equipado com aparelhos de última geração e
                  com personal trainers disponíveis para ajudar os hóspedes a
                  atingir os seus objectivos ou simplemente para se conhecerem
                  melhor.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faBellConcierge}
                className="h-8 w-8 text-thc1"
              />

              <div>
                <h2 class="text-lg font-bold">Serviço de quartos</h2>

                <p class="mt-1 text-sm text-gray-500">
                  Serviço de quartos extremamente rápido, eficiente e caro.
                  Ideal para quem quer impressionar a sua cara-metade com uma
                  garrafa de champanhe e morangos frescos no quarto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
