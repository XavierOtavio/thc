import { useEffect, useState } from "react";
import { format, differenceInDays, subDays } from "date-fns";

export default function CheckIn() {
  const [booking, setBooking] = useState({
    id: 0,
    room: "",
    name: "",
    checkin: "",
    checkout: "",
    value: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const [waitingPayment, setWaitingPayment] = useState(true);
  useEffect(() => {
    if (openModal) {
      setTimeout(() => {
        setWaitingPayment(false);
      }, 4000);
    } else {
      setWaitingPayment(true);
    }
  }, [openModal]);

  const handleBooking = (e) => {
    if (e.target.value === 0) {
      setBooking({
        id: 0,
        room: "",
        name: "",
        checkin: "",
        checkout: "",
        value: "",
      });
    } else if (e.target.value === "1") {
      setBooking({
        id: e.target.value,
        name: "Marco António",
        room: "101",
        checkin: subDays(new Date(), 2),
        checkout: new Date(),
        value: 100,
      });
    } else if (e.target.value === "2") {
      setBooking({
        id: e.target.value,
        name: "João Pedro",
        room: "102",
        checkin: subDays(new Date(), 3),
        checkout: new Date(),
        value: 200,
      });
    } else if (e.target.value === "3") {
      setBooking({
        id: e.target.value,
        name: "Joana Marco",
        room: "105",
        checkin: subDays(new Date(), 5),
        checkout: new Date(),
        value: 1000,
      });
    } else {
      console.log("unexpected value");
      console.log(e.target.value);
    }
  };

  return (
    <div className="grid h-full w-full grid-cols-12 grid-rows-6">
      <div className="col-start-2 col-end-12 row-start-2 row-end-6 rounded-lg bg-thc4 shadow-lg">
        <div className="relative flex h-full w-full flex-col items-center justify-center py-16 pr-32 pl-48">
          <h1 className="absolute flex h-full w-full flex-row items-center justify-center font-mono text-6xl font-bold uppercase text-gray-900">
            <div className="absolute -left-8 h-full w-32 rounded-l-lg bg-thc3">
              <span className="flex h-full -rotate-90 transform items-center justify-center whitespace-nowrap text-white ">
                Check-out
              </span>
            </div>
          </h1>
          <div className="relative flex h-full w-full flex-row gap-8 pb-8">
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
                    Selecione uma reserva
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
                  disabled
                  type="text"
                  name="name"
                  id="name"
                  value={booking.name}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start">
                <label
                  htmlFor="checkin"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Data de entrada
                </label>
                <input
                  disabled
                  type="text"
                  name="checkin"
                  id="checkin"
                  value={
                    booking.checkout !== ""
                      ? format(booking.checkin, "dd-MM-yyyy")
                      : ""
                  }
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="relative flex h-full w-1/2 flex-col items-center justify-start gap-8">
              <div className="flex w-full flex-col items-start justify-start">
                <label
                  htmlFor="room"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Quarto
                </label>
                <input
                  disabled
                  type="text"
                  name="room"
                  id="room"
                  value={booking.room}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start">
                <label
                  htmlFor="value"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Valor
                </label>
                <input
                  disabled
                  type="text"
                  name="value"
                  id="value"
                  value={booking.value}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start">
                <label
                  htmlFor="checkout"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Data de saída
                </label>
                <input
                  disabled
                  type="text"
                  name="checkout"
                  id="checkout"
                  value={
                    booking.checkout !== ""
                      ? format(booking.checkout, "dd-MM-yyyy")
                      : ""
                  }
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpenModal(true)}
            disabled={booking.id === 0}
            className={`z-10 ${
              booking.id === 0 ? "cursor-not-allowed" : "cursor-pointer"
            } inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
          >
            Check-out
          </button>
        </div>
      </div>
      {openModal && (
        <>
          <div className="z-10 col-start-1 col-end-13 row-start-1 row-end-7 bg-black opacity-50 shadow-lg"></div>
          <div className="z-20 col-start-5 col-end-9 row-start-1 row-end-7 my-16 rounded-lg bg-thc4 shadow-lg">
            {waitingPayment ? (
              <div className="flex h-full w-full flex-col items-center justify-center">
                <p className="text-xl font-bold">A aguardar pagamento...</p>
              </div>
            ) : (
              <div className="flex h-full w-full flex-col items-center p-8 gap-8 relative">
                <p className="uppercase text-xl font-bold">Fatura</p>
                <div className="flex w-full flex-row items-center justify-center">
                  <div className="flex w-1/2 flex-col items-start justify-start">
                    <p className="text-sm">Nº reserva:</p>
                    <p className="text-sm">Cliente:</p>
                    <p className="text-sm">Empregado:</p>
                  </div>
                  <div className="flex w-1/2 flex-col items-start justify-start">
                    <p className="text-sm">{booking.id || 0}</p>
                    <p className="text-sm">
                      {booking.name || "[Introduzir nome]"}
                    </p>
                    <p className="text-sm">João Marco</p>
                  </div>
                </div>
                <span className="border border-gray-200 w-full -mb-8" />
                <table className="table w-full divide-y-2 divide-gray-200 rounded-xl text-sm">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Descrição
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Valor
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-left">
                    <tr className="h-1">
                      <td className="whitespace-nowrap px-4 py-2">
                        {differenceInDays(booking.checkout, booking.checkin)}{" "}
                        noites
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        {(Number(booking.value) * 0.76).toFixed(2) || 0.0}
                      </td>
                    </tr>
                    <tr className="h-1">
                      <td className="whitespace-nowrap px-4 py-2">
                        Taxa de serviço
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">0.00</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-left absolute bottom-4 inset-x-8 flex flex-col border-y-2">
                  <div className="border-y inline-flex absolute bottom-48 w-full">
                    <div className="whitespace-nowrap px-4 py-2 font-bold left-0 absolute">
                      Subtotal
                    </div>
                    <div className="whitespace-nowrap px-4 py-2 font-bold right-0 absolute">
                      {(Number(booking.value) * 0.76).toFixed(2) || 0.0}
                    </div>
                  </div>
                  <div className="border-y inline-flex absolute bottom-36 w-full">
                    <div className="whitespace-nowrap px-4 py-2 font-bold left-0 absolute">
                      Taxa (23%)
                    </div>
                    <div className="whitespace-nowrap px-4 py-2 font-bold right-0 absolute">
                      {(Number(booking.value) * 0.23).toFixed(2) || 0.0}
                    </div>
                  </div>
                  <div className="inline-flex absolute bottom-24 w-full border-y-2">
                    <div className="whitespace-nowrap px-4 py-2 font-bold text-xl left-0 absolute">
                      Total
                    </div>
                    <div className="whitespace-nowrap px-4 py-2 font-bold text-xl right-0 absolute">
                      {Number(booking.value).toFixed(2) || 0.0}
                    </div>
                  </div>
                  <button
                    onClick={() => setOpenModal(false)}
                    className="z-10 inline-flex w-full cursor-pointer justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
