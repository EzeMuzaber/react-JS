import NavBar from "./NavBar";
import React from "react";


function Header() {
  return (
    <header className="bg-slate-400 p-4 flex justify-between shadow-md">
      <h1 id="titulo" className="titulo header__title font-bold"> Marvel</h1>
      <NavBar/>
    </header>
  );
}
export default Header;
