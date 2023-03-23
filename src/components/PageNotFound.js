import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="grid h-screen place-content-center bg-thc3 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <p className="text-2xl font-bold tracking-tight text-thc2 sm:text-4xl">
          Oops!
        </p>

        <p className="mb-16 mt-4 text-gray-500">
          Parece que se perdeu no labirinto do hotel 404. Infelizmente, não
          podemos oferecer uma estadia de cortesia nesta página
        </p>

        <Link
          to="/"
          className="ml-2 mt-6 block rounded border border-thc1 bg-thc1 px-5 py-3 font-medium text-white hover:border-thc1 hover:bg-transparent hover:text-thc2"
        >
          Voltar à página inicial
        </Link>
      </div>
    </div>
  );
}
