import React from "react";

export default function AddClients() {
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
      <h1 className="mb-4 text-2xl font-bold">Adicionar Cliente</h1>
      <div className="mb-4 flex justify-between">
        <div className="w-1/4 flex-col">
          <img
            src="https://media.istockphoto.com/id/1327592506/pt/vetorial/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=1024x1024&w=is&k=20&c=32uXbA50TiDZc3oPryPONCJ1QxVOR9El_8AMl8aFqWs="
            alt="Foto do Cliente"
            className="w-full rounded-md shadow-md"
          />
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
              Adicionar imagem
            </button>
          </div>
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
              placeholder="João Faria Pereira"
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
              placeholder="999999999"
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
              placeholder="teste@teste.com"
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
              placeholder="Rua teste Lote x xº D"
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
              placeholder="999999999"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
