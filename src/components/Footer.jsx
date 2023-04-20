import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
function Footer() {
  return (
    <footer className="w-full bg-pokeRed p-3 mt-auto">
      <div className="flex justify-center gap-2">
        <a href="https://github.com/MasmelaDev/react-pokedex" target="__BLANK" className="text-3xl text-fuchsia-100 transition-transform hover:scale-150">
          <AiFillGithub />
        </a>
        <a href="linkedin.com/in/miguel-angel-lopez-masmela-88b9b3263" target="__BLANK" className="text-3xl text-fuchsia-100 transition-transform hover:scale-150">
          <AiFillLinkedin />
        </a>
      </div>
      <p className="text-fuchsia-100 text-center text-sm mt-2">Made by <a href="https://github.com/MasmelaDev" target="__BLANK" className="font-medium text-sky-400 ">MasmelaDev</a> with <a href="https://pokeapi.co/" target="__BLANK" className="font-medium text-sky-400 ">PokeApi</a></p>
    </footer>
  );
}

export { Footer };
