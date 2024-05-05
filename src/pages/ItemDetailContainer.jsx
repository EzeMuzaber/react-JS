import React, { useContext } from 'react'
import Contador from '../components/widgets/Contador'
import { contexto } from '../miContexto'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
function ItemDetailContainer(props) {

    const elvalordelcontexto = useContext(contexto)

    const handleConfirm = (numero) => {
        console.log(numero, props.item)
        elvalordelcontexto.agregarAlCarrito(numero,props.item)
    }
    return (
        <div className='p-6 grow'>
              <Link to="/Personajes">
            <Button className="font-bold bg-lime-400">Volver a Personajes</Button>
          </Link>
            <div className='grid users gap-6 grid-cols-1 sm:grid-cols-1 text-center'>
                <h2 className='text-2xl font-bold col-span-2'>Detalle del personaje: {props.item.name}</h2>
                <div className="overflow-auto aspect-auto col-span-2">
                    <img className="w-80 mx-auto rounded-md" src={props.item.image} alt={props.item.name} />
                </div>
                <div className="col-span-2 text-1xl font-bold">
                    <p>Especie: {props.item.species}</p>
                    <p>Su estado: {props.item.status}</p>
                    <p>Sexo: {props.item.gender}</p>
                    <p>Vive en: {props.item.origin?.name}</p>
                    <Contador handleConfirm={handleConfirm}/>
                </div>
                
            </div>
        </div>
    )
}

export default ItemDetailContainer