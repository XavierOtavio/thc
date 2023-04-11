import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";

function Settings() {
  return (
    <div>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div class="w-full text-left">
            <h2 class="text-center text-3xl font-bold sm:text-4xl">
              Definições do Hotel{" "}
            </h2>
          </div>

          <hr class="mt-8 border-t border-gray-200" />

          <div class="mt-8 grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col">
              <div class="relative flex h-64 justify-center overflow-hidden sm:h-80 ">
                <img
                  alt="Party"
                  src="https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=KuCo-dRBYV7nz2gbk4J9w1WtTAgpTdznHu55W9FjimE="
                  class="absolute inset-0 h-96 w-auto rounded-md object-cover"
                />
              </div>
              <div class="relative ml-16 mt-10 flex w-full">
                <input
                  type="file"
                  id="image-upload"
                  class="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                />
                <button
                  type="button"
                  class="focus:shadow-outline-blue bg-yhc3 rounded-md border bg-thc3 py-2 px-4 font-semibold text-white hover:bg-thc3 focus:outline-none active:bg-thc3"
                >
                  <FontAwesomeIcon
                    icon={faArrowUpFromBracket}
                    className="mr-2"
                  />{" "}
                  Adicionar novo logótipo
                </button>
              </div>
            </div>
            <article class="space-y-4 text-left text-gray-600 ">
              <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
                Nome
              </h2>
              <ul class="max-w-md list-inside  space-y-1 text-gray-500 dark:text-gray-400">
                <li>
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Hotel THC"
                    class="h-10 w-full rounded-md border border-gray-500 pl-3 shadow-sm sm:text-sm"
                  />
                </li>
              </ul>
              <h2 class="mb-2 text-left text-lg font-semibold text-gray-900 dark:text-white">
                Tema
              </h2>

              <div class="flex w-48 items-center rounded border py-2 px-4 font-bold text-white">
                <input
                  type="radio"
                  id="cor1"
                  name="cor1"
                  class=" mr-3  rounded border border-gray-300 px-3"
                  defaultChecked
                />
                <FontAwesomeIcon
                  icon={faSquare}
                  className="mr-1 h-8 text-thc1"
                />
                <FontAwesomeIcon
                  icon={faSquare}
                  className="mr-1 h-8 text-thc2"
                />
                <FontAwesomeIcon
                  icon={faSquare}
                  className="mr-1 h-8 text-thc3"
                />
                <FontAwesomeIcon icon={faSquare} className=" h-8 text-thc4" />
              </div>
              <div class="flex w-48 items-center rounded border py-2 px-4 font-bold text-white">
                <input
                  type="radio"
                  id="cor1"
                  name="cor1"
                  class=" mr-3  rounded border border-gray-300 px-3"
                />
                <FontAwesomeIcon
                  icon={faSquare}
                  className="mr-1 h-8 text-red-500"
                />
                <FontAwesomeIcon
                  icon={faSquare}
                  className="mr-1 h-8 text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={faSquare}
                  className="mr-1 h-8 text-green-500"
                />
                <FontAwesomeIcon
                  icon={faSquare}
                  className=" h-8 text-blue-700"
                />
              </div>
              <div class="flex w-48 items-center rounded border py-2 px-4 font-bold text-white">
                <input
                  type="radio"
                  id="cor1"
                  name="cor1"
                  class=" mr-3  rounded border border-gray-300 px-3"
                />
                <FontAwesomeIcon
                  icon={faSquare}
                  className="mr-1 h-8 text-gray-500"
                />
                <FontAwesomeIcon
                  icon={faSquare}
                  className="mr-1 h-8 text-blue-900"
                />
                <FontAwesomeIcon
                  icon={faSquare}
                  className="mr-1 h-8 text-stone-200"
                />
                <FontAwesomeIcon
                  icon={faSquare}
                  className=" h-8 text-slate-900"
                />
              </div>
            </article>
          </div>
          <hr class="mt-8 border-t border-gray-200" />

          <div className="flex justify-end">
            <button class="mt-8 rounded-md border bg-thc1 py-2 px-4 font-semibold text-white hover:bg-thc2 focus:outline-none active:bg-thc1">
              Guardar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Settings;
