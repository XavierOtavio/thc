import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function NewBooking() {
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [typeOfRoom, setTypeOfRoom] = useState("");
  const [openServices, setOpenServices] = useState(false);
  const [services, setServices] = useState([
    {
      name: "Pequeno-Almoço",
      price: 10,
      selected: true,
    },
    {
      name: "Almoço",
      price: 20,
      selected: false,
    },
    {
      name: "Ginásio",
      price: 5,
      selected: false,
    },
    {
      name: "Spa",
      price: 15,
      selected: false,
    },
  ]);

  return (
    <div class="flex items-center justify-center p-12">
      <div class="mx-auto w-2/3">
        <div class="-mx-3 flex flex-wrap">
          <div class="w-1/2 px-3">
            <div class="mb-5">
              <label
                for="fName"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Primeiro Nome
              </label>
              <input
                type="text"
                name="fName"
                id="fName"
                placeholder="José"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div class="w-1/2 px-3">
            <div class="mb-5">
              <label
                for="lName"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Último Nome
              </label>
              <input
                type="text"
                name="lName"
                id="lName"
                placeholder="Carvalho"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>
        <div class="mb-5">
          <label
            for="guest"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Quantos hóspedes?
          </label>
          <input
            type="number"
            name="guest"
            id="guest"
            onChange={(e) => {
              e.target.value >= 0 &&
                setNumberOfGuests(
                  parseInt(e.target.value) || parseInt(e.target.placeholder)
                );
            }}
            placeholder="0"
            min="0"
            class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        {[...Array(numberOfGuests)]?.map((_, index) => (
          <>
            {index % 2 === 0 && numberOfGuests !== 0 ? (
              <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for={`guest${index + 1}`}
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Idade do Hóspede {index + 1}
                    </label>
                    <input
                      type="number"
                      name={`guest${index + 1}`}
                      id={`guest${index + 1}`}
                      placeholder="23"
                      min="0"
                      className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                {index + 2 > numberOfGuests ? null : (
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for={`guest${index + 2}`}
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Idade do Hóspede {index + 2}
                      </label>
                      <input
                        type="number"
                        name={`guest${index + 2}`}
                        id={`guest${index + 2}`}
                        placeholder="23"
                        min="0"
                        class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </>
        ))}
        <div class="-mx-3 flex flex-wrap">
          <div class="w-1/2 px-3">
            <div class="mb-5">
              <label
                for="date"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Check-in
              </label>
              <input
                type="date"
                name="date"
                id="date"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div class="w-1/2 px-3">
            <div class="mb-5">
              <label
                for="date"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Check-out
              </label>
              <input
                type="date"
                name="date"
                id="date"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>
        <div class="-mx-3 flex flex-wrap">
          <div class="w-1/2 px-3">
            <div class="mb-5">
              <label
                for="typeRoom"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Tipo de Quarto
              </label>
              <select
                name="typeRoom"
                id="typeRoom"
                onChange={(e) => {
                  setTypeOfRoom(e.target.value);
                  console.log(typeOfRoom);
                }}
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option value="">Selecione</option>
                <option value="Individual">Individual</option>
                <option value="Duplo">Duplo</option>
                <option value="Suíte">Suíte</option>
                <option value="Presidencial">Presidencial</option>
              </select>
            </div>
          </div>
          <div class="w-1/2 px-3">
            <div class="mb-5">
              <label
                for="room"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Quarto
              </label>
              <select
                name="room"
                defaultValue={(e) => (e.target.disabled = true && "")}
                disabled={typeOfRoom === ""}
                id="room"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option value="" selected>
                  Selecione
                </option>
                {[...Array(4)].map((_, index) => (
                  <option key={_}>{`${typeOfRoom} ${index + 1}`}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div class="-mx-3 flex flex-wrap">
          <div class="w-full px-3">
            <div class="relative flex flex-col items-center">
              <div className="w-full">
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                  <div className="flex h-8 flex-auto flex-wrap">
                    {services.map((service) => (
                      <>
                        {service.selected === true && (
                          <div
                            onClick={() => {
                              setServices(
                                services.map((s) =>
                                  s.name === service.name
                                    ? { ...s, selected: false }
                                    : s
                                )
                              );
                            }}
                            key={service.price}
                            className="m-1 flex cursor-pointer items-center justify-center gap-4 rounded-full border border-thc1 bg-thc3 py-1 px-2 font-medium text-thc2"
                          >
                            <div className="max-w-full flex-initial text-xs font-normal leading-none">
                              {service.name}
                            </div>
                            <div className="flex flex-auto flex-row-reverse">
                              <FontAwesomeIcon icon={faTimesCircle} />
                            </div>
                          </div>
                        )}
                      </>
                    ))}
                  </div>
                  <div
                    className={`flex ${
                      openServices ? "w-24 justify-start" : "w-8 justify-start"
                    } transform cursor-pointer items-center  gap-1 rounded-full bg-thc3 text-thc2 duration-500 ease-in-out`}
                    onClick={() => setOpenServices(!openServices)}
                  >
                    <FontAwesomeIcon
                      icon={faPlus}
                      className={`${
                        openServices
                          ? "mx-0.5 animate-spinTo45"
                          : "mx-0.5 animate-spinTo0"
                      } w-8 transform transition-all duration-500 ease-in-out`}
                    />
                    <div
                      className={`transform text-xs font-normal leading-none ${
                        openServices
                          ? "opacity-100 delay-200"
                          : "sr-only opacity-0"
                      }  transition-opacity duration-300 ease-out`}
                    >
                      Fechar
                    </div>
                  </div>
                </div>
              </div>
              {openServices && (
                <div className="max-h-select absolute top-14 left-0 z-40 w-full overflow-y-auto rounded bg-white shadow">
                  <div className="flex w-full flex-col">
                    {services.map((service) => (
                      <>
                        {service.selected === false && (
                          <div className="w-full cursor-pointer border-b border-gray-100">
                            <div
                              onClick={() => {
                                setServices(
                                  services.map((s) =>
                                    s.name === service.name
                                      ? { ...s, selected: true }
                                      : s
                                  )
                                );
                              }}
                              key={service.price}
                              className="flex items-center justify-between border-l-2 border-transparent p-2 pl-2 hover:border-thc1  hover:bg-thc1 hover:text-white"
                            >
                              <div className="flex flex-[3] items-center">
                                <div className="mx-2 font-medium leading-6">
                                  {service.name}
                                </div>
                              </div>
                              <div className="flex flex-[1] items-center justify-end">
                                <div className="mx-2 font-medium leading-6">
                                  + {service.price} €
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 inline-flex w-full justify-around gap-4">
          <Link
            to={-1}
            className="hover:shadow-form w-1/4 rounded-md bg-thc3 py-3 px-8 text-center text-base font-semibold text-white outline-none"
          >
            Voltar
          </Link>
          <Link
            to={-1}
            className="hover:shadow-form w-full rounded-md bg-thc1 py-3 px-8 text-center text-base font-semibold text-white outline-none"
          >
            Reservar
          </Link>
        </div>
      </div>
    </div>
  );
}
