/* import { MenuOutlined } from "@ant-design/icons"; */
/* import { SquareMenu } from "lucide-react"; */
import { Menu } from "lucide-react";
import CartWidget from "./CartWidget";



function NavBar() {

    return (
        <nav className="hidden md:flex md:gap-4">
            <a href="#" className="mr-4">Inicio</a>
            <a href="#" className="mr-4">Mundo</a>
                <CartWidget/>
            <a href="#" className="mr-4">Contacto</a>
            <Menu />
        </nav>
    );
}
export default NavBar;

/* <a href="#" className="mr-4 ">Compras </a> */