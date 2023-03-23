import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="grid h-screen px-4 bg-thc3 place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">404</h1>

        <p className="text-2xl font-bold tracking-tight text-thc2 sm:text-4xl">
          Oops!
        </p>

        <p className="mb-16 mt-4 text-gray-500">
          Parece que se perdeu no labirinto do hotel 404. Infelizmente, não
          podemos oferecer uma estadia de cortesia nesta página
        </p>

        <Link
          to="/"
          className="block rounded hover:text-thc2 ml-2 hover:bg-transparent px-5 py-3 mt-6 font-medium hover:border-thc1 bg-thc1 text-white border border-thc1"
        >
          Voltar à página inicial
        </Link>
      </div>
    </div>
  );
}
