import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  faCaretLeft,
  faPhone,
  faEnvelope,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

export default function BookingDetail() {
  const [page, setPage] = useState(1);
  const len = 3;
  const navigate = useNavigate();
  const location = useLocation();
  const [history, setHistory] = useState([]);
  const Booking = location.state?.data;

  useEffect(() => {
    setHistory(statusHistory(Booking));
  }, []);

  useEffect(() => {
    console.log(history);
    console.log(sliceData(history, page, len));
  }, [history]);

  const calculateRange = (data, len) => {
    const range = [];
    const num = Math.ceil(data.length / len);
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    return range;
  };

  const sliceData = (data, page, len) => {
    return data.slice((page - 1) * len, page * len);
  };
  const showProducts = () => {
    const products = [
      "Quarto Individual",
      "Quarto Casal",
      "Quarto Presidencial",
      "Quarto Duplex",
    ];
    return (
      <p>
        {Math.floor(Math.random() * 8) + 1} noite{" "}
        {products[Math.floor(Math.random() * products.length)]}
      </p>
    );
  };
  const addDays = (date, days, offset) => {
    let finalDate = new Date(date);
    return finalDate.setDate(
      finalDate.getDate() + Math.floor(Math.random() * days) + offset
    );
  };
  const statusHistory = (Booking) => {
    let aux = [];
    const status = ["WaitingPayment", "Pending", "Confirmed"];
    const canceledStatus = ["Canceled"];
    if (canceledStatus.includes(Booking.status)) {
      if (Booking.status === "Canceled") {
        aux.push({
          statusDate: new Date(
            addDays(Booking.bookingDate, 5, 1)
          ).toLocaleDateString(),
          status: "WaitingPayment",
          observations: ["Error", ""],
        });
        aux.push({
          statusDate: new Date(
            addDays(Booking.bookingDate, 10, 5)
          ).toLocaleDateString(),
          status: "Canceled",
          observations: [
            "Done",
            "Foi feita uma tentativa de contato sem sucesso",
          ],
        });
      }
    } else if (status.includes(Booking?.status)) {
      for (let i = 0; i < status.length; i++) {
        if (status[i] === "Pending" && Booking.status === "Confirmed") continue;
        aux.push({
          statusDate: new Date(
            addDays(Booking.bookingDate, 10 * i + 5, 10 * i + 1)
          ).toLocaleDateString(),
          status: status[i],
          observations:
            status[i] === Booking.status
              ? Booking.status === "Confirmed"
                ? ["Done", ""]
                : ["InProgress", "À espera de confirmação"]
              : ["Done", ""],
        });
        if (status[i] === Booking.status) break;
      }
    }
    console.log("AUX: ", aux);
    return aux;
  };

  const statusBadge = (status) => {
    switch (status) {
      case "Canceled":
        return (
          <span className="mr-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
            Cancelado
          </span>
        );
      case "Pending":
        return (
          <span className="mr-2 rounded bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
            Pendente
          </span>
        );
      case "WaitingPayment":
        return (
          <span className="mr-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
            À espera de pagamento
          </span>
        );
      case "Confirmed":
        return (
          <span className="mr-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
            Confirmado
          </span>
        );
      default:
        return (
          <span className="mr-2 rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
            Não definido
          </span>
        );
    }
  };

  return (
    <>
      <div className="absolute bottom-32 left-32 right-16 top-0 ">
        <div className="inline-flex h-16 w-full items-center justify-start gap-4 align-baseline">
          <FontAwesomeIcon
            icon={faCaretLeft}
            className="h-8 w-8 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <h1 className="text-2xl font-bold">ID da reserva: {Booking?.id}</h1>
        </div>
        <div className="grid h-full grid-cols-12 grid-rows-6">
          <div className="col-span-4 row-span-3 m-2 flex flex-col rounded-lg bg-stone-200 px-16 py-8">
            <img
              className="h-24 w-24 rounded-xl py-2"
              src={Booking?.profilePhoto}
              alt="profile"
            />
            <p className="pt-2 text-left text-xl font-bold">{Booking?.name}</p>
            <p className="pb-2 text-left text-sm font-light text-stone-500">
              @{Booking?.user}
            </p>
            <a
              href={`tel:${Booking?.phone}`}
              className="inline-flex gap-2 py-2 text-sm"
            >
              <FontAwesomeIcon icon={faPhone} className="h-4 w-4" />{" "}
              {Booking?.phone}
            </a>
            <a
              href={`mail:${Booking?.email}`}
              className="inline-flex gap-2 py-2 text-sm"
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />{" "}
              {Booking?.email}
            </a>
            <span className="inline-flex gap-2 py-2 text-sm">
              <FontAwesomeIcon icon={faHouse} className="h-4 w-4" />{" "}
              {Booking?.address}
            </span>
          </div>
          <div className="col-span-8 row-span-3 m-2 flex flex-col rounded-lg bg-stone-200 px-16 py-8 text-left">
            <p className="pb-2 text-2xl font-bold">Detalhes da reserva</p>
            <p className="py-2 text-base">Data check-in: {Booking?.checkin}</p>
            <p className="py-2 text-base">
              Data check-out: {Booking?.checkout}
            </p>
            <div className="inline-flex gap-2 py-2">
              <label className=" text-base">Status: </label>
              <select
                className="bBooking-2 bBooking-stone-500 rounded-lg text-base"
                name="status"
                id="status"
                defaultValue={Booking?.status}
              >
                <option value="">Não definido</option>
                <option value="Canceled">Cancelado</option>
                <option value="WaitingPayment">À espera de pagamento</option>
                <option value="Confirmed">Confirmado</option>
                <option value="Pending">Pendente</option>
              </select>
            </div>
            <p className="py-2 text-base">
              Valor: {(Math.random() * 4000 + 50).toFixed(2)} €
            </p>
            <p className="py-2 text-base">
              Método de pagamento:{" "}
              {
                [
                  "MbWay",
                  "Cheque",
                  "Bitcoin ",
                  "Paypal",
                  "Cartão de crédito",
                ].sort(() => Math.random() - 0.5)[0]
              }
            </p>
            <div className="flex flex-row gap-2 py-2">
              <label className=" text-base">Quarto: </label>
              <p className="flex flex-col">{Booking.room}</p>
            </div>
            <div className="flex flex-row gap-2 py-2">
              <label className=" text-base">Reserva: </label>
              <p className="flex flex-col">{showProducts()}</p>
            </div>
          </div>

          <div className="col-span-8 row-span-3 m-2 flex flex-col rounded-lg bg-stone-200 px-16 py-8 text-left">
            <h2 class="mb-2 text-left text-lg font-semibold text-gray-900 dark:text-white">
              Serviços:
            </h2>
            <ul class="max-w-md list-inside space-y-1 text-gray-500 dark:text-gray-400">
              <li class="flex items-center">
                <input type="checkbox" class="form-checkbox" name="suite" />
                <span class="ml-2 text-gray-700">Pequeno almoço</span>
              </li>
              <li class="flex items-center">
                <input type="checkbox" class="form-checkbox" name="televisao" />
                <span class="ml-2 text-gray-700">Almoço</span>
              </li>
              <li class="flex items-center">
                <input
                  type="checkbox"
                  class="form-checkbox"
                  name="servico-quarto"
                />
                <span class="ml-2 text-gray-700">Ginasio</span>
              </li>
              <li class="flex items-center">
                <input type="checkbox" class="form-checkbox" name="varanda" />
                <span class="ml-2 text-gray-700">Spa</span>
              </li>
              <li>
                <label
                  for="UserEmail"
                  class="block text-xs font-medium text-gray-700"
                >
                  Adicionar opção
                </label>
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="jacuzzi"
                  class="mt-1 w-full rounded-md border-gray-500 shadow-sm sm:text-sm"
                />
              </li>
            </ul>
            <div class="relative w-full">
              <input
                type="file"
                id="image-upload"
                class="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              />
              <button
                type="button"
                class="focus:shadow-outline-blue bg-yhc3 rounded-md border bg-thc3 py-2 px-4 font-semibold text-white hover:bg-thc3 focus:outline-none active:bg-thc3"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
