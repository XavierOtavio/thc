import { useState, useEffect } from "react";

export default function CheckIn() {
  const [booking, setBooking] = useState({
    id: 0,
    name: "",
    room: "",
  });

  const handleBooking = (e) => {
    if (e.target.value === 0) {
      console.log(0);
      setBooking({ id: e.target.value, name: "", room: "" });
    } else if (e.target.value === "1") {
      console.log(1);
      setBooking({ id: e.target.value, name: "Marco António", room: "101" });
    } else if (e.target.value === "2") {
      console.log(2);
      setBooking({ id: e.target.value, name: "João Pedro", room: "102" });
    } else if (e.target.value === "3") {
      console.log(3);
      setBooking({ id: e.target.value, name: "Joana Marco", room: "105" });
    } else {
      console.log("unexpected value");
      console.log(e.target.value);
    }
  };

  return (
    <div className="h-full w-full grid grid-cols-12 grid-rows-6">
      <div className="col-start-2 col-end-12 row-start-2 row-end-6 bg-thc4 rounded-lg shadow-lg">
        <div className="h-full w-full flex flex-col justify-center items-center py-16  px-32">
          <div className="h-full w-1/2 flex flex-col justify-center items-start gap-8 relative">
            <h1 className="text-2xl font-bold text-gray-900 top-0 absolute uppercase font-mono">
              Check-in
            </h1>
            <div className="flex flex-col justify-start items-start w-full">
              <label
                htmlFor="booking"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Escolha a reserva
              </label>
              <select
                name="booking"
                id="booking"
                defaultValue={booking.id || 0}
                onChange={(e) => {
                  handleBooking(e);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value={0} disabled>
                  Escolha uma reserva
                </option>
                <option value={1}>Reserva 1</option>
                <option value={2}>Reserva 2</option>
                <option value={3}>Reserva 3</option>
              </select>
            </div>
            <div className="flex flex-col justify-start items-start w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                disabled
                value={booking.name}
              />
            </div>
            <div className="flex flex-col justify-start items-start w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Quarto
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                disabled
                value={booking.room}
              />
            </div>
            <div className="bottom-0 absolute w-full flex justify-center items-center">
              <button
                type="button"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full"
              >
                Aprovar Check-in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
