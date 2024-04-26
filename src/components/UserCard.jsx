
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
        </div>
    )
}
export default UserCard