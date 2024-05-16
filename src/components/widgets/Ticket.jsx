import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../firebase/firebase";

function Ticket() {
    const { id } = useParams();
    const [venta, setVenta] = useState(null);
    const db = getFirestore(app);

    useEffect(() => {
        const fetchVenta = async () => {
            const ventaDoc = await getDoc(doc(db, "ventas", id));
            if (ventaDoc.exists()) {
                setVenta(ventaDoc.data());
            }
        };
        fetchVenta();
    }, [id, db]);

    if (!venta) {
        return <p className="text-xl font-bold">Cargando...</p>;
    }
    return (
        <div className="ticket bg-gray-100 border border-gray-400 rounded-lg p-8 max-w-md mx-auto">
            <h2 className="font-bold text-2xl text-green-700 mb-4">Ticket de compra</h2>

            <div className="mb-6">
            <h3 className="font-bold  text-lg text-green-700">Datos del Cliente</h3>
            <hr className='border-black '/>
            <p><span className='font-bold'>Nombre:</span> {venta.usuario.nombre}</p>
            <p><span className='font-bold'>Apellido:</span> {venta.usuario.apellido}</p>
            <p><span className='font-bold'>Email:</span> {venta.usuario.email}</p>
            <p><span className='font-bold'>DNI:</span> {venta.usuario.dni}</p>
            <p><span className='font-bold'>Celular:</span> {venta.usuario.celular}</p>
            <p><span className='font-bold'>Dirección:</span> {venta.usuario.direccion}</p>
            </div>

            <div className=" mb-6">
                <h3 className="font-bold  text-lg text-green-700">Detalles de la Compra</h3>
                <hr className='border-black '/>
                <p><span className='font-bold text-lg'>ID de la compra:</span> {id}</p>
                
                <ul className="font-bold ">
                    {venta.items.map((item, index) => (
                        <li key={index}>
                            <p>{item.item.name} - Cantidad: {item.cantidad}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <p className="font-bold mb-4 text-xl text-green-700">Total: ${venta.importeTotal.toFixed(2)}</p>
            <p className="font-bold mb-4">¡Gracias por tu compra!</p>

            <div className="mb-6 border border-zinc-400 p-4">
            <p>Esta factura es valida como comprobante de compra, conservela bien.</p>
            <p>El numero de ID es su numero de identificacion.</p>
            <p>Para quejas llamar al: 0800 124 5672</p>
            <p>El libro de queja esta a su disposicion</p>
            </div>
            
        </div>
    );
}

export default Ticket;