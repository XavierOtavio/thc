import {
  faDollarSign,
  faEarthEurope,
  faPeopleRoof,
  faCartShopping,
  faCaretSquareUp,
  faCaretSquareDown,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Dashboard() {
  return (
    <div className="grid h-full w-full grid-cols-12 grid-rows-6 gap-2 p-4 text-left ">
      <div className="col-start-1 col-end-13 row-start-1 row-end-2">
        <div className="flex h-full w-full items-center justify-around gap-4 px-4">
          <div className="inline-flex h-5/6 w-1/4 rounded-3xl bg-thc2">
            <div className="flex h-full w-1/4 items-center justify-center px-4 py-4">
              <div className="flex h-full w-full items-center justify-center rounded-3xl bg-thc3">
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className="h-1/3 w-1/3 text-thc2"
                />
              </div>
            </div>
            <div className="flex h-full w-2/4 items-center justify-center ">
              <div className="flex h-full w-full flex-col items-start justify-around rounded-3xl py-4 px-4">
                <p className="text-3xl font-bold text-thc3">€12 345.56</p>
                <p className="text-base font-thin text-thc3">Lucro</p>
              </div>
            </div>
            <div className="flex h-full w-1/4 items-center justify-center px-4 py-4">
              <div className="inline-flex items-center justify-center gap-2">
                <p className="text-xl font-bold text-thc3">12%</p>
                <FontAwesomeIcon
                  icon={faCaretSquareUp}
                  className="text-green-500"
                />
              </div>
            </div>
          </div>
          <div className="inline-flex h-5/6 w-1/4 rounded-3xl bg-thc2">
            <div className="flex h-full w-1/4 items-center justify-center px-4 py-4">
              <div className="flex h-full w-full items-center justify-center rounded-3xl bg-thc3">
                <FontAwesomeIcon
                  icon={faEarthEurope}
                  className="h-1/3 w-1/3  text-thc2"
                />
              </div>
            </div>
            <div className="flex h-full w-2/4 items-center justify-center ">
              <div className="flex h-full w-full flex-col items-start justify-around rounded-3xl py-4 px-4">
                <p className="text-3xl font-bold text-thc3">76%</p>
                <p className="text-base font-thin text-thc3">
                  Taxa de ocupação do hotel
                </p>
              </div>
            </div>
            <div className="flex h-full w-1/4 items-center justify-center px-4 py-4">
              <div className="inline-flex items-center justify-center gap-2">
                <p className="text-xl font-bold text-thc3">10%</p>
                <FontAwesomeIcon
                  icon={faCaretSquareUp}
                  className="text-green-500"
                />
              </div>
            </div>
          </div>
          <div className="inline-flex h-5/6 w-1/4 rounded-3xl bg-thc2">
            <div className="flex h-full w-1/4 items-center justify-center px-4 py-4">
              <div className="flex h-full w-full items-center justify-center rounded-3xl bg-thc3">
                <FontAwesomeIcon
                  icon={faPeopleRoof}
                  className="h-1/3 w-1/3  text-thc2"
                />
              </div>
            </div>
            <div className="flex h-full w-2/4 items-center justify-center ">
              <div className="flex h-full w-full flex-col items-start justify-around rounded-3xl py-4 px-4">
                <p className="text-3xl font-bold text-thc3">345</p>
                <p className="text-base font-thin text-thc3">
                  Hóspedes no hotel
                </p>
              </div>
            </div>
            <div className="flex h-full w-1/4 items-center justify-center px-4 py-4">
              <div className="inline-flex items-center justify-center gap-2">
                <p className="text-xl font-bold text-thc3">-2%</p>
                <FontAwesomeIcon
                  icon={faCaretSquareDown}
                  className="text-red-500"
                />
              </div>
            </div>
          </div>
          <div className="inline-flex h-5/6 w-1/4 rounded-3xl bg-thc2">
            <div className="flex h-full w-1/4 items-center justify-center px-4 py-4">
              <div className="flex h-full w-full items-center justify-center rounded-3xl bg-thc3">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="h-1/3 w-1/3  text-thc2"
                />
              </div>
            </div>
            <div className="flex h-full w-2/4 items-center justify-center ">
              <div className="flex h-full w-full flex-col items-start justify-around rounded-3xl py-4 px-4">
                <p className="text-3xl font-bold text-thc3">€23 456.78</p>
                <p className="text-base font-thin text-thc3">
                  Faturação prevista este mês
                </p>
              </div>
            </div>
            <div className="flex h-full w-1/4 items-center justify-center px-4 py-4">
              <div className="inline-flex items-center justify-center gap-2">
                <p className="text-xl font-bold text-thc3">12%</p>
                <FontAwesomeIcon
                  icon={faCaretSquareUp}
                  className="text-green-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-start-1 col-end-9 row-start-2 row-end-7">
        <div className="flex h-full w-full items-center justify-around  px-4">
          <div className="flex h-full w-full flex-col gap-4 rounded-xl bg-thc3 p-4">
            <div className="inline-flex items-center justify-between">
              <div className="flex flex-col items-start justify-center">
                <p className="text-3xl font-bold text-white">€12 345.67</p>
                <p className="text-sm font-thin text-stone-100">
                  Vendas esta semana
                </p>
              </div>
              <div className="inline-flex items-center gap-1 text-green-600">
                <p className="text-xl font-bold">12.5 %</p>
                <FontAwesomeIcon icon={faCaretSquareUp} />
              </div>
            </div>
            <div className="h-full w-full rounded-xl bg-slate-500 bg-opacity-10">
              <div className="inline-flex h-full w-full">
                <div className="flex h-full w-full flex-nowrap items-center justify-around p-4">
                  <div className="group relative h-full w-5 rotate-180 rounded-sm bg-thc4 dark:bg-gray-700">
                    <div className="h-2/6 w-full rounded-sm bg-thc1"></div>
                    <span
                      className="absolute right-0 -translate-x-1/4 rotate-180 whitespace-nowrap rounded-md bg-thc3
    p-2 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      02 Abril 1000€
                    </span>
                  </div>
                  <div className="group relative h-full w-5 rotate-180 rounded-sm bg-thc4 dark:bg-gray-700">
                    <div className="h-4/6 w-full rounded-sm bg-thc1"></div>
                    <span
                      className="absolute right-0 -translate-x-1/4 rotate-180 whitespace-nowrap rounded-md bg-thc3
    p-2 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      03 Abril 2000€
                    </span>
                  </div>
                  <div className="group relative h-full w-5 rotate-180 rounded-sm bg-thc4 dark:bg-gray-700">
                    <div className="h-3/6 w-full rounded-sm bg-thc1"></div>
                    <span
                      className="absolute right-0 -translate-x-1/4 rotate-180 whitespace-nowrap rounded-md bg-thc3
    p-2 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      04 Abril 1500€
                    </span>
                  </div>
                  <div className="group relative h-full w-5 rotate-180 rounded-sm bg-thc4 dark:bg-gray-700">
                    <div className="h-1/6 w-full rounded-sm bg-thc1"></div>
                    <span
                      className="absolute right-0 -translate-x-1/4 rotate-180 whitespace-nowrap rounded-md bg-thc3
    p-2 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      05 Abril 500€
                    </span>
                  </div>
                  <div className="group relative h-full w-5 rotate-180 rounded-sm bg-thc4 dark:bg-gray-700">
                    <div className="h-5/6 w-full rounded-sm bg-thc1"></div>
                    <span
                      className="absolute right-0 -translate-x-1/4 rotate-180 whitespace-nowrap rounded-md bg-thc3
    p-2 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      06 Abril 2500€
                    </span>
                  </div>
                  <div className="group relative h-full w-5 rotate-180 rounded-sm bg-thc4 dark:bg-gray-700">
                    <div className="h-3/6 w-full rounded-sm bg-thc1"></div>
                    <span
                      className="absolute right-0 -translate-x-1/4 rotate-180 whitespace-nowrap rounded-md bg-thc3
    p-2 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      07 Abril 1500€
                    </span>
                  </div>
                  <div className="group relative h-full w-5 rotate-180 rounded-sm bg-thc4 dark:bg-gray-700">
                    <div className="h-2/6 w-full rounded-sm bg-thc1"></div>
                    <span
                      className="absolute right-0 -translate-x-1/4 rotate-180 whitespace-nowrap rounded-md bg-thc3
    p-2 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      08 Abril 1000€
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-0.5 w-full rounded-full bg-thc4" />
            <div className="flex h-1/6 w-full justify-between p-4">
              <div className="inline-flex items-center justify-center">
                <label for="underline_select" class="sr-only">
                  Underline select
                </label>
                <select
                  id="underline_select"
                  className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                >
                  <option disabled className="bg-thc3 text-white">
                    02 Abril a 08 de abril
                  </option>
                  <option>Ontem</option>
                  <option>Hoje</option>
                  <option selected>Últimos 7 dias</option>
                  <option>Últimos 30 dias</option>
                  <option>Últimos 90 dias</option>
                </select>
              </div>
              <div className="inline-flex items-center justify-center gap-2 text-white">
                <p className="cursor-pointer text-xl uppercase">
                  relatório de vendas
                </p>
                <FontAwesomeIcon icon={faFileAlt} className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-start-9 col-end-13 row-start-2 row-end-7 ">
        <table className="h-full w-full divide-y-2 divide-gray-200 overflow-y-scroll rounded-xl  bg-thc4 text-sm">
          <thead>
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Quarto
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Total Vendas
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Taxa de ocupação
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="border-b">
              <td className="whitespace-nowrap px-4 py-2">0001</td>
              <td className="whitespace-nowrap px-4 py-2">1332.56€</td>
              <td className="whitespace-nowrap px-4 py-2">76%</td>
            </tr>
            <tr className="border-b">
              <td className="whitespace-nowrap px-4 py-2">0002</td>
              <td className="whitespace-nowrap px-4 py-2">4231.56€</td>
              <td className="whitespace-nowrap px-4 py-2">16%</td>
            </tr>
            <tr className="border-b">
              <td className="whitespace-nowrap px-4 py-2">0003</td>
              <td className="whitespace-nowrap px-4 py-2">2344.56€</td>
              <td className="whitespace-nowrap px-4 py-2">66%</td>
            </tr>
            <tr className="border-b">
              <td className="whitespace-nowrap px-4 py-2">0004</td>
              <td className="whitespace-nowrap px-4 py-2">2342.56€</td>
              <td className="whitespace-nowrap px-4 py-2">46%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
