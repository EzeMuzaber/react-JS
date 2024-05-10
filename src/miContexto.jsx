import { createContext } from "react";
import { useState } from "react";

export const contexto = createContext({});

const Provider = contexto.Provider;

function CarritoProvider(props) {

    const [carrito, setCarrito] = useState([])
    const [cantCarrito, setCantCarrito] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)

    const agregarAlCarrito = (cantidad, item) => {
        const encontrado = carrito.find(producto => producto.item.id === item.id);
        let copia;
        if (encontrado) {
            const copia = [...carrito];
            copia.forEach(producto => {
                if (producto.item.id === item.id) {
                    producto.cantidad += cantidad;
                }
            })
            setCarrito(copia);
        }else{
            setCarrito([...carrito, { item, cantidad }])
        }
        setCantCarrito(cantCarrito + cantidad);
    }

    const borrarItemDelCarrito = (item) => {
      
        const nuevoCarrito = carrito.filter(producto => producto.item.id !== item.id);
        const cantidadEliminada = carrito.filter(producto => producto.item.id === item.id).reduce((total, producto) => total + producto.cantidad, 0);
        setCarrito(nuevoCarrito);
        setCantCarrito(cantCarrito - cantidadEliminada);
    }
    /* const borrarCantidad = (id) => {

    } */
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
    }
    const vaciarCarrito = () => {
        setCarrito([])
        setCantCarrito(0)
        setprecioTotal(0)

        ValorActual.cantCarrito = []
    }
    const estaEnCarrito = (cantidad, item) => {

            /* ojo aca que yo le puse otro nombre a lo que tengo en el carrito para que lo muestre */
    }

    const ValorActual = {
        carrito: carrito,
        cantCarrito: cantCarrito,
        precioTotal: precioTotal,

        //setCarrito: setCarrito,
        agregarAlCarrito: agregarAlCarrito,
        estaEnCarrito: estaEnCarrito,
        borrarItemDelCarrito: borrarItemDelCarrito,
        //borrarCantidad: borrarCantidad,
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