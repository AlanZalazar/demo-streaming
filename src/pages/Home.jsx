import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl mx-auto p-4 md:p-8">
        <div className="text-center">
          <Link
            to="/series"
            className="block border-2 border-gray-700 h-[300px] w-full max-w-[200px] mx-auto bg-neutral-900 relative overflow-hidden group hover:border-blue-500 transition"
          >
            <img
              src="/placeholder.png"
              alt="Series"
              className="absolute w-full h-full object-cover opacity-70 group-hover:opacity-50 transition"
            />
            <div className="h-full w-full flex justify-center items-center">
              <h2 className="relative z-10 font-bold text-white text-4xl md:text-5xl">
                SERIES
              </h2>
            </div>
          </Link>
          <p className="mt-4 font-semibold text-xl md:text-2xl">
            Popular Series
          </p>
        </div>

        <div className="text-center">
          <Link
            to="/peliculas"
            className="block border-2 border-gray-700 h-[300px] w-full max-w-[200px] mx-auto bg-neutral-900 relative overflow-hidden group hover:border-red-500 transition"
          >
            <img
              src="/placeholder.png"
              alt="Movies"
              className="absolute w-full h-full object-cover opacity-70 group-hover:opacity-50 transition"
            />
            <div className="h-full w-full flex justify-center items-center">
              <h2 className="relative z-10 font-bold text-white text-4xl md:text-5xl">
                MOVIES
              </h2>
            </div>
          </Link>
          <p className="mt-4 font-semibold text-xl md:text-2xl">
            Popular Movies
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
