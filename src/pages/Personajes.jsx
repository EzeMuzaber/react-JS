import React from 'react'
import { useState, useEffect } from 'react'
import RickandMorty from '../components/RickandMorty'
import { useParams } from 'react-router-dom'

function Personajes() {
  
  /* Ricky and morty */
  const [characters, setCharacters] = useState([])
  const params = useParams()

  useEffect(() => {
   let pedido;

   if(params.categoria){
    pedido = fetch("https://rickandmortyapi.com/api/character/?species="+params.categoria)
   }else{
    pedido = fetch("https://rickandmortyapi.com/api/character")
     
   }
  
    /* fetch("https://rickandmortyapi.com/api/character") */
      pedido.then((res) => {
        return res.json()
      })
      .then((res) => {
        setCharacters(res.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [params.categoria])
  return (
    <main className='p-4 grow' title="Home">
    <section className="grid users gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {characters.map((character) => {
          return <RickandMorty key={character.id} item={character} />
        })}
        </section>
  </main>
  )
}

export default Personajes