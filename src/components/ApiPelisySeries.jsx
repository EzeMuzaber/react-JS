import { Button } from 'antd';
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

function ApiPelisySeries({ movie }) {
    const { poster_path, backdrop_path, overview, popularity, vote_average } = movie
    const [mostrarInfoExtra, setMostrarInfoExtra] = useState(false);
    const [imagenAmpliada, setImagenAmpliada] = useState(false);
    const [imagen, setImagen] = useState(backdrop_path);
    const [descripcion, setDescripcion] = useState("");
    const porcentajeVoto = Math.floor(vote_average * 10);
    const [contador, setCounter] = useState(0)
    console.log(movie)
    const handleClick = () => {
        //setCounter(contador +1) 
        setMostrarInfoExtra(!mostrarInfoExtra);
        
    }
    const handleClick1 = () => {
        setCounter(contador + 1)

    }
    useEffect(() => {
        const fetchDescripcion = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=48a0c06b9ea9cc8b30766de05c8d4470&language=es`);
                setDescripcion(response.data.overview);
            } catch (error) {
                console.error('Error fetching movie description:', error);
            }
        };

        fetchDescripcion();
    }, [movie.id]);
    const handleImageClick = () => {
        setImagenAmpliada(!imagenAmpliada);
        if (imagenAmpliada) {
            setImagen(backdrop_path);
        } else {
            // Si la imagen no está ampliada, la mostramos en tamaño completo
            setImagen(poster_path);
        }
    }
/* para cambiar forma de foto con: poster_path o para mas chica: backdrop_path */

    return (
        <div>
            <div className="user-card p-4 rounded-md shadow-md  group">
                <div className="overflow-hidden aspect-auto relative">
                    <img className={`w-full rounded-md grayscale group-hover:grayscale-0 duration-500 cursor-pointer ${imagenAmpliada ? 'scale-normal' : 'group-hover:scale-125'}`}
                        src={`https://image.tmdb.org/t/p/w500/${imagen}`} alt="card image" onClick={handleImageClick} />
                    <div className="absolute bottom-2 right-2 text-violet-500 p-1 font-bold">
                        <FontAwesomeIcon icon={faCircleNotch} className="mr-1" /> {porcentajeVoto}%
                    </div>
                </div>
                <h2 className="my-2 font-bold">{movie.title}</h2>

                <Button onClick={handleClick}>{mostrarInfoExtra ? "Ver menos" : "Ver más"}</Button>
                <Button onClick={handleClick1} className='ml-3'>Like
                    <span>{contador}</span>
                </Button>
                {mostrarInfoExtra && (
                    <>
                        <p className="my-2">
                            <span className="font-bold">Descripcion:</span> {descripcion}</p>

                    </>
                )}

            </div>
        </div>
    );
}

export default ApiPelisySeries;