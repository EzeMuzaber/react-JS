import React from 'react'
import { useState, useEffect } from 'react'
import { Pagination } from 'antd';
import ApiPelisySeries from '../components/api/ApiPelisySeries'
import axios from 'axios';

function MundoPelis({ limit, mostrarPagination=true }) {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const moviesPage = 10;

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=48a0c06b9ea9cc8b30766de05c8d4470&include_adult=true&language=es&page=${page}&append_to_response=images`)
      .then(response => {
        const moviesData = response.data.results;
        setMovies(moviesData);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <main className='p-4 grow bg-indigo-400' title="Home">
      <section className="grid users gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {movies.slice(0, limit).map((movie) => {
          return <ApiPelisySeries key={movie.id} movie={movie} />
        })}
      </section>
      {mostrarPagination && (
        <div className="pagination flex justify-center mt-4">
          <Pagination
            current={page}
            total={movies.length * moviesPage}
            pageSize={moviesPage}
            onChange={handlePageChange}
            showSizeChanger={false}
            
          />
        </div>
      )}
    </main>
  )
}

export default MundoPelis