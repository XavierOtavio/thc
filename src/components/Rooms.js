import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCalendarDays,
  faEye,
  faTrash,
  faCaretLeft,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import { useState } from "react";

export default function RoomList() {
  let rooms = [
    {
      id: "0001",
      tipo: "single",
      roomPhoto: "https://hotelemile.com/_novaimg/galleria/1493923.jpg",
      availability: "available",
      pricenight: "120",
      phone: "912345678",
    },
    {
      id: "0002",
      tipo: "double",
      pricenight: "210",
      roomPhoto: "https://www.hotelgarance.com/_novaimg/galleria/342681.jpg",
      availability: "available",
      phone: "912345678",
    },
    {
      id: "0003",
      tipo: "presidential",
      pricenight: "680",
      roomPhoto:
        "https://assets.tivolihotels.com/image/upload/q_auto,f_auto,c_limit,w_1378/media/minor/tivoli/images/hotels/tspm/rooms/topimage1920x1000/tspm_presidential-suite_5_1920x1000.jpg",
      availability: "reserved",
      phone: "912345678",
    },
    {
      id: "0003",
      tipo: "suite",
      pricenight: "400",
      roomPhoto:
        "https://cdn-hweb.hsystem.com.br/603e8a92acb6940aa8b6bc13/4459f7a96dca47318f3cf31c16b86e98.jpg",
      availability: "maintenance",
      phone: "912345678",
    },
  ];

  const availabilityBadge = (availability) => {
    switch (availability) {
      case "available":
        return (
          <span class="mr-2 inline-flex items-center justify-center rounded-full bg-green-600 px-2 py-1 text-xs font-bold leading-none text-green-100">
            Disponível
          </span>
        );
      case "maintenance":
        return (
          <span class="mr-2 inline-flex items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs font-bold leading-none text-red-100">
            Manutenção
          </span>
        );
      case "reserved":
        return (
          <span class="mr-2 inline-flex items-center justify-center rounded-full bg-indigo-600 px-2 py-1 text-xs font-bold leading-none text-indigo-100">
            Reservado
          </span>
        );
      default:
        return (
          <span class="mr-2 inline-flex items-center justify-center rounded-full bg-gray-600 px-2 py-1 text-xs font-bold leading-none text-gray-100">
            Não definido
          </span>
        );
    }
  };

  const typeBadge = (type) => {
    switch (type) {
      case "single":
        return (
          <span class="mr-2 inline-flex items-center justify-center rounded-full bg-blue-600 px-2 py-1 text-xs font-bold leading-none text-blue-100">
            Individual
          </span>
        );
      case "double":
        return (
          <span class="mr-2 inline-flex items-center justify-center rounded-full bg-pink-600 px-2 py-1 text-xs font-bold leading-none text-pink-100">
            Casal
          </span>
        );
      case "suite":
        return (
          <span class="mr-2 inline-flex items-center justify-center rounded-full bg-indigo-600 px-2 py-1 text-xs font-bold leading-none text-indigo-100">
            Suite
          </span>
        );
      case "presidential":
        return (
          <span class="mr-2 inline-flex items-center justify-center rounded-full bg-yellow-600 px-2 py-1 text-xs font-bold leading-none text-yellow-100">
            Presidencial
          </span>
        );
      default:
        return (
          <span class="mr-2 inline-flex items-center justify-center rounded-full bg-gray-600 px-2 py-1 text-xs font-bold leading-none text-gray-100">
            Não definido
          </span>
        );
    }
  };

  return (
    <div className="grid h-full w-full grid-cols-12 grid-rows-6 items-start gap-10 py-10">
      <div className="col-start-2 col-end-12 row-start-1 row-end-2 h-full">
        <div className="inline-flex h-full w-full items-center justify-between rounded-xl bg-thc3 px-10">
          <div className="flex h-full w-full items-center">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute ml-2 h-6 w-6 text-thc2"
            />
            <input
              className="flex h-10 w-64 items-center rounded border border-gray-300 bg-white pl-10 text-sm font-normal text-gray-400 shadow focus:outline-none focus:ring focus:ring-thc2"
              placeholder="Por id ou nome do cliente"
            />
          </div>
          <div className="flex h-full w-full items-center justify-center text-white">
            <FontAwesomeIcon
              icon={faCaretLeft}
              className="ml-2 h-6 w-6 cursor-pointer text-thc2"
            />
            A mostrar 1-10 de 10 resultados
            <FontAwesomeIcon
              icon={faCaretLeft}
              transform="rotate-180"
              className="ml-2 h-6 w-6 cursor-pointer text-thc2"
            />
          </div>
          <div className="flex h-full w-full items-center justify-end">
            <Link to={"/dashboard/rooms/addroom"}>
              <button
                type="button"
                className="relative flex h-10 w-32 items-center rounded border border-gray-300 bg-thc2 px-3 text-sm font-normal text-white shadow"
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className="absolute right-0 mr-3 h-6 w-6"
                />
                Adicionar
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-start-2 col-end-12 row-start-2 row-end-7">
        <table className="h-full w-full divide-y-2 divide-gray-200 rounded-xl bg-thc4 text-sm">
          <thead>
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                ID
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Foto
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Tipo
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Disponibilidade
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="text-left">
            {rooms.map((room) => (
              <tr key={room.id} className="border-b">
                <td className="whitespace-nowrap px-4 py-2">{room.id}</td>
                <td className="whitespace-nowrap px-4 py-2">
                  <img src={room.roomPhoto} className="h-16" />
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  {typeBadge(room.tipo)}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  {availabilityBadge(room.availability)}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <Link to={"/dashboard/rooms/" + room.id}>
                    <FontAwesomeIcon
                      icon={faEye}
                      className="h-6 w-6 cursor-pointer text-blue-700"
                    />
                  </Link>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="ml-2 h-6 w-6 cursor-pointer text-red-700"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
