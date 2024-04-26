import { Menu } from "lucide-react";
import CartWidget from "../CartWidget";
import SubMenu from "./SubMenu";
import { Link } from "react-router-dom";
import { SmileOutlined } from "@ant-design/icons";



function NavBar() {

    return (
        <nav className="flex gap-4">
            <div className="hidden md:flex md:gap-4">
            <Link to="/" className="mr-4">Inicio</Link>
                <SubMenu/>
                <Link to="/MundoPelis">Mundo Pelis  <SmileOutlined /></Link>
                <Link to="/MundoSeries">Mundo Series  <SmileOutlined /></Link>
                <CartWidget/>
                <Link to="/Contacto" className="mr-4">Contacto</Link>
            </div>
            {/* falta que el icono Menu -> tenga accion y se muestre todo el menu dentro de el */}
            <Menu  className="md:hidden"/>
        </nav>
    );
}
export default NavBar;

/* <a href="#" className="mr-4 ">Compras </a> */