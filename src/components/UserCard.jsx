import { Button } from "antd";
import { useState } from "react";




function UserCard({character}) {
    const {name, image} = character
    const [contador,setCounter] =useState(0)
    const handleClick = () =>{
    setCounter(contador +1) 
}
    return (
        /* condicional ternario */
        <div className="user-card p-4 grid-cols-2 rounded-md shadow-md  group">
                <div className="overflow-hidden aspect-auto">
                    <img className="w-full rounded-md grayscale group-hover:grayscale-0 group-hover:scale-150
                 duration-500"src={image} alt="card image" />
                </div>
            <h2 className="my-2 font-bold">{name}</h2>
            <Button>ver mas</Button>
        </div>
    )
}
export default UserCard


/* 

/* cambio de estado */

/* const elResultadoDelHook= useState("Manolo")
const nombre = elResultadoDelHook[0]
const setNombre = elResultadoDelHook[1] */
/* haciendo destrocturing  queda asi:*/

//const [nombre, setNombre] = useState("Manolo")



/* contador ++ */
/* const [contador,setCounter] =useState(0)
const handleClick = () =>{
    setNombre("Sonic")
    setCounter(contador +1) 
} */




{/* <div className={`user-card p-4 rounded-md shadow-md hover:scale-105 transition group 
        ${nombre === "Manolo" ? "bg-red-400" : "bg-blue-300"}`}>
             <img className= "w-full rounded-md grayscale group-hover:grayscale-0 aspect-auto max-w-xxs"
            src="https://picsum.photos/400" alt="card image"/>
            <h2 className="my-2">{nombre}</h2>
            <Button className="my-2">Ver mas</Button>{ */}/* aca tiene que ir un href hacia la pagina correspondendiente */
/*<Button onClick={handleClick}>Like
<span>{contador}</span></Button>
</div> */