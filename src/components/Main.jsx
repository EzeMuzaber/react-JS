import ItemListContainer from "./ItemListContainer";
//import UserCard from './UserCard'
import Timer from "./Timer";
import { useEffect, useState } from "react";
import RickandMorty from "./RickandMorty";
//import ApiRickyandMorti from "./ApiRickyandMorti";
//import Marvel from "./Marvel";
import ApiWeather from "./ApiWeather";
import ApiPelisySeries from "./ApiPelisySeries";
import axios from 'axios';

function Main() {
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
  /* Peliculas */
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=48a0c06b9ea9cc8b30766de05c8d4470&language=es&append_to_response=videos,images')
      .then(response => {
        const moviesData = response.data.results;
        setMovies(moviesData);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);
  
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
        {/* api del clima */}
        <ApiWeather />
      </div>
      {/* fin fecha y hora */}

      <section className="grid users gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {/* {characters.map((character) => {
          return <RickandMorty key={character.id} character={character} />
        })} */}
        
        {movies.map((movie) => {
          return <ApiPelisySeries key={movie.id} movie={movie} />
        })}
        
      </section>
    </main>
  )
}
export default Main
