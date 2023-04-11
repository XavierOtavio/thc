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

export default function ClientsList() {
  let rooms = [
    {
      id: "0001",
      username: "mario_faria",
      Photo: "https://img.ibxk.com.br/2019/02/17/17124052466014.jpg",
      name: "Mário Faria",
      pricenight: "120",
      phone: "912345678",
    },
    {
      id: "0002",
      username: "evabranco82",
      pricenight: "210",
      Photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSas-xn5pOMuKM0heNM05Q8f1UmhRSVyNLAzIhi_F1Xkg&s",
      name: "Eva Branco",
      phone: "912345678",
    },
    {
      id: "0003",
      username: "adolfo_dias_1893",
      pricenight: "680",
      Photo:
        "https://engenharia360.com/wp-content/uploads/2019/05/esta-pessoa-nao-existe-engenharia360-4.png",
      name: "Adolfo Dias",
      phone: "912345678",
    },
    {
      id: "0003",
      username: "jaacaboujessica123",
      pricenight: "400",
      Photo:
        "https://www.ignicaodigital.com.br/wp-content/uploads/2014/02/facebook-pessoas.jpg",
      name: "Jessica Antunes",
      phone: "912345678",
    },
    {
      id: "0003",
      username: "andre_sousa",
      pricenight: "400",
      Photo:
        "https://media.istockphoto.com/id/1327592506/pt/vetorial/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=1024x1024&w=is&k=20&c=32uXbA50TiDZc3oPryPONCJ1QxVOR9El_8AMl8aFqWs=",
      name: "André Sousa",
      phone: "912345678",
    },
    {
      id: "0003",
      username: "ana_gomes",
      pricenight: "400",
      Photo:
        "https://media.istockphoto.com/id/1327592506/pt/vetorial/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=1024x1024&w=is&k=20&c=32uXbA50TiDZc3oPryPONCJ1QxVOR9El_8AMl8aFqWs=",
      name: "Ana Gomes",
      phone: "912345678",
    },
  ];

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
            <Link to={"/dashboard/clientslist/new"}>
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
                Utilizador
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Nome
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Contacto
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
                  <img src={room.Photo} className="h-16 w-16 rounded-full" />
                </td>
                <td className="whitespace-nowrap px-4 py-2">{room.username}</td>
                <td className="whitespace-nowrap px-4 py-2">{room.name}</td>
                <td className="whitespace-nowrap px-4 py-2">{room.phone}</td>
                <td className="whitespace-nowrap px-4 py-2">
                  <Link to={"/dashboard/clientslist/clientsdetais"}>
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
