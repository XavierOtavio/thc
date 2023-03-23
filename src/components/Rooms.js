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
          <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-green-100 bg-green-600 rounded-full">
            Disponível
          </span>
        );
      case "maintenance":
        return (
          <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            Manutenção
          </span>
        );
      case "reserved":
        return (
          <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-indigo-100 bg-indigo-600 rounded-full">
            Reservado
          </span>
        );
      default:
        return (
          <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-gray-100 bg-gray-600 rounded-full">
            Não definido
          </span>
        );
    }
  };

  const typeBadge = (type) => {
    switch (type) {
      case "single":
        return (
          <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-blue-100 bg-blue-600 rounded-full">
            Individual
          </span>
        );
      case "double":
        return (
          <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-pink-100 bg-pink-600 rounded-full">
            Casal
          </span>
        );
      case "suite":
        return (
          <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-indigo-100 bg-indigo-600 rounded-full">
            Suite
          </span>
        );
      case "presidential":
        return (
          <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-yellow-100 bg-yellow-600 rounded-full">
            Presidencial
          </span>
        );
      default:
        return (
          <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-gray-100 bg-gray-600 rounded-full">
            Não definido
          </span>
        );
    }
  };

  return (
    <div className="h-full w-full grid grid-cols-12 grid-rows-6 items-start gap-10 py-10">
      <div className="col-start-2 col-end-12 row-start-1 row-end-2 h-full">
        <div className="h-full w-full bg-thc3 px-10 inline-flex items-center justify-between rounded-xl">
          <div className="h-full w-full flex items-center">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-thc2 ml-2 h-6 w-6 absolute"
            />
            <input
              className="text-gray-400 pl-10 focus:outline-none focus:ring focus:ring-thc2 bg-white font-normal w-64 h-10 flex items-center text-sm border-gray-300 rounded border shadow"
              placeholder="Por id ou nome do cliente"
            />
          </div>
          <div className="h-full w-full flex items-center justify-center text-white">
            <FontAwesomeIcon
              icon={faCaretLeft}
              className="text-thc2 ml-2 h-6 w-6 cursor-pointer"
            />
            A mostrar 1-10 de 10 resultados
            <FontAwesomeIcon
              icon={faCaretLeft}
              transform="rotate-180"
              className="text-thc2 ml-2 h-6 w-6 cursor-pointer"
            />
          </div>
          <div className="h-full w-full flex justify-end items-center">
            <button
              type="button"
              className="bg-thc2 text-white relative font-normal w-32 px-3 h-10 flex items-center text-sm border-gray-300 rounded border shadow"
            >
              <FontAwesomeIcon
                icon={faPlus}
                className="right-0 mr-3 h-6 w-6 absolute"
              />
              Adicionar
            </button>
          </div>
        </div>
      </div>
      <div className="col-start-2 col-end-12 row-start-2 row-end-7">
        <table className="h-full w-full bg-thc4 divide-y-2 divide-gray-200 text-sm rounded-xl">
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
                <td className="px-4 py-2 whitespace-nowrap">{room.id}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <img src={room.roomPhoto} className="h-16" />
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {typeBadge(room.tipo)}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {availabilityBadge(room.availability)}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="h-6 w-6 text-blue-700 cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="h-6 w-6 ml-2 text-red-700 cursor-pointer"
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
