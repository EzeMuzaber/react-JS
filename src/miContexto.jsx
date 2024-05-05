import { createContext } from "react";
import { useState } from "react";

export const contexto = createContext({});

const Provider = contexto.Provider;

function CarritoProvider(props) {

    const [carrito, setCarrito] = useState([])
    const [cantCarrito, setCantCarrito] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)

    //console.log(props.children)

    const agregarAlCarrito = (cantidad, item) => {
        console.log(cantidad, item)
        const copia = [...carrito]
        copia.push({ item, cantidad })
        setCarrito(copia)
        console.log(copia)
        setCarrito([...carrito, { item, cantidad }])
        setCantCarrito(cantCarrito + cantidad)
        console.log("agregando")
    }

    const borrarItemDelCarrito = (item) => {
        console.log("borrando item")
        const nuevoCarrito = carrito.filter(producto => producto.item.id !== item.id);
        const cantidadEliminada = carrito.filter(producto => producto.item.id === item.id).reduce((total, producto) => total + producto.cantidad, 0);
        setCarrito(nuevoCarrito);
        setCantCarrito(cantCarrito - cantidadEliminada);
    }
    const borrarCantidad = (id) => {

        console.log("borrando cantidad")

    }
    const restarCantidad = (id) => {
    const nuevoCarrito = carrito.map((item) => {
        if (item.item.id === id) {
            const nuevaCantidad = item.cantidad > 0 ? item.cantidad - 1 : 0;
            return { ...item, cantidad: nuevaCantidad };
          }
          return item;
        });
        setCarrito(nuevoCarrito);
        setCantCarrito(cantCarrito - 1);
        console.log("restando")
    }
    const vaciarCarrito = () => {
        console.log("vaciando carrito completo")
        setCarrito([])
        setCantCarrito(0)
        setprecioTotal(0)

        ValorActual.cantCarrito = []
    }
    const estaEnCarrito = (cantidad, item) => {

    console.log("que hay en el carrito")
    }

    const ValorActual = {
        carrito: carrito,
        cantCarrito: cantCarrito,
        precioTotal: precioTotal,
        //isloggedIn: false,

        agregarAlCarrito: agregarAlCarrito,
        estaEnCarrito: estaEnCarrito,
        borrarItemDelCarrito: borrarItemDelCarrito,
        borrarCantidad: borrarCantidad,
        restarCantidad: restarCantidad,
        vaciarCarrito: vaciarCarrito
    }


    return (
        <Provider value={ValorActual}>
            {props.children}
        </Provider>
    )
}

export default CarritoProvider;