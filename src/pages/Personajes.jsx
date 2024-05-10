import React from 'react'
import { useState, useEffect } from 'react'
import RickandMorty from '../components/RickandMorty'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsFromCategories } from '../utils'



function Personajes({ limit}) {
  /* Ricky and morty */
  const [characters, setCharacters] = useState([])
  const params = useParams()

  useEffect(() => {
    /* ESTA ES LA QUE VAAAA!!!! */
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


/* let pedido;

   if(params.categoria){
    pedido = fetch("https://rickandmortyapi.com/api/character/?species="+params.categoria)
  }else{
    pedido = fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
     
   }
      pedido.then((res) => {
        return res.json()
      })
      .then((res) => {
        setCharacters(res.results)
      })
      .catch((err) => {
        console.log(err)
      }) */

{/* <div className="pagination flex justify-center mt-4">
          <Pagination
            current={page}
            total={charactersPerPage * characters.length}
            pageSize={charactersPerPage}
            onChange={handlePageChange}
            showSizeChanger={false}
          />
        </div> */}