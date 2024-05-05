import React from 'react'
import { useContext } from 'react'
import { contexto } from '../miContexto'
import { Button } from 'antd'


function Carrito() {
  const elvalordelcontexto = useContext(contexto);
  const { carrito, restarCantidad } = useContext(contexto);


  const handleBorrarItem = (item) => {
    elvalordelcontexto.borrarItemDelCarrito(item)
  };
  const handleRestarCantidad = (id) => {
    restarCantidad(id)
  }
  const handleClearCart = () => {
    elvalordelcontexto.vaciarCarrito();
  }
  return (
    <div className='p-6  text-center '>
      <h2 className='text-3xl font-bold ' >Carrito</h2>
      {elvalordelcontexto.carrito.length === 0 ? <p className='text-xl font-bold p-6'>No hay items en el carrito</p> : null}
      <ul className='grid grid-cols-1 gap-4'>
        {elvalordelcontexto.carrito.map((producto) => (
          <li key={producto.id} className='p-4 '>
            <div className='border-2 border-black border-solid rounded-xl border-r-8  border-l-4 bg-lime-100'>
            <div className='grid grid-cols-1 gap-6 text-center p-4'>
              <div className='flex justify-center'>
                <img src={producto.item.image} alt={producto.item.name} className='w-32 rounded-xl ' />
                <div className='col-span-2 font-bold'>
                  <h3 className=''>{producto.item.name}</h3>
                  
                  <p className='text-center'>Cantidad: {producto.cantidad}</p>
                  
                  <p>Precio: ${producto.item.price * producto.cantidad}</p>
                  
                  <Button onClick={() => handleBorrarItem(producto.item)} className='m-2 bg-red-400 font-bold'>Quitar item</Button>
                  <Button onClick={() => handleRestarCantidad(producto.item.id)} className='m-2 bg-yellow-200 font-bold'>Quitar 1</Button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p>Total: ${elvalordelcontexto.precioTotal}</p>
      <Button onClick={handleClearCart}>Vaciar carrito</Button>
      <Button>Finalizar compra</Button>

    </div>
  )
}

export default Carrito