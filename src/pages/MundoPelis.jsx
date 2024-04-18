import React from 'react'
import { useState, useEffect } from 'react'
import ApiPelisySeries from '../components/ApiPelisySeries'
import axios from 'axios';

function MundoPelis() {
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
      <section className="grid users gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {movies.map((movie) => {
          return <ApiPelisySeries key={movie.id} movie={movie} />
        })}
      </section>
    </main>
  )
}

export default MundoPelis