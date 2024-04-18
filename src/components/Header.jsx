import NavBar from "./NavBar";
import React from "react";
import { Routes,Route } from "react-router-dom";


function Header() {
  return (
    <header className="bg-slate-400 p-4 flex justify-between shadow-md">
      <h1 id="titulo" className="titulo header__title font-bold"> Todito</h1>

      <Routes>
        <Route path="/Personajes" element={
          <input type="text" placeholder="Buscar Personajes" className="p-1 rounded-md"/>
                    
          }/>
      </Routes>
      <NavBar/>
    </header>
  );
}
export default Header;
