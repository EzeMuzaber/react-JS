import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (     
        <div className="flex">
            <Link to="/Carrito" className="mr-4">Carrito </Link>
            <ShoppingCart>
            </ShoppingCart>
            <span>2</span>
        </div>

    )
}
export default CartWidget;

/* buscar un componente en mamba o Lucile para el span algo que se vea el numero con estilo */