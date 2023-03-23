import React from "react";

export default function RoomDetails() {
  return (
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div class="max-w-3xl text-left">
          <h2 class="text-3xl font-bold sm:text-4xl">Quarto de solteiro</h2>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt="Party"
              src="https://hotelemile.com/_novaimg/galleria/1493923.jpg"
              class="absolute inset-0 h-full w-full object-cover rounded-md"
            />
          </div>

          <div class="lg:py-16">
            <article class="space-y-4 text-gray-600 text-left ">
              <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Detalhes:
              </h2>
              <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>Piso 4, Ala 2, Porta 0402</li>
                <li>40m2</li>
                <li>
                  1 cama solteiro, 1 armário, 1 cómoda, 1 mesinha de cabeceira
                </li>
              </ul>
              <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white text-left">
                Detalhes:
              </h2>
              <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Suite (banheira)
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Televisão
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Serviço de quarto
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Varanda
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
