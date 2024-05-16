import React, { useContext } from 'react';
import { contexto } from '../../miContexto';

function CartDetail() {
  const elvalordelcontexto = useContext(contexto);
  return (
    <div className="p-4 bg-slate-100 hover:bg-gray-300">
        {elvalordelcontexto.carrito.length === 0 ? <p className='text-sm font-bold p-6'>No hay items en el carrito</p> : null}
      {elvalordelcontexto.carrito.map((producto) => (
        <div key={producto.item.id} className="mb-4 flex border border-black p-2">
          <img src={producto.item.image} alt={producto.item.name} className="w-16 h-16 mr-2" />
          <div className="flex flex-col font-bold">
          <span className=" flex">{producto.item.name}</span>
          <span className="ml-2 ">Cantidad: {producto.cantidad}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartDetail;