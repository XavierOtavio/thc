import React from "react";

export default function ClientsDetails() {
  const boocking = [
    {
      roomtype: "Quarto Duplo",
      checkIn: "2022-03-20",
      checkOut: "2022-03-23",
      value: 350.0,
    },
    {
      roomtype: "Suíte Presidencial",
      checkIn: "2022-02-12",
      checkOut: "2022-02-16",
      value: 2500.0,
    },
    {
      roomtype: "Quarto Simples",
      checkIn: "2021-11-24",
      checkOut: "2021-11-27",
      value: 190.0,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl rounded-md bg-white p-6 shadow-md">
      <h1 className="mb-4 text-2xl font-bold">Detalhes do Cliente</h1>
      <div className="mb-4 flex justify-between">
        <div className="w-1/4">
          <img
            src="https://img.ibxk.com.br/2019/02/17/17124052466014.jpg"
            alt="Foto do Cliente"
            className="w-full rounded-md shadow-md"
          />
        </div>
        <div className="w-3/4 pl-4">
          <div className="mb-2">
            <label
              htmlFor="nome-completo"
              className="mb-2 block font-bold text-gray-700"
            >
              Nome Completo:
            </label>
            <input
              type="text"
              id="nome-completo"
              className="w-full rounded-md bg-gray-200 p-2"
              value="Mário Jorge Silva Faria"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="telefone"
              className="mb-2 block font-bold text-gray-700"
            >
              Telefone:
            </label>
            <input
              type="tel"
              id="telefone"
              className="w-full rounded-md bg-gray-200 p-2"
              value="912345678"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="mb-2 block font-bold text-gray-700"
            >
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md bg-gray-200 p-2"
              value="mario_faria@gmail.com"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="morada"
              className="mb-2 block font-bold text-gray-700"
            >
              Morada:
            </label>
            <input
              type="text"
              id="morada"
              className="w-full rounded-md bg-gray-200 p-2"
              value="Rua Quinta da Alagoa Lote 6 1º D"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="nif" className="mb-2 block font-bold text-gray-700">
              NIF:
            </label>
            <input
              type="text"
              id="nif"
              className="w-full rounded-md bg-gray-200 p-2"
              value="123456789"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl rounded-md bg-white p-6 shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Últimos Alojamentos</h1>
        <ul>
          {boocking.map((boocking, index) => (
            <li key={index} className="mb-4">
              <div className="mb-2 flex justify-between">
                <div className="font-bold">{boocking.roomtype}</div>
                <div className="text-gray-600">{`€${boocking.value.toFixed(
                  2
                )}`}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div className="text-sm text-gray-600">Check-in:</div>
                <div>{new Date(boocking.checkIn).toLocaleDateString()}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm text-gray-600">Check-out:</div>
                <div>{new Date(boocking.checkOut).toLocaleDateString()}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
