import React from "react";
import { Header } from "../../components/Header";
import { PokemonsContainer } from "../../components/PokemonsContainer";
import { Footer } from "../../components/Footer";

function Home() {
  return (
    <>
     
      <Header />
      <main className="w-full max-w-[95rem] mt-10 p-2 mb-4">
        <PokemonsContainer />
      </main>
      <Footer />
    </>
  );
}

export { Home };
