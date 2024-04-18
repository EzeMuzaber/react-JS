import React from 'react'
import { useState, useEffect } from 'react'
import RickandMorty from '../components/RickandMorty'

function Personajes() {

  /* Ricky and morty */
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        setCharacters(res.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
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