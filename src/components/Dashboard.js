import {
  faDollarSign,
  faEarthEurope,
  faPeopleRoof,
  faCartShopping,
  faCaretSquareUp,
  faCaretSquareDown,
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
                <p className="text-base font-thin text-thc3">Lucro hoje</p>
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
                <p className="text-3xl font-bold text-thc3">+123</p>
                <p className="text-base font-thin text-thc3">
                  Novas reservas esta semana
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
                <p className="text-3xl font-bold text-thc3">+345</p>
                <p className="text-base font-thin text-thc3">
                  Novos utilizadores
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
                <p className="text-3xl font-bold text-thc3">€12 345.56</p>
                <p className="text-base font-thin text-thc3">Vendas este mês</p>
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
            <div className="h-full w-full rounded-xl bg-slate-500">
              <div></div>
            </div>
            <div className="h-1/6 w-full bg-green-500"></div>
          </div>
        </div>
      </div>
      <div className="col-start-9 col-end-13 row-start-2 row-end-7">
        <div className="flex h-full w-full items-center justify-around gap-4 px-4">
          <div className="h-full w-full bg-indigo-500"></div>
        </div>
      </div>
    </div>
  );
}
