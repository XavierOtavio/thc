import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCalendarDays,
  faEye,
  faTrash,
  faCaretLeft,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { format, addDays } from "date-fns";
import { DateRange } from "react-date-range";
import { Link } from "react-router-dom";

export default function Booking() {
  const [openDate, setOpenDate] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState({
    name: "",
    checkin: new Date(),
    checkout: addDays(new Date(), 7),
    status: "",
  });
  const [bookings, setBookings] = useState([
    {
      id: 1,
      name: "John Smith",
      checkin: "2023-05-01",
      checkout: "2023-05-03",
      status: "Confirmed",
      room: "0007",
      value: 120.0,
    },
    {
      id: 2,
      name: "Jane Doe",
      checkin: "2023-05-05",
      checkout: "2023-05-08",
      status: "Pending",
      room: "0002",
      value: 85.0,
    },
    {
      id: 3,
      name: "Bob Johnson",
      checkin: "2023-06-01",
      checkout: "2023-06-05",
      status: "Confirmed",
      room: "0005",
      value: 220.0,
    },
    {
      id: 4,
      name: "Sarah Wilson",
      checkin: "2023-07-10",
      checkout: "2023-07-13",
      status: "Cancelled",
      room: "0002",
      value: 500.0,
    },
    {
      id: 5,
      name: "David Brown",
      checkin: "2023-08-20",
      checkout: "2023-08-25",
      status: "Confirmed",
      room: "0010",
      value: 350.0,
    },
    {
      id: 6,
      name: "Amy Lee",
      checkin: "2023-09-01",
      checkout: "2023-09-02",
      status: "Confirmed",
      room: "0012",
      value: 75.0,
    },
    {
      id: 7,
      name: "Michael Davis",
      checkin: "2023-10-15",
      checkout: "2023-10-18",
      status: "Pending",
      room: "0009",
      value: 250.0,
    },
    {
      id: 8,
      name: "Karen White",
      checkin: "2023-11-20",
      checkout: "2023-11-25",
      status: "Confirmed",
      room: "0007",
      value: 420.0,
    },
    {
      id: 9,
      name: "Tom Johnson",
      checkin: "2023-12-24",
      checkout: "2023-12-27",
      status: "Cancelled",
      room: "0002",
      value: 200.0,
    },
    {
      id: 10,
      name: "Emily Wilson",
      checkin: "2024-01-05",
      checkout: "2024-01-07",
      status: "Confirmed",
      room: "0008",
      value: 100.0,
    },
  ]);

  const handleSelectDates = (ranges) => {
    setSearch({
      ...search,
      checkin: ranges.selection.startDate,
      checkout: ranges.selection.endDate,
    });
  };

  const statusBadge = (status) => {
    switch (status.toLowerCase()) {
      case "cancelled":
        return (
          <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            Cancelado
          </span>
        );
      case "concluded":
        return (
          <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-green-100 bg-green-600 rounded-full">
            Concluído
          </span>
        );
      case "confirmed":
        return (
          <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-blue-100 bg-blue-600 rounded-full">
            Confirmado
          </span>
        );
      case "pending":
        return (
          <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-yellow-100 bg-yellow-600 rounded-full">
            Pendente
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-gray-100 bg-gray-600 rounded-full">
            Não definido
          </span>
        );
    }
  };

  return (
    <div className="h-full w-full grid grid-cols-12 grid-rows-6 items-start gap-10 py-10">
      <div className="col-start-2 col-end-12 row-start-1 row-end-2 h-full">
        <div className="h-full w-full bg-thc3 px-10 inline-flex items-center rounded-xl">
          <div className="relative flex items-center">
            <div className="h-full w-full flex items-center justify-between">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-thc2 ml-2 h-6 w-6 absolute"
              />
              <input
                className="text-gray-400 pl-10 focus:outline-none focus:ring focus:ring-thc2 bg-white font-normal w-64 h-10 flex items-center text-sm border-gray-300 rounded border shadow"
                placeholder="Por id ou nome do cliente"
              />
            </div>
            <div className="relative flex items-center ml-10">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="text-thc2 ml-2 h-6 w-6 absolute"
              />
              <button
                type="button"
                className={`text-gray-400 pl-10 bg-white font-normal w-64 h-10 flex items-center text-sm border-gray-300 rounded border shadow ${
                  openDate
                    ? "ring ring-thc2"
                    : "outline outline-1 outline-black"
                }`}
                onClick={() => setOpenDate(!openDate)}
              >
                {`${format(
                  new Date(search.checkin),
                  "dd/MM/yyyy"
                )} até ${format(new Date(search.checkout), "dd/MM/yyyy")}`}
              </button>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  showSelectionPreview={true}
                  onChange={(item) => handleSelectDates(item)}
                  moveRangeOnFirstSelection={false}
                  fixedHeight={true}
                  ranges={[
                    {
                      startDate: search.checkin,
                      endDate: search.checkout,
                      key: "selection",
                    },
                  ]}
                  className="absolute top-12 w-96 z-40 rounded-md border border-gray-600 outline-red-500"
                />
              )}
            </div>
          </div>
          <div className="h-full w-full flex items-center justify-center">
            <div className="relative flex items-center ml-10 text-white">
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
          </div>
          <div className="h-full w-full flex items-center justify-end">
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
                Cliente
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                CheckIn
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                CheckOut
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Quarto
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Valor
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Estado
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="text-left">
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-b">
                <td className="px-4 py-2 whitespace-nowrap">{booking.id}</td>
                <td className="px-4 py-2 whitespace-nowrap">{booking.name}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {booking.checkin}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {booking.checkout}
                </td>
                <td className="px-4 py-2 whitespace-nowrap underline">
                  <Link to="/dashboard/rooms" className="cursor-pointer">
                    {booking.room}
                  </Link>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{booking.value}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {statusBadge(booking.status)}
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
