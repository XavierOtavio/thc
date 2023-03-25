import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
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
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function RoomDetailsFront() {
  const id = useParams();
  const [roomData, setRoomData] = useState({});

  useEffect(() => {
    switch (id[1]) {
      case "1":
        setRoomData({
          id: "0001",
          name: "Quarto Presidencial",
          capacity: 4,
          roomPhoto:
            "https://assets.tivolihotels.com/image/upload/q_auto,f_auto,c_limit,w_1378/media/minor/tivoli/images/hotels/tspm/rooms/topimage1920x1000/tspm_presidential-suite_5_1920x1000.jpg",
          availability: "available",
          description:
            "Quarto com zona de estar espaçosa com secretária e sofá e varanda. O quarto tem cama de casal e uma vista incrível sobre a cidade. É possível ver o rio Tejo e o Castelo de São Jorge. O quarto tem uma casa de banho com banheira e chuveiro separados. O quarto tem uma área de 110 m2.",
          pricenight: "680",
          phone: "912345678",
        });
        break;
      case "2":
        setRoomData({
          id: "0002",
          name: "Quarto de Casal",
          capacity: 2,
          pricenight: "210",
          roomPhoto:
            "https://www.hotelgarance.com/_novaimg/galleria/342681.jpg",
          availability: "available",
          description:
            "Quarto com cama de casal e casa de banho privada. Conta com uma varanda com vista para o rio Tejo. O quarto tem uma área de 40 m2.",
          phone: "912345678",
        });
        break;
      case "3":
        setRoomData({
          id: "0001",
          name: "Quarto Individual",
          capacity: 1,
          roomPhoto: "https://hotelemile.com/_novaimg/galleria/1493923.jpg",
          availability: "available",
          description:
            "Localizados do 3º ao 6º piso do hotel, este quarto têm uma varanda com vista plena sobre o rio Tejo. O quarto tem uma área de 25 m2 mais 5 m2 de varanda.",
          pricenight: "120",
          phone: "912345678",
        });
        break;
      case "4":
        setRoomData({
          id: "0003",
          name: "Suite",
          capacity: 4,
          pricenight: "400",
          roomPhoto:
            "https://cdn-hweb.hsystem.com.br/603e8a92acb6940aa8b6bc13/4459f7a96dca47318f3cf31c16b86e98.jpg",
          availability: "maintenance",
          phone: "912345678",
        });
        break;

      default:
        break;
    }

    console.log(id[1]);
  }, []);

  const capacityIcons = (capacity) => {
    switch (capacity) {
      case 1:
        return (
          <div class="flex items-center space-x-2">
            <FontAwesomeIcon icon={faUser} />
            <span>1</span>
          </div>
        );
        break;
      case 2:
        return (
          <div class="flex items-center space-x-2">
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faUser} />
            <span>2</span>
          </div>
        );
        break;
      case 3:
        return (
          <div class="flex items-center space-x-2">
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faUser} />
            <span>3</span>
          </div>
        );
        break;
      case 4:
        return (
          <div class="flex items-center space-x-2">
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faUser} />
            <span>4</span>
          </div>
        );
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <Link to="/">
        <button>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </Link>
      <section>
        <div class="relative mx-auto max-w-screen-xl px-4 py-8">
          <div class="grid gap-8 lg:grid-cols-4 lg:items-start">
            <div class="lg:col-span-3">
              <div class="relative mt-4">
                <img
                  alt="Tee"
                  src={roomData.roomPhoto}
                  class="h-72 w-full rounded-xl object-cover lg:h-[540px]"
                />

                <div class="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white">
                  <svg
                    class="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>

                  <span class="ml-1.5 text-xs"> Hover to zoom </span>
                </div>
              </div>

              <ul class="mt-1 flex gap-1">
                <li>
                  <img
                    alt="Tee"
                    src={roomData.roomPhoto}
                    class="h-16 w-16 rounded-md object-cover"
                  />
                </li>

                <li>
                  <img
                    alt="Tee"
                    src={roomData.roomPhoto}
                    class="h-16 w-16 rounded-md object-cover"
                  />
                </li>

                <li>
                  <img
                    alt="Tee"
                    src={roomData.roomPhoto}
                    class="h-16 w-16 rounded-md object-cover"
                  />
                </li>

                <li>
                  <img
                    alt="Tee"
                    src={roomData.roomPhoto}
                    class="h-16 w-16 rounded-md object-cover"
                  />
                </li>
              </ul>
            </div>

            <div class="lg:sticky lg:top-0">
              <form class="space-y-4 lg:pt-8">
                <h1 class="text-left text-2xl font-bold lg:text-3xl">
                  {roomData.name}
                </h1>
                <div class="-ml-0.5 flex">
                  <svg
                    class="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    class="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    class="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    class="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    class="h-5 w-5 text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div class=" text-left">
                  <div class="mt-4 flex space-x-2 text-gray-600">
                    <span>Capacidade:</span>
                    {capacityIcons(roomData.capacity)}
                  </div>

                  <p class="mt-4 text-gray-600">
                    Serviços incluídos: <FontAwesomeIcon icon={faWifi} />
                    {""} <FontAwesomeIcon icon={faTv} />{" "}
                    <FontAwesomeIcon icon={faBath} />{" "}
                    <FontAwesomeIcon icon={faFan} />
                  </p>
                </div>

                <fieldset>
                  <legend class="text-left text-lg font-bold">
                    Serviços Adicionais +
                  </legend>
                  <div class="mt-2 flex gap-1">
                    <label class="cursor-pointer ">
                      <span class=" rounded-lg border border-gray-200 px-3 py-1 text-lg">
                        <input
                          type="checkbox"
                          id="material_cotton"
                          name="material"
                          class="mr-3 "
                        />
                        Teste 1
                      </span>
                    </label>
                  </div>
                  <div class="mt-2 flex gap-1">
                    <label class="cursor-pointer ">
                      <span class=" rounded-lg border border-gray-200 px-3 py-1 text-lg">
                        <input
                          type="checkbox"
                          id="material_cotton1"
                          name="material1"
                          class="mr-3"
                        />
                        Teste 2
                      </span>
                    </label>
                  </div>
                </fieldset>

                <div class="rounded border bg-gray-100 p-4">
                  <p class="text-sm">
                    <span class="block"> Poupa até 20% com o código vski!</span>
                    <Link
                      to="https://www.facebook.com/Tiagovski555/posts/2945153248845448/?locale=zh_CN"
                      class="mt-1 inline-block underline"
                    >
                      Find out more{" "}
                    </Link>{" "}
                  </p>
                </div>

                <div>
                  <p class="text-xl font-bold">{roomData.pricenight}.00€</p>
                </div>

                <button
                  type="button"
                  class="w-full rounded bg-thc1 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                >
                  Adicionar ao carrinho
                </button>
              </form>
            </div>

            <div class="lg:col-span-3">
              <div class="prose max-w-none">
                <p className="text-justify">{roomData.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RoomDetailsFront;
