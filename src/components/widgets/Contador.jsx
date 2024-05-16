import { useState } from "react"
import { Button } from "antd"

function Contador(props) {
    const [numero, setNumero] = useState(0)
    const incrementar = () => {
        setNumero(numero + 1)
    }

    const decrementar = () => {
        if (numero > 0) {
            setNumero(numero - 1)
        }

    }

    const confirmar = () => {
        if (numero !== 0) {
            props.handleConfirm(numero)
        }
    }

    const limpiar = () => {
        setNumero(0)
    }

    return (
        <div>
            <div className="flex gap-4 p-4 justify-center">
                <p>Cantidad:</p>
                <Button onClick={decrementar} className=" text-black bg-white rounded-full">-</Button>
                <p>{numero}</p>
                <Button onClick={incrementar} className=" text-black bg-white rounded-full">+</Button>
            </div>
            <Button onClick={limpiar} className=" text-black bg-white rounded-full ">Limpiar</Button>
            <Button onClick={confirmar} className=" text-black bg-white rounded-full ">confirmar</Button>
        </div>
    )
}

export default Contador