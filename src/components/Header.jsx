import React from "react";
import { Searcher } from "./Searcher";
import pokeball from "../assets/pokeball.png";
import { PokemonCard } from "./PokemonCard";
import { BiX } from "react-icons/bi";
function Header() {
  const [searchResult, setSearchResult] = React.useState(null);
  const handleSearch = (result) => {
    setSearchResult(result);
  };
  return (
    <>
      {searchResult && (
        <div className="fixed top-0 bottom-0 left-0 right-0 m-auto bg-black/70 z-10 flex justify-center items-center ">
          <div className="w-full max-w-3xl relative flex justify-center">
            <PokemonCard pokemon={{ name: searchResult }} />
            <span onClick={()=> setSearchResult(null)} className="absolute -top-20 bg-slate-100 rounded-full flex justify-center items-center font-bold cursor-pointer text-darkbg w-12 h-12 text-5xl">
              <BiX />
            </span>
          </div>
        </div>
      )}
      <header className="w-full flex flex-col items-center justify-center pt-5">
        <img
          src={pokeball}
          alt="pokeball"
          className="w-20 mb-8 shadow-[0px_5px_15px] shadow-white/30 rounded-full"
        />
        <Searcher onSearch={handleSearch} />
      </header>
    </>
  );
}

export { Header };
