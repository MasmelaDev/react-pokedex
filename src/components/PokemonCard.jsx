import React from "react";
import { useGetPokemonByNameQuery } from "../api/pokemonApi";
import {BiSad} from "react-icons/bi"
const imageNotFound =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png";
const typesColors = {
  bug: "#94BC4A",
  ice: "#70CBD4",
  dark:"#736C75",
  fire: "#EA7A3C",
  rock: "#B2A061",
  water: "#539AE2",
  fairy: "#E397D1",
  ghost: "#846AB6",
  grass: "#71C558",
  steel: "#89A1B0",
  dragon: "#6A7BAF",
  flying: "#7DA6DE",
  ground: "#CC9F4F",
  normal: "#AAB09F",
  poison: "#B468B7",
  psychic: "#E5709B",
  fighting: "#CB5F48",
  electric: "#E5C531",
};
const styles = (pokemonTypes, percentage) => {
  let background = "";

  if (pokemonTypes.length > 1) {
    background = `linear-gradient(0deg, ${pokemonTypes
      .map((type) => typesColors[type] + percentage)
      .join(", ")})`;
  } else background = typesColors[pokemonTypes[0]] + percentage;

  return {
    background,
    color: typesColors[pokemonTypes[0]],
  };
};
function PokemonCard({ pokemon }) {
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemon.name);
  if (isLoading)
    return (
      <div className="animate__animated animate__fadeIn shadow-current/50 flex max-h-full min-h-[250px] w-[46%] max-w-xs transform cursor-pointer select-none flex-col items-center justify-center gap-2 rounded-xl py-3 transition-transform hover:scale-110 bg-gray-700">
        <div className="animate w-4/5 sm:w-1/2 min-h-[150px] animate-pulse rounded-full  bg-gray-600">
          <img className="w-full scale-110 object-cover" />
        </div>

        <h3 className="animate mt-3 h-8 w-1/2 animate-pulse text-center text-2xl font-bold capitalize bg-gray-600" />

        <div className="flex items-center justify-center gap-2" />
      </div>
    );
  if (error){ 
    console.log(error)
    return (
    <div className=" shadow-current/50 flex max-h-full min-h-[250px] w-[46%] max-w-xs transform cursor-pointer select-none flex-col items-center justify-center gap-2 rounded-xl py-3 transition-transform hover:scale-110 bg-gray-700">
      <div className=" w-4/5 sm:w-1/2 min-h-[150px] text-slate-100 font-bold text-5xl rounded-full flex items-center justify-center bg-gray-600">
        <BiSad/>
      </div>
      
      <h3 className="mt-3 rounded text-center text-slate-100 py-3 px-2 font-bold capitalize bg-gray-600" >Pokemon No encontrado</h3>

      <div className="flex items-center justify-center gap-2" />
    </div>
  )};

  const { name, types, sprites } = data;
  const pokemonTypes = types.map((type) => type.type.name);

  if (!isLoading && !error) {
    return (
      <article
        style={styles(pokemonTypes, 50)}
        className="flex max-h-full min-h-[250px] w-[46%] max-w-xs transform cursor-pointer select-none flex-col items-center justify-center gap-2 rounded-xl border-current py-2.5 transition-transform hover:scale-110 hover:border"
      >
        <div
          className="w-4/5 sm:w-1/2 rounded-full border-current transition group-hover:border"
          style={styles(pokemonTypes, 50)}
        >
          <img
            alt={name}
            className="w-full scale-110 object-cover"
            src={
              sprites.other["official-artwork"].front_default ||
              sprites.other.home.front_default ||
              sprites.front_shiny ||
              sprites.front_default ||
              imageNotFound
            }
          />
        </div>

        <p className="mt-1 text-center text-xl sm:text-2xl font-bold capitalize">{name}</p>

        <div className="flex items-center justify-center gap-2 flex-wrap">
          {pokemonTypes.map((type) => (
            <div
              style={{
                color: typesColors[type],
                backgroundColor: `${typesColors[type]}50`,
              }}
              className="flex items-center gap-1 rounded-full border-current px-3 py-0.5 text-sm sm:text-base font-medium"
              key={type}
            >
              <span className="capitalize">{type}</span>
            </div>
          ))}
        </div>
      </article>
    );
  }
}

export { PokemonCard };
