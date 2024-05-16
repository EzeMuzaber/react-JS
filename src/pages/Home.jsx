import React from 'react'
import { Link } from 'react-router-dom';
import MundoPelis from '../pages/MundoPelis';
import MundoSeries from '../pages/MundoSeries';
import Personajes from '../pages/Personajes';
import { Button } from 'antd';


function Home() {
  return (
    <div className="p-4 bg-indigo-400">
       <section className="mt-4">
        <h2 className="mb-4 text-2xl font-bold">Mundo Pelis</h2>
        <MundoPelis limit={4} mostrarPagination={false}/>
        <div className="flex justify-center ">
        <Link to="/MundoPelis">
          <Button className="font-bold text-base rounded-full mt-2">Ver más Pelis</Button>
        </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">MundoSeries</h2>
        <MundoSeries limit={4} mostrarPagination={false}/>
        <div className="flex justify-center mt-2">
        <Link to="/MundoSeries">
          <Button className="font-bold text-base rounded-full mt-2">Ver más Series</Button>
        </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Personajes</h2>
        <Personajes limit={4} mostrarPagination={false}/>
        <div className="flex justify-center mt-2">
        <Link to="/Personajes">
          <Button className="font-bold text-base rounded-full mt-2">Ver más Personajes</Button>
        </Link>
        </div>
      </section>
    </div>
  )
}

export default Home