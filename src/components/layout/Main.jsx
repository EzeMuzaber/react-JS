import Timer from "../widgets/Timer";
import ApiWeather from "../api/ApiWeather";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../../pages/Home";
import Personajes from "../../pages/Personajes";
import ItemListContainer from "../../pages/ItemListContainer";
import MundoPelis from "../../pages/MundoPelis";
import MundoSeries from "../../pages/MundoSeries";
import Contacto from "../../pages/Contacto";
import Carrito from "../../pages/Carrito";



function Main() {
  const location = useLocation();

  // Función para obtener el título según la ruta actual
  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Bienvenidos a de 𓆩『𝐿Ꭷ𝓚 𝒊』𓆪";
      case "/Personajes":
        return "Bienvenido a Personajes";
      case "/MundoPelis":
        return "Bienvenido a Mundo de Películas";
      case "/MundoSeries":
        return "Bienvenido a Mundo de Series"; 
        case "/category/Human":
        return "Humanos";
        case "/category/Alien":
        return "Aliens";
      case "/Carrito":
        return "Tu carrito de compras";
      case "/Contacto":
        return "Contáctanos";
      default:
        return "Bienvenidos a 𓆩『𝐿Ꭷ𝓚 𝒊』𓆪";
    }
  };

  return (

    <main className='p-4 grow bg-gray-200' title="Home">

      {/* inicio fecha y hora */}
      <div className="flex justify-between items-center ">
        <div className="text-left text-sm font-bold">
          <Timer />
        </div>

        {/* titulo de la pagina por un itemListContainer */}
        <div className="mx-auto p-6 font-bold ">
          <h1 className="text-green-700 font-bold  lg:text-xl xl:text-2xl">{getTitle()}</h1>
        </div>

        {/* api del clima */}
        <ApiWeather />
      </div>
      {/* fin fecha y hora y api del clima */}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Personajes" element={<Personajes />} />
        <Route path="/category/:categoria" element={<Personajes />} />
        {/* <Route path="/category/Humanos" element={<Personajes />} />
        <Route path="/category/Aliens" element={<Personajes />} /> */}
        <Route path="/item/:id" element={<ItemListContainer />} />
        <Route path="/MundoPelis" element={<MundoPelis />} />
        <Route path="/MundoSeries" element={<MundoSeries />} />
        <Route path="/Carrito" element={<Carrito />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </main>
  )
}
export default Main
