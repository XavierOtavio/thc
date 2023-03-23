import { useState } from "react";

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
    <div className="grid h-full w-full grid-cols-12 grid-rows-6">
      <div className="col-start-2 col-end-12 row-start-2 row-end-6 rounded-lg bg-thc4 shadow-lg">
        <div className="relative flex h-full w-full flex-col items-center justify-center py-16 px-32">
          <h1 className="absolute flex h-full w-full items-center justify-center font-mono text-6xl font-bold uppercase text-gray-900">
            <div className="absolute left-0 h-full w-32 rounded-l-lg bg-thc3">
              <span className="flex h-full -rotate-90 transform items-center justify-center whitespace-nowrap text-white ">
                Check-in
              </span>
            </div>
          </h1>
          <div className="relative flex h-full w-1/2 flex-col items-center justify-start gap-8">
            <div className="flex w-full flex-col items-start justify-start">
              <label
                htmlFor="booking"
                className="mb-2 block text-sm font-medium text-gray-900"
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
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value={0} disabled>
                  Escolha uma reserva
                </option>
                <option value={1}>Reserva 1</option>
                <option value={2}>Reserva 2</option>
                <option value={3}>Reserva 3</option>
              </select>
            </div>
            <div className="flex w-full flex-col items-start justify-start">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                disabled
                value={booking.name}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-start">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Quarto
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                disabled
                value={booking.room}
              />
            </div>
            <div className="absolute bottom-0 flex w-full items-center justify-center">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
