import { Menu } from "lucide-react";
import CartWidget from "./CartWidget";
import SubMenu from "./SubMenu";




function NavBar() {

    return (
        <nav className="flex gap-4">
            <div className="hidden md:flex md:gap-4">
            <a href="#" className="mr-4">Inicio</a>
                <SubMenu/>
                <CartWidget/>
            <a href="#" className="mr-4">Contacto</a>
            </div>
            {/* falta que el icono Menu -> tenga accion y se muestre todo el menu dentro de el */}
            <Menu  className="md:hidden"/>
        </nav>
    );
}
export default NavBar;

/* <a href="#" className="mr-4 ">Compras </a> */