import NavBar from "./NavBar";
import React from "react";



function Header() {
  return (
    <header className=" bg-gray-800 p-4 flex justify-between shadow-md  text-zinc-200">
      <h1 id="titulo" className="titulo header__title font-bold text-green-400">𓆩『𝐿Ꭷ𝓚 𝒊』𓆪</h1>
      <NavBar />
    </header>
  );
}
export default Header;
