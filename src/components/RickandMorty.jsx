import { useState } from "react";
import { Button } from "antd";
//import axios from 'axios';


function RickandMorty({character}) {
    const {name, image,species,status} = character
    //const [contador,setCounter] =useState(0)
    console.log(character)
    const [mostrarInfoExtra, setMostrarInfoExtra] = useState(false);
    const handleClick = () =>{
        //setCounter(contador +1) 
        setMostrarInfoExtra(!mostrarInfoExtra);
    }

    return (
        /* condicional ternario */
        <div>
            {/* <h2>Rick and Morty</h2> */}
            <div className="user-card p-4 rounded-md shadow-md  group">
                <div className="overflow-hidden aspect-auto">
                    <img className="w-full rounded-md grayscale group-hover:grayscale-0 group-hover:scale-150
                 duration-500"src={image} alt="card image" />
                </div>
                <h2 className="my-2 font-bold">{name}</h2>
                <Button onClick={handleClick}>{mostrarInfoExtra ? "Ver menos" : "Ver más"}</Button>
                {mostrarInfoExtra && (
                    <>
                        <p className="my-2">
                        <span className="font-bold">Especie:</span> {species}</p>
                        <p className="my-2">
                        <span className="font-bold">Status:</span> {status}</p>
                        
                    </>
                )}
                
                {/* <Button onClick={handleClick}>Like
                <span>{contador}</span></Button> */}
            </div>
        </div>
        
    )
    
}

export default RickandMorty;








/* {/* <div>   
            <h1>Rick and Morty</h1>
            <div className={`user-card p-4 rounded-md shadow-md hover:scale-105 transition group`}>
                {characters.map((character) => (
                    <img className="w-full rounded-md grayscale group-hover:grayscale-0 aspect-auto max-w-xxs"
                    src={character.image} alt="card image" />
                ))}     
                <Button className="my-2">Ver mas</Button>
                <Button className="my-2 ">Like</Button>
            </div>
        </div> */





/* import React from 'react'

fetch('https://rickandmortyapi.com/api/character')
.then((res) =>{
    return res.json()
})
.then((res) =>{
    console.log(res.results)
    res.results.forEach((character)=>{
        console.log(character)
    })
})
.catch((err) =>{
    console.log(err)
})



function RickandMorty() {
}
export default RickandMorty */
