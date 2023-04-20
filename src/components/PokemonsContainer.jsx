import React, { useEffect } from "react";
import { useGetPokemonListQuery } from "../api/pokemonApi"
import { PaginationComponent } from "./PaginationComponent";
import { PokemonCard } from "./PokemonCard";
import { RingLoader } from "react-spinners";
const localPage = parseInt(window.localStorage.getItem('page')) || 0
function PokemonsContainer() {

  const [page, setPage] = React.useState(localPage);
  const { data, error } = useGetPokemonListQuery({
    limit: 20,
    offset: page * 20,
  });
  const [isLoading , setIsLoading] = React.useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },1000)
  },[page])

  if (isLoading) return (
    <div className="flex justify-center items-center h-96">
        <RingLoader color="#ED5451" />
    </div>
  )
  if (error) return <p>{error}</p>
  return (
    <>
      <section className="flex flex-wrap justify-center gap-5">
        {data.results.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </section>
      <PaginationComponent data={data} setPage={setPage} page={page} setIsLoading={setIsLoading} />
    </>
  );
}

export { PokemonsContainer };
