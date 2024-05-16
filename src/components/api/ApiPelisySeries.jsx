import { Button } from 'antd';
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

function ApiPelisySeries({ movie, serie }) {
    const {  id, title: tituloPelicula,poster_path: imagenPelicula,  backdrop_path: imagenFondoPelicula, overview: descripcionPelicula, popularity, vote_average } = movie|| {};
    const { id: idSerie, name: tituloSerie, overview: descripcionSerie, poster_path: imagenSerie, backdrop_path: imagenFondoSerie, popularity: popularidadSerie, vote_average: votosSerie } = serie|| {};

    const [mostrarInfoExtra, setMostrarInfoExtra] = useState(false);
    const [imagenAmpliada, setImagenAmpliada] = useState(false);
    const [imagen, setImagen] = useState(imagenFondoPelicula || imagenFondoSerie);
    const [descripcion, setDescripcion] = useState(descripcionPelicula || descripcionSerie);
    const [contador, setCounter] = useState(0)
    const porcentajeVoto = Math.floor((vote_average || votosSerie) * 10);


    const handleClick = () => {
        setMostrarInfoExtra(!mostrarInfoExtra);

    }
    const handleClickLike = () => {
        setCounter(contador + 1)

    }
    useEffect(() => {
        const fetchDescripcion = async () => {
            try {
                let url = `https://api.themoviedb.org/3/movie/${id}?api_key=48a0c06b9ea9cc8b30766de05c8d4470&language=es`;
                if (idSerie) {
                    url = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=48a0c06b9ea9cc8b30766de05c8d4470&language=es`;
                }
                const response = await axios.get(url);
                setDescripcion(response.data.overview);
            } catch (error) {
                console.error('Error fetching movie description:', error);
            }
        };

        fetchDescripcion();
    }, [id, idSerie]);

    const handleImageClick = () => {
        setImagenAmpliada(!imagenAmpliada);
        
        if (imagenAmpliada) {
            setImagen(imagenFondoPelicula || imagenFondoSerie);
        } else {
            setImagen(imagenPelicula || imagenSerie);
        }
    };

    return (
        <div>
            <div className="user-card p-4 rounded-md shadow-md group">
                <div className="overflow-hidden aspect-auto relative">
                    <img className={`w-full rounded-md grayscale${!imagenAmpliada ? ' group-hover:grayscale-0' : 'group-hover:grayscale'}  duration-500 cursor-pointer }`}
                        src={`https://image.tmdb.org/t/p/w500/${imagen}`} alt="card image" onClick={handleImageClick} />
                    <div className="absolute bottom-2 right-2 text-violet-500 p-1 font-bold">
                        <FontAwesomeIcon icon={faCircleNotch} className="mr-1" /> {porcentajeVoto}%
                    </div>
                </div>
                <h2 className="my-2 font-bold">{tituloPelicula || tituloSerie}</h2>
                <Button onClick={handleClick}>{mostrarInfoExtra ? "Ver menos" : "Ver más"}</Button>
                <Button onClick={handleClickLike} className='ml-3'>Like <span className=" mx-1">{contador}</span></Button>
                {mostrarInfoExtra && (
                    <p className="my-2">
                        <span className="font-bold">Descripción:</span> {descripcion}
                    </p>
                )}
            </div>
        </div>
    );
}

export default ApiPelisySeries;

