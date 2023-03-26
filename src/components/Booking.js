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
          <span className="mr-2 inline-flex items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs font-bold leading-none text-red-100">
            Cancelado
          </span>
        );
      case "concluded":
        return (
          <span className="mr-2 inline-flex items-center justify-center rounded-full bg-green-600 px-2 py-1 text-xs font-bold leading-none text-green-100">
            Concluído
          </span>
        );
      case "confirmed":
        return (
          <span className="mr-2 inline-flex items-center justify-center rounded-full bg-blue-600 px-2 py-1 text-xs font-bold leading-none text-blue-100">
            Confirmado
          </span>
        );
      case "pending":
        return (
          <span className="mr-2 inline-flex items-center justify-center rounded-full bg-yellow-600 px-2 py-1 text-xs font-bold leading-none text-yellow-100">
            Pendente
          </span>
        );
      default:
        return (
          <span className="mr-2 inline-flex items-center justify-center rounded-full bg-gray-600 px-2 py-1 text-xs font-bold leading-none text-gray-100">
            Não definido
          </span>
        );
    }
  };

  return (
    <div className="grid h-full w-full grid-cols-12 grid-rows-6 items-start gap-10 py-10">
      <div className="col-start-2 col-end-12 row-start-1 row-end-2 h-full">
        <div className="inline-flex h-full w-full items-center rounded-xl bg-thc3 px-10">
          <div className="relative flex items-center">
            <div className="flex h-full w-full items-center justify-between">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute ml-2 h-6 w-6 text-thc2"
              />
              <input
                className="flex h-10 w-64 items-center rounded border border-gray-300 bg-white pl-10 text-sm font-normal text-gray-400 shadow focus:outline-none focus:ring focus:ring-thc2"
                placeholder="Por id, nif ou nome do cliente"
              />
            </div>
            <div className="relative ml-10 flex items-center">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="absolute ml-2 h-6 w-6 text-thc2"
              />
              <button
                type="button"
                className={`flex h-10 w-64 items-center rounded border border-gray-300 bg-white pl-10 text-sm font-normal text-gray-400 shadow ${
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
                  className="absolute top-12 z-40 w-96 rounded-md border border-gray-600 outline-red-500"
                />
              )}
            </div>
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <div className="relative ml-10 flex items-center text-white">
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
          </div>
          <div className="flex h-full w-full items-center justify-end">
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
                <td className="whitespace-nowrap px-4 py-2">{booking.id}</td>
                <td className="whitespace-nowrap px-4 py-2">{booking.name}</td>
                <td className="whitespace-nowrap px-4 py-2">
                  {booking.checkin}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  {booking.checkout}
                </td>
                <td className="whitespace-nowrap px-4 py-2 underline">
                  <Link to="/dashboard/rooms" className="cursor-pointer">
                    {booking.room}
                  </Link>
                </td>
                <td className="whitespace-nowrap px-4 py-2">{booking.value}</td>
                <td className="whitespace-nowrap px-4 py-2">
                  {statusBadge(booking.status)}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="h-6 w-6 cursor-pointer text-blue-700"
                  />
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
