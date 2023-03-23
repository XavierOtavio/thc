import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { format, addDays } from "date-fns";
import { DateRange } from "react-date-range";

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
      id: "0001",
      name: "José Cuzinhas",
      checkin: "2021-10-10",
      checkout: "2021-10-10",
      status: "concluded",
      room: "1001",
      value: "120",
    },
  ]);

  const handleSelectDates = (ranges) => {
    setSearch({
      ...search,
      checkin: ranges.selection.startDate,
      checkout: ranges.selection.endDate,
    });
  };

  return (
    <div className="h-full w-full grid grid-cols-12 grid-rows-6 items-start gap-10 py-10">
      <div className="col-start-2 col-end-12 row-start-1 row-end-2 h-full">
        <div className="h-full w-full bg-thc3 px-10 inline-flex items-center rounded-xl">
          <div className="relative flex items-center">
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
                openDate ? "ring ring-thc2" : "outline outline-1 outline-black"
              }`}
              onClick={() => setOpenDate(!openDate)}
            >
              {`${format(new Date(search.checkin), "dd/MM/yyyy")} até ${format(
                new Date(search.checkout),
                "dd/MM/yyyy"
              )}`}
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
      </div>
      <div className="col-start-2 col-end-12 row-start-2 row-end-7 h-full">
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
                <td className="px-4 py-2 whitespace-nowrap">{booking.room}</td>
                <td className="px-4 py-2 whitespace-nowrap">{booking.value}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {booking.status}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <button className="bg-thc2 text-white px-2 py-1 rounded-md">
                    Editar
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded-md ml-2">
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
