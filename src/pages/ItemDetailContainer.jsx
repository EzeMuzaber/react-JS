import React, { useContext } from 'react'
import Contador from '../components/widgets/Contador'
import { contexto } from '../miContexto'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { toast } from 'react-toastify';


function ItemDetailContainer(props) {
    const { item } = props
    //console.log(item)
    //console.log(props.item)

    const elvalordelcontexto = useContext(contexto)


    const handleConfirm = (numero) => {
        //console.log(numero, props.item)
        
        elvalordelcontexto.agregarAlCarrito(numero,item)
        toast("se agrego un producto al carrito!👌😎")
    }
    return (
        <div className='p-6 grow'>
              <Link to="/Personajes">
            <Button className="font-bold bg-lime-400">Volver a Personajes</Button>
          </Link>
            <div className='grid users gap-6 grid-cols-1 sm:grid-cols-1 text-center'>
                <h2 className='text-2xl font-bold col-span-2'>Detalle del personaje: {item.name}</h2>
                <div className="overflow-auto aspect-auto col-span-2">
                    <img className="w-80 mx-auto rounded-md" src={item.image} alt={item.name} />
                </div>
                <div className="col-span-2 text-1xl font-bold">
                <p className='text-2xl text-bold text-orange-600'>precio: ${item.price}</p>
                    <p>Especie: {item.species}</p>
                    <p>Su estado: {item.status}</p>
                    <p>Sexo: {item.gender}</p>
                    {/* <p>Origen: {item.origin?.name}</p> */}
                    <p>Origen: {item.origin}</p>
                    
                    <Contador handleConfirm={handleConfirm} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer