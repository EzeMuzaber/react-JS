import React from 'react'
import { useState, useEffect } from 'react'
import RickandMorty from '../components/widgets/RickandMorty'
import { useParams } from 'react-router-dom'
import { getProductsFromCategories } from '../components/firebase/utils'

function Personajes({ limit}) {
  const [characters, setCharacters] = useState([])
  const params = useParams()

  useEffect(() => {
    getProductsFromCategories(params.categoria)
    .then((res) => {
      setCharacters(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [params.categoria])

  return (
    <main className='p-4 grow bg-indigo-400' title="Home">
      <section className="grid users gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {characters.slice(0, limit).map((character) => {
          return <RickandMorty key={character.id} item={character} />
        })}
      </section>
    </main>
  )
}
export default Personajes