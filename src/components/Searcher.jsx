import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Searcher({ onSearch }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = new FormData(e.target);
    const query = fields.get("query");
    onSearch(query.toLowerCase());
  };

  return (
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full max-w-2xl text-lg"
      >
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex text-2xl items-center pl-3 pointer-events-none">
            <AiOutlineSearch className="font-medium text-white" />
          </div>
          <input
            type="text"
            name="query"
            id="search"
            className=" bg-pokeRed shadow-[0px_5px_15px]  shadow-white/30  placeholder:text-white/60 h-12 text-white text-lg font-medium rounded-full focus:outline-none block w-full pl-14"
            placeholder="pikachu, charmander, ..."
            required
          />
        </div>
        <button
          type="submit"
          className="ml-2 h-11 w-12 grid place-content-center font-medium text-white text-2xl bg-pokeRed shadow-[0px_5px_15px] shadow-white/30 rounded-full transition focus:scale-90"
        >
          <AiOutlineSearch className="font-medium " />
          <span className="sr-only">Search</span>
        </button>
      </form>
     
  );
}

export { Searcher };
