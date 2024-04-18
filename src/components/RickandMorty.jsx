import { Link } from "react-router-dom";


function RickandMorty({item}) {
    const {name, image,id} = item
    const handleClick = () =>{
        setMostrarInfoExtra(!mostrarInfoExtra);
    }

    return (
        /* condicional ternario */
        <div>
            {/* <h2>Rick and Morty</h2> */}
            <div className="user-card p-4 rounded-md shadow-md  group">
                <div className="overflow-hidden aspect-auto">
                    <img className="w-full rounded-md grayscale group-hover:grayscale-0 group-hover:scale-150
                 duration-500"src={image} alt="card image" />
                </div>
                <h2 className="my-2 font-bold">{name}</h2>
                
                <Link to={`/item/${id}`}>Ver mas</Link>
                
            </div>
        </div>
        
    )
    
}

export default RickandMorty;






