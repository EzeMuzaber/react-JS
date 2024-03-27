import { ShoppingCart } from "lucide-react";

const CartWidget = () => {
    return (     
        <div className="flex">
            <a href="#" className="mr-4 ">Compras </a>
            <ShoppingCart>
            </ShoppingCart>
            <span>2</span>
        </div>

    )
}
export default CartWidget;

/* buscar un componente en mamba o Lucile para el span algo que se vea el numero con estilo */