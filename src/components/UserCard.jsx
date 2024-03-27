
import { Button } from "antd";
import { useState } from "react";


function UserCard(props) {
    const [contador,setCounter] =useState(0)
    const handleClick = () =>{
        setCounter(contador +1)
    }
    
    return (
        <div className="user-card">
            <img src="https://picsum.photos/300" alt="" />
            <h2>{props.nombre}</h2>
            <Button>Ver mas</Button>
            <Button onClick={handleClick}>Like
            <span>{contador}</span></Button>
        </div>
    )
}/* <img src="https://picsum.photos/200" alt="" /> */

export default UserCard
