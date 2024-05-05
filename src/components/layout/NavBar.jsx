import { Menu } from "lucide-react";
import CartWidget from "../widgets/CartWidget";
import SubMenu from "./SubMenu";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "../../miContexto";
import MundoSubMenu from "./MundoSubMenu";


function NavBar() {
    const elvalordelcontexto = useContext(contexto)
    return (
        <nav className="flex gap-4 ">
            <div className="hidden md:flex md:gap-4 ">
                <Link to="/Home" className="mr-4">Inicio</Link>
                <SubMenu className="bg-gray-800"/>
                <MundoSubMenu className="bg-gray-800"/>
                <CartWidget className="bg-gray-800"/>
               
                <Link to="/Contacto" className="mr-4">Contacto</Link>
            </div>

            <Menu className="md:hidden" />
        </nav>
    );
}
export default NavBar;
