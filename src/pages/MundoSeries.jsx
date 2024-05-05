import React, { useState, useEffect } from 'react';
import ApiPelisySeries from '../components/api/ApiPelisySeries';
import axios from 'axios';
import { Pagination } from 'antd';

function MundoSeries({limit, mostrarPagination=true}) {
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(1);
  const seriesPage = 10;
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false&language=es&page=${page}&sort_by=popularity.desc&api_key=48a0c06b9ea9cc8b30766de05c8d4470`)
      .then(response => {
        const seriesData = response.data.results;
        setSeries(seriesData);
      })
      .catch(error => {
        console.error('Error fetching TV series:', error);
      });
  }, [page]);

  
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <main className='p-4 grow bg-indigo-400' title="Home">
      <section className="grid users gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {series.slice(0,limit).map((serie) => (
          <ApiPelisySeries key={serie.id} serie={serie} />
        ))}
      </section>
      {mostrarPagination && (
        <div className="pagination flex justify-center mt-4">
          <Pagination
            current={page}
            total={series.length * seriesPage}
            pageSize={seriesPage}
            onChange={handlePageChange}
            showSizeChanger={false}
            
          />
        </div>
      )}
    </main>
  );
}

export default MundoSeries
