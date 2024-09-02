import React, { useState } from "react";
import { SearchIcon } from "../assets/Icons";

function Lyrics() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value); // Actualiza el valor del estado en cada cambio del input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  console.log("Search text:", searchText); // Aquí puedes manejar la búsqueda o reiniciar el texto
  return (
    <div className="flex h-full">
      <div className="flex flex-col w-1/2">
        <form
          className="  p-5 flex  mx-auto place-items-center"
          onSubmit={handleSubmit}
        >
          <div
            className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400
               duration-300 placeholder:text-zinc-600
              placeholder:opacity-50 rounded-full px-4 py-2  shadow-md focus:shadow-lg
             dark::shadow-md dark:shadow-sky-700 space-x-2 flex place-items-center"
          >
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
              className="bg-zinc-200 text-zinc-600 font-mono 
              focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600
              placeholder:opacity-50 r px-4 py-2   focus:shadow-lg rounded-full
              focus:shadow-rose-400 "
              name="search"
              id="search"
              placeholder="Search Here..."
              type="text"
              onChange={handleSearch} // Actualiza el estado al cambiar el valor del input
            />
            <button type="submit">
              <SearchIcon className="size-10  rounded-full" aria-hidden="true" />
            </button>
          </div>
        </form>
        <div className="flex-auto bg-slate-400">
          <h1 className="font-bold text-2xl text-white ">{searchText}</h1>
        </div>
      </div>
    </div>
  );
}

export default Lyrics;
