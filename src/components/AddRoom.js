import React from "react";

export default function AddRoom() {
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
              src="https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=KuCo-dRBYV7nz2gbk4J9w1WtTAgpTdznHu55W9FjimE="
              class="absolute inset-0 h-full w-full rounded-md object-cover"
            />
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
                  <svg
                    class="mr-1.5 h-4 w-4 flex-shrink-0 text-green-500 dark:text-green-400"
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
                    class="mr-1.5 h-4 w-4 flex-shrink-0 text-green-500 dark:text-green-400"
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
                    class="mr-1.5 h-4 w-4 flex-shrink-0 text-green-500 dark:text-green-400"
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
                    class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400"
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
