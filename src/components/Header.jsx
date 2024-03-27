import NavBar from "./NavBar";
import React from "react";
import ItemListContainer from "./ItemListContainer";

function Header() {
  return (
    <header className="bg-slate-400 p-4 flex justify-between shadow-md">
      <h1 id="titulo" className="titulo header__title"> <b>Marvel</b></h1>
      <div>
      <ItemListContainer greeting="Bienvenidos a Marvel's"/>
      </div>
      <NavBar/>
      
    </header>
  );
}
export default Header;
