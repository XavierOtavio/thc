import React from "react";

export default function RoomDetails() {
  return (
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div class="max-w-3xl text-left">
          <h2 class="text-3xl font-bold sm:text-4xl">Quarto de solteiro</h2>
        </div>
        <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="Party"
                src="https://hotelemile.com/_novaimg/galleria/1493923.jpg"
                class="absolute inset-0 h-full w-full rounded-md object-cover"
              />
            </div>
            <div class="relative w-full pt-10">
              <input
                type="file"
                id="image-upload"
                class="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              />
              <button
                type="button"
                class="focus:shadow-outline-blue rounded-md border bg-thc3 bg-yhc3 py-2 px-4 font-semibold text-white hover:bg-thc3 focus:outline-none active:bg-thc3"
              >
                Alterar imagem
              </button>
            </div>
          </div>

          <div class="lg:py-16">
            <article class="space-y-4 text-left text-gray-600 ">
              <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Detalhes:
              </h2>
              <ul class="max-w-md list-inside list-disc space-y-1 text-gray-500 dark:text-gray-400">
                <li>
                  <label
                    for="UserEmail"
                    class="block text-xs font-medium text-gray-700"
                  >
                    Morada
                  </label>
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Piso 4, Ala 2, Porta 0402"
                    class="mt-1 w-full rounded-md border-gray-500 shadow-sm sm:text-sm"
                  />
                </li>
                <li>
                  <label
                    for="UserEmail"
                    class="block text-xs font-medium text-gray-700"
                  >
                    Área
                  </label>
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="50m2"
                    class="mt-1 w-full rounded-md border-gray-500 shadow-sm sm:text-sm"
                  />
                </li>
                <li>
                  <label
                    for="UserEmail"
                    class="block text-xs font-medium text-gray-700"
                  >
                    Mobilia
                  </label>
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="1 cama solteiro, 1 armário, 1 cómoda, 1 mesinha de cabeceira"
                    class="mt-1 w-full rounded-md border-gray-500 shadow-sm sm:text-sm"
                  />
                </li>
              </ul>
              <h2 class="mb-2 text-left text-lg font-semibold text-gray-900 dark:text-white">
                Detalhes:
              </h2>
              <ul class="max-w-md list-inside space-y-1 text-gray-500 dark:text-gray-400">
                <li class="flex items-center">
                  <input type="checkbox" class="form-checkbox" name="suite" />
                  <span class="ml-2 text-gray-700">Suite</span>
                </li>
                <li class="flex items-center">
                  <input
                    type="checkbox"
                    class="form-checkbox"
                    name="televisao"
                  />
                  <span class="ml-2 text-gray-700">Televisão</span>
                </li>
                <li class="flex items-center">
                  <input
                    type="checkbox"
                    class="form-checkbox"
                    name="servico-quarto"
                  />
                  <span class="ml-2 text-gray-700">Serviço de quarto</span>
                </li>
                <li class="flex items-center">
                  <input type="checkbox" class="form-checkbox" name="varanda" />
                  <span class="ml-2 text-gray-700">Varanda</span>
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
            </article>
          </div>
        </div>
      </div>
    </section>

    // <div className="h-full w-full grid grid-cols-12 grid-rows-6">
    //   <div className="col-start-7 col-end-13 row-start-1 row-end-4 bg-green-500"></div>
    //   <div className="col-start-1 col-end-7 row-start-1 row-end-7 bg-yellow-500"></div>
    //   <div className="col-start-7 col-end-13 row-start-4 row-end-7 bg-red-500"></div>
    // </div>
  );
}
