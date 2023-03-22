import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPencil,
  faTrash,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function RoomList() {
  const [search, setSearch] = useState({ role: "", name: "" });
  const [page, setPage] = useState(1);

  let orders = [
    {
      id: "0001",
      tipo: "Individual",
      roomPhoto: "https://hotelemile.com/_novaimg/galleria/1493923.jpg",
      availability: "occupied",
      pricenight: "120",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
      hab: "Supervisonar operações, gerir staff",
    },
    {
      id: "0002",
      tipo: "Casal",
      pricenight: "210",
      roomPhoto: "https://www.hotelgarance.com/_novaimg/galleria/342681.jpg",
      availability: "available",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
      hab: "Planejar, desenvolver e implementar",
    },
    {
      id: "0003",
      tipo: "Presidencial",
      pricenight: "680",
      roomPhoto:
        "https://assets.tivolihotels.com/image/upload/q_auto,f_auto,c_limit,w_1378/media/minor/tivoli/images/hotels/tspm/rooms/topimage1920x1000/tspm_presidential-suite_5_1920x1000.jpg",
      availability: "reserved",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
      hab: "Controlar qualidade de MP e PF",
    },
    {
      id: "0003",
      tipo: "Duplex",
      pricenight: "400",
      roomPhoto:
        "https://cdn-hweb.hsystem.com.br/603e8a92acb6940aa8b6bc13/4459f7a96dca47318f3cf31c16b86e98.jpg",
      availability: "maintenance",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
      hab: "Controlar qualidade de MP e PF",
    },
  ];

  const statusBadge = (availability) => {
    switch (availability) {
      case "available":
        return (
          <span class="mr-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-black">
            Vago
          </span>
        );
      case "occupied":
        return (
          <span class="mr-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-black">
            Ocupado
          </span>
        );
      case "maintenance":
        return (
          <span class="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-black">
            Manutenção
          </span>
        );
      case "reserved":
        return (
          <span class="mr-2 rounded bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-black">
            Reservado
          </span>
        );

      default:
        return (
          <span class="mr-2 rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
            Não definido
          </span>
        );
    }
  };
  const filteredOrders = orders.filter((order) => {
    if (search.role === "" && search.name === "") return order;
    if (search.role === "" && search.name !== "") {
      if (order.id.includes(search.name)) return order;
    } else if (search.role !== "" && search.name === "") {
      if (order.role === search.role) return order;
    } else {
      if (order.role === search.role && order.name.includes(search.name))
        return order;
    }
    return null;
  });

  const calculateRange = (data) => {
    const range = [];
    const num = Math.ceil(data.length / 8);
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    return range;
  };

  const sliceData = (data, page) => {
    return data.slice((page - 1) * 8, page * 8);
  };

  return (
    <div className="absolute inset-x-32 inset-y-16 overflow-x-auto bg-stone-200 shadow-md sm:rounded-lg">
      <div className="flex justify-between pb-4 align-baseline">
        <div className="relative mx-6 my-3 flex-[1]">
          <label htmlFor="statusCheck" className="text-sm font-semibold ">
            Filtrar por tipo:
          </label>
          <select
            name="statusCheck"
            id="statusCheck"
            onChange={(e) =>
              setSearch((search) => ({ ...search, status: e.target.value }))
            }
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 "
          >
            <option value="">Todos</option>
            <option value={"Individual"}>Quarto individual</option>
            <option value={"Casal"}>Quarto casal</option>
            <option value={"Presidencial"}>Quarto presidencial</option>
          </select>
        </div>
        <div className="relative mx-6 my-3 flex-[1]">
          <label htmlFor="statusCheck" className="text-sm font-semibold ">
            Filtrar por Estado:
          </label>
          <select
            name="statusCheck"
            id="statusCheck"
            onChange={(e) =>
              setSearch((search) => ({ ...search, status: e.target.value }))
            }
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 "
          >
            <option value="">Todos</option>
            <option value={"Individual"}>Vago</option>
            <option value={"Casal"}>Manutenção</option>
            <option value={"Presidencial"}>Reservado</option>
            <option value={"Presidencial"}>Ocupado</option>
          </select>
        </div>
        <div className="relative mx-6 my-3 flex-[1]">
          <label htmlFor="orderIdCheck" className="text-sm font-semibold ">
            Filtrar por Nome:
          </label>
          <input
            name="orderIdCheck"
            id="orderIdCheck"
            onChange={(e) =>
              setSearch((search) => ({ ...search, orderId: e.target.value }))
            }
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 "
          />
        </div>
        <div>
          <button
            type="button"
            class="ml-2 inline-block border border-red-600 bg-red-600 px-10 py-4 font-medium text-white hover:border-red-700 hover:bg-red-700"
          >
            Adicionar quarto
          </button>
        </div>
        <div className="flex-[2]" />
      </div>
      <table className="w-full table-fixed text-left text-sm text-stone-500">
        <thead className="text-xs uppercase text-stone-900 ">
          <tr>
            <th className="px-6 py-3" scope="col">
              Nº Identificação
            </th>
            <th className="px-6 py-3" scope="col">
              Quarto
            </th>
            <th className="px-6 py-3" scope="col">
              Estado
            </th>
            <th className="px-6 py-3" scope="col">
              Habilitado para:
            </th>

            <th className="px-6 py-3" scope="col">
              Ações
            </th>
            <th className="px-6 py-3" scope="col">
              Custo/Noite
            </th>
          </tr>
        </thead>
        <tbody>
          {sliceData(filteredOrders, page).map((order) => (
            <tr key={order.id} className="border-b bg-stone-100">
              <th
                scope="row"
                className="cursor-pointer whitespace-nowrap px-6 py-3"
              >
                {order.id}
              </th>
              <td className="cursor-pointer whitespace-nowrap px-6 py-3">
                <div className="flex items-center">
                  <div className="h-10 w-20 flex-shrink-0">
                    <img
                      className="h-10 w-20 rounded-3xl"
                      src={order.roomPhoto}
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium">{order.tipo}</div>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                {statusBadge(order.availability)}
              </td>
              <td className="whitespace-nowrap px-6 py-3">{order.hab}</td>
              <td className="px-6 py-3">
                <div className="inline-grid grid-cols-5 gap-4">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="w-6 cursor-pointer text-indigo-600 hover:text-indigo-900"
                  />
                  <FontAwesomeIcon
                    icon={faPencil}
                    className="w-6 cursor-pointer text-indigo-600 hover:text-indigo-900"
                  />

                  <FontAwesomeIcon
                    icon={faBook}
                    className="w-6 cursor-pointer text-indigo-600 hover:text-indigo-900"
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="w-6 cursor-pointer text-indigo-600 hover:text-indigo-900"
                  />
                </div>
              </td>
              <td>{`${order.pricenight}.00€`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
