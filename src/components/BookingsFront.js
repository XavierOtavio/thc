import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function BookinsFront() {
  return (
    <div>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div class="mx-auto">
            <header class="text-center">
              <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">
                As minhas reservas
              </h1>
            </header>

            <div class="mt-8">
              <h1 class="text-xl font-medium text-gray-900 sm:text-3xl">
                Reserva 003
              </h1>
              <dt className="font-bold text-green-600">
                seg. 03 de abril - qua. 05 de abril - 240,00€
              </dt>

              <div className="mb-5 h-0.5 w-full bg-thc1" />
              <ul class="space-y-4">
                <li class="flex items-center gap-4">
                  <img
                    src="https://hotelemile.com/_novaimg/galleria/1493923.jpg"
                    alt=""
                    class="aspect-video h-32 rounded object-cover"
                  />

                  <div>
                    <h3 class="text-2xl text-gray-900">Quarto de Individual</h3>

                    <dl class="mt-0.5 space-y-px text-sm text-gray-600">
                      <div class="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faUser} />
                        <span>1</span>
                      </div>
                      <div>
                        <dt>Serviços: Wi-fi | TV | WC | AC</dt>
                        <dd class="inline">
                          Serviços Adicionais: Serviço1 | Serviço2 | Serviço3{" "}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div class="flex flex-1 items-center justify-end gap-2">
                    <form>
                      <label for="Line1Qty" class="sr-only">
                        {" "}
                        Quantity{" "}
                      </label>

                      <input
                        type="number"
                        min="1"
                        value="1"
                        id="Line1Qty"
                        class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-lg text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                      />
                    </form>
                  </div>
                </li>
              </ul>
              <hr class="my-3 border-t border-gray-200" />
              <div class="flex justify-end">
                <button class="rounded-md bg-red-700 px-4 py-2 text-white">
                  Cancelar
                </button>
              </div>
              <div className="mt-3 h-0.5 w-full bg-thc1" />
            </div>
            <div class="mt-24">
              <h1 class="text-xl font-medium text-gray-900 sm:text-3xl">
                Reserva 001
              </h1>
              <dt className="font-bold text-gray-400">
                seg. 17 de janeiro - qua. 19 de janeiro - 1780,00€
              </dt>

              <div className="mb-5 h-0.5 w-full bg-thc1" />
              <ul class="space-y-4">
                <li class="flex items-center gap-4">
                  <img
                    src="https://assets.tivolihotels.com/image/upload/q_auto,f_auto,c_limit,w_1378/media/minor/tivoli/images/hotels/tspm/rooms/topimage1920x1000/tspm_presidential-suite_5_1920x1000.jpg"
                    alt=""
                    class="aspect-video h-32 rounded object-cover"
                  />

                  <div>
                    <h3 class="text-2xl text-gray-900">Quarto Presidencial</h3>

                    <dl class="mt-0.5 space-y-px text-sm text-gray-600">
                      <div class="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faUser} />
                        <FontAwesomeIcon icon={faUser} />
                        <FontAwesomeIcon icon={faUser} />
                        <FontAwesomeIcon icon={faUser} />
                        <span>4</span>
                      </div>
                      <div>
                        <dt>Serviços: Wi-fi | TV | WC | AC</dt>
                        <dd class="inline">
                          Serviços Adicionais: Serviço1 | Serviço2 | Serviço3{" "}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div class="flex flex-1 items-center justify-end gap-2">
                    <form>
                      <label for="Line1Qty" class="sr-only">
                        {" "}
                        Quantity{" "}
                      </label>

                      <input
                        type="number"
                        min="1"
                        value="1"
                        id="Line1Qty"
                        class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-lg text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                      />
                    </form>
                  </div>
                </li>

                <hr class="border-t border-gray-200" />

                <li class="flex items-center gap-4">
                  <img
                    src="https://www.hotelgarance.com/_novaimg/galleria/342681.jpg"
                    alt=""
                    class="aspect-video h-32 rounded object-cover"
                  />

                  <div>
                    <h3 class="text-2xl text-gray-900">Quarto de Casal</h3>

                    <dl class="mt-0.5 space-y-px text-sm text-gray-600">
                      <div class="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faUser} />
                        <FontAwesomeIcon icon={faUser} />

                        <span>2</span>
                      </div>
                      <div>
                        <dt>Serviços: Wi-fi | TV | WC | AC</dt>
                        <dd class="inline">
                          Serviços Adicionais: Serviço1 | Serviço2 | Serviço3{" "}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div class="flex flex-1 items-center justify-end gap-2">
                    <form>
                      <label for="Line1Qty" class="sr-only">
                        {" "}
                        Quantity{" "}
                      </label>

                      <input
                        type="number"
                        min="1"
                        value="2"
                        id="Line1Qty"
                        class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-lg text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                      />
                    </form>
                  </div>
                </li>
              </ul>
              <div className="mt-5 h-0.5 w-full bg-thc1" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookinsFront;
