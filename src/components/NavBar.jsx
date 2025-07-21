import React from "react";

import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  // Determinar el título según la ruta
  const getSectionTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Popular Titles";
      case "/series":
        return "Popular Series";
      case "/peliculas":
        return "Popular Movies";
      default:
        return "Popular Titles";
    }
  };
  return (
    <header className="w-screen h-[15dvh]">
      <nav className="relative w-full h-[50%] bg-blue-500 flex items-center justify-between p-1 px-[10%] text-center shadow-[0_12px_8px_rgba(0,_0,_0,_0.4)] ">
        {" "}
        <Link to="/">
          {" "}
          <h1 className="text-5xl font-semibold text-white">DEMO Streaming</h1>
        </Link>
        <div className="flex gap-5">
          <button className="text-white font-semibold p-3 text-[18px]">
            Log in
          </button>
          <button className="bg-neutral-700 px-4 text-white p-2 font-semibold text-[18px]">
            Start Your free trial
          </button>
        </div>
      </nav>
      <section className="w-full bg-neutral-700 h-[50%] shadow-[0_12px_8px_rgba(0,_0,_0,_0.4)] flex px-[10%]">
        <h2 className="text-3xl flex items-center  font-semibold text-white">
          {getSectionTitle()}
        </h2>
      </section>
    </header>
  );
}
