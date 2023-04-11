import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <section class="bg-white">
      <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Pattern"
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main
          aria-label="Main"
          class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
        >
          <Link to="/">
            <button>
              <FontAwesomeIcon
                icon={faX}
                className="absolute top-12 left-12 h-8 w-8 text-thc3"
              />
            </button>
          </Link>
          <div class="max-w-xl lg:max-w-3xl">
            <a class="block text-blue-600" href="/">
              <span class="sr-only">Home</span>
            </a>
            <div className="text-left">
              <h1 class="mt-6 font-serif text-2xl text-thc1 sm:text-3xl md:text-4xl">
                Hotel THC
              </h1>
              <h1 class="mt-6 text-xl font-extralight text-thc3 ">Bem-Vindo</h1>
            </div>

            <form action="#" class="mt-8 grid grid-cols-6 gap-6">
              <div class="col-span-6">
                <label
                  for="Email"
                  class="block text-left text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  class="mt-1 h-12 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-6">
                <label
                  for="Password"
                  class="block text-left text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  class="mt-1 h-12 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Link to="/">
                  <button class="ml-2 block border border-thc1 bg-thc1 px-10 py-3 font-medium text-white hover:border-thc1 hover:bg-white hover:text-thc1">
                    Login
                  </button>
                </Link>

                <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                  Ainda não tem conta?
                  <Link to="/register">
                    <Link to="/register" class="text-gray-700 underline">
                      Criar Conta
                    </Link>
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Login;
