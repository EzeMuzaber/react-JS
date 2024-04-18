import React from 'react'

function ItemDetailContainer(props) {
    return (
        <div className='p-6 grow'>
            <div className='grid users gap-6 grid-cols-1 sm:grid-cols-1 text-center'>
                <h2 className='text-2xl font-bold col-span-2'>Detalle del personaje: {props.item.name}</h2>
                <div className="overflow-auto aspect-auto col-span-2">
                    <img className="w-96 mx-auto rounded-md" src={props.item.image} alt={props.item.name} />
                </div>
                <div className="col-span-2 text-2xl font-bold">
                    <p>Especie: {props.item.species}</p>
                    <p>Su estado: {props.item.status}</p>
                    <p>Sexo: {props.item.gender}</p>
                    <p>Vive en: {props.item.origin?.name}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer