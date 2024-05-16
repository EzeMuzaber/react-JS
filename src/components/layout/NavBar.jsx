import { Menu } from "lucide-react";
import CartWidget from "../widgets/CartWidget";
import SubMenu from "./SubMenu";
import { Link } from "react-router-dom";
import MundoSubMenu from "./MundoSubMenu";
import { useState } from "react";

function NavBar() {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <>
            <nav className="flex gap-4 text-xl">
                <div className="hidden md:flex md:gap-4 text-xl">
                    <Link to="/Home" className="mr-4">Inicio</Link>
                    <SubMenu className="text-xl" />
                    <MundoSubMenu className="bg-gray-800" />
                    <CartWidget className="bg-gray-800" />
                    <Link to="/Contacto" className="mr-4">Contacto</Link>
                </div>
                <Menu onClick={handleClick} className="md:hidden" />

            </nav>
            <nav className={`fixed bg-white text-black flex flex-col z-10 w-1/3  top-0  p-4 text-lg h-full transition-all duration-300 ${open ? "left-0" : "-left-full"}`}>
            <Link onClick={handleClick} to="/Home" className="mr-4">Inicio</Link>
                    <SubMenu onClick={handleClick} className="bg-gray-800" />
                    <MundoSubMenu onClick={handleClick} className="bg-gray-800" />
                    <CartWidget onClick={handleClick} className="bg-gray-800" />

                    <Link onClick={handleClick} to="/Contacto" className="mr-4">Contacto</Link>
            </nav>
        </>

    );
}
export default NavBar;
