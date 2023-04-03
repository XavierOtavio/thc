import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
export default function NewBooking() {
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [typeOfRoom, setTypeOfRoom] = useState("");
  return (
    <div class="flex items-center justify-center p-12">
      <div class="mx-auto w-2/3">
        <div class="-mx-3 flex flex-wrap">
          <div class="w-full px-3 sm:w-1/2">
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
                placeholder="First Name"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div class="w-full px-3 sm:w-1/2">
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
                placeholder="Last Name"
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
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
        <div className="inline-flex w-full justify-around gap-4">
          <Link to={-1}>
            <button class=" hover:shadow-form w-full rounded-md bg-thc3 py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Voltar
            </button>
          </Link>
          <button class=" hover:shadow-form w-full rounded-md bg-thc1 py-3 px-8 text-center text-base font-semibold text-white outline-none">
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
}
