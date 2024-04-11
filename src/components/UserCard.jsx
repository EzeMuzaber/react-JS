import { Button } from "antd";
import { useState } from "react";


function UserCard(props) {
    /* cambio de estado */

    /* const elResultadoDelHook= useState("Manolo")
    const nombre = elResultadoDelHook[0]
    const setNombre = elResultadoDelHook[1] */ 
    /* haciendo destrocturing  queda asi:*/

    const [nombre, setNombre] = useState("Manolo")



    /* contador ++ */
    const [contador,setCounter] =useState(0)
    const handleClick = () =>{
        /* console.log("click  al boton") */
        setNombre("Sonic")
        setCounter(contador +1) 
    }
 
    return (
        /* condicional ternario */
        <div className={`user-card p-4 rounded-md shadow-md hover:scale-105 transition group 
        ${nombre === "Manolo" ? "bg-red-400" : "bg-blue-300"}`}>
             <img className= "w-full rounded-md grayscale group-hover:grayscale-0 aspect-auto max-w-xxs"
            src="https://picsum.photos/400" alt="card image" />
            <h2 className="my-2">{nombre}</h2>
            <Button className="my-2">Ver mas</Button>{/* aca tiene que ir un href hacia la pagina correspondendiente */}
            <Button onClick={handleClick}>Like
            <span>{contador}</span></Button>
        </div>
    )
}/* <img src="https://picsum.photos/200" alt="" /> */

export default UserCard
