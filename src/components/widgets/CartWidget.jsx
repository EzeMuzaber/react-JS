import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "../../miContexto";
import {Dropdown} from 'antd';
import CartDetail from "./CartDetail";


const items = [
    {
        key: '1',
        label: <CartDetail />,
      },
    {
      key: "2",
      label: (
        <Link to="/Carrito" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 font-bold text-center">
          Ver carrito completo
        </Link>
      ),
    },
  ];

const CartSubMenu = () => (
    <Dropdown
    menu={{
        items,
      }}
      
    trigger={["click"]}
    placement="bottomRight"
  >
    <a className="inline-flex items-center cursor-pointer">
      <ShoppingCart />
    </a>
  </Dropdown>
);


const CartWidget = () => {
    const elvalordelcontexto = useContext(contexto);
    const cantidadCarrito = elvalordelcontexto.cantCarrito > 0 ? elvalordelcontexto.cantCarrito : 0;

    return (     
            <div className="flex relative">
                <Link to="/Carrito" className="mr-4">Carrito {' '}</Link>
                
                <CartSubMenu />
                <span>{cantidadCarrito}</span>
            </div>
        
    );
}
export default CartWidget;

/* buscar un componente en mamba o Lucile para el span algo que se vea el numero con estilo */