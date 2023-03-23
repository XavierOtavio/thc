import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section class="relative bg-[url(https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-thc3 sm:to-white/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-serif sm:text-5xl text-white">
              Bem vindo ao
              <strong class="block font-serif text-thc1">
                {" "}
                Luxuoso Hotel THC
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white bg-thc">
              Cozinha e moveis feito à medida por encomenda para corresponder às
              suas necessidades
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#cozinhas"
                class="block w-full scroll-smooth rounded bg-thc1 px-12 py-3 text-sm font-medium text-white shadow transition hover:bg-thc1 focus:outline-none focus:ring active:bg-thc2 sm:w-auto"
              >
                Vamos começar
              </a>

              <a
                href="#catalogo"
                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-thc1 shadow hover:text-thc1 focus:outline-none focus:ring active:text-thc2 sm:w-auto"
              >
                Saber Mais
              </a>
            </div>
          </div>
        </div>
      </section>

      <div id="cozinhas">
        <div class="bg-white">
          <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-3xl text-center">
              <h2 class="text-base font-semibold uppercase tracking-wide text-rose-600">
                Marca de confiança em maisde 26,000 casas
              </h2>
              <p class="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                A melhor maneira de investir na sua cozinha
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-stone-300">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div class="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
              <div class="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                    Cozinhas
                  </h2>

                  <p class="mt-4 text-gray-500">
                    Encontre uma grande variadade de designs e materiais para ir
                    de encontro às suas espectativas
                  </p>
                </header>
                <Link
                  to="productsList"
                  class="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  <h1>Veja aqi!</h1>
                </Link>
              </div>
            </div>

            <div class="lg:col-span-2 lg:py-8">
              <ul class="grid grid-cols-2 gap-4">
                <li>
                  <Link to="#" class="group block">
                    <img
                      src="https://www.gower-furniture.co.uk/wp-content/uploads/2021/05/Capri-Dark-Grey.jpg"
                      alt=""
                      class="aspect-square w-full rounded object-cover"
                    />

                    <div class="mt-3">
                      <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Cozinha Deluxe
                      </h3>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="#" class="group block">
                    <img
                      src="https://www.eshoper.in/wp-content/uploads/2021/12/best-kitchen-furniture-latest-design-low-price-furnitures-store-panvel-kamothe-navi-mumbai.jpg"
                      alt=""
                      class="aspect-square w-full rounded object-cover"
                    />

                    <div class="mt-3">
                      <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Cozinha Cerâmica
                      </h3>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
              Negocios de confiança
            </h2>

            <p class="mt-4 text-gray-500 sm:text-xl">
              Qualidade comprovada e testada pelos nossos técnicos
            </p>
          </div>

          <div class="mt-8 sm:mt-12">
            <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt class="order-last text-lg font-medium text-gray-500">
                  Total Vendas
                </dt>

                <dd class="text-4xl font-extrabold text-red-600 md:text-5xl">
                  4.8M€
                </dd>
              </div>

              <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt class="order-last text-lg font-medium text-gray-500">
                  Casas
                </dt>

                <dd class="text-4xl font-extrabold text-red-600 md:text-5xl">
                  26000
                </dd>
              </div>

              <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt class="order-last text-lg font-medium text-gray-500">
                  moveis
                </dt>

                <dd class="text-4xl font-extrabold text-red-600 md:text-5xl">
                  122000
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
