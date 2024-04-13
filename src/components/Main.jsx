import ItemListContainer from "./ItemListContainer";
//import UserCard from './UserCard'
import Timer from "./Timer";
import { useEffect, useState } from "react";
import RickandMorty from "./RickandMorty";
//import ApiRickyandMorti from "./ApiRickyandMorti";
//import Marvel from "./Marvel";
import ApiWeather from "./ApiWeather";



function Main() {

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
      {/* inicio fecha y hora */}
      <div className="flex justify-between items-center ">
        <div className="text-left text-sm font-bold">
          <Timer />
        </div>
        <div className="mx-auto p-6 font-bold size-30 text-xl">
          <ItemListContainer greeting="Bienvenidos a Rick and Morty" />
        </div>
        <ApiWeather/>
      </div>
      {/* fin fecha y hora */}

      <section className="grid users gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
    {characters.map((character) => {
          return <RickandMorty key={character.id} character={character} />
        })}
      </section>
    </main>
  )
}
export default Main
