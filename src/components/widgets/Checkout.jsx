import React, { useState, useContext } from 'react';
import { Form, Input, Button} from 'antd';
import { createSale } from '../firebase/utils';
import { contexto } from '../../miContexto';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Checkout() {
  const elvalordelcontexto = useContext(contexto);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    dni: '',
    celular: '',
    direccion: '',
  });

  const [saleId, setSaleId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaleSubmitted, setIsSaleSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.nombre === '' || formData.apellido === '' || formData.email === '' || formData.dni === '' || formData.celular === '' || formData.direccion === '') {
      toast.error('Por favor completa todos los campos');
      return;
    }
    if (isSaleSubmitted) {
      return;
    }
    setIsSubmitting(true);

    createSale(elvalordelcontexto.carrito,  formData )
      .then((docRef) => {
        elvalordelcontexto.vaciarCarrito();
        toast.success('Se ha realizado la compra de compra');
        setSaleId(docRef.id);
      })
      .catch((error) => {
        console.log("error al realizar la comprar", error)
        toast.error("Error al realizar la compra");
      })
      .finally(() => {
        setIsSubmitting(false);
        setIsSaleSubmitted(true);
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold p-6">Checkout</h2>
      <p  className="text-xl font-bold p-6">Ingresa tus datos para realizar la compra</p>
      <Link to="/Carrito">
        <Button className="font-bold bg-lime-400 ">Volver al carrito</Button>
      </Link>
      <div className="p-6">
        <Form onSubmit={handleSubmit}>
          <Form.Item
            label="Nombre "
            name="nombre"
            rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
          >
            <Input name='nombre' value={formData.nombre} onChange={handleChange} />
          </Form.Item>

          <Form.Item
            label="Apellido"
            name="apellido"
            rules={[{ required: true, message: 'Por favor ingresa tu apellido' }]}
          >
            <Input name='apellido' value={formData.apellido} onChange={handleChange} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Por favor ingresa tu correo electrónico' }]}
          >
            <Input name='email' value={formData.email} onChange={handleChange} />
          </Form.Item>

          <Form.Item
            label="DNI"
            name="dni"
            rules={[{ required: true, message: 'Por favor ingresa tu DNI' }]}
          >
            <Input name='dni' value={formData.dni} onChange={handleChange} />
          </Form.Item>

          <Form.Item
            label="Celular"
            name="celular"
            rules={[{ required: true, message: 'Por favor ingresa tu número de celular' }]}
          >
            <Input name='celular' value={formData.celular} onChange={handleChange} />
          </Form.Item>

          <Form.Item
            label="Dirección"
            name="direccion"
            rules={[{ required: true, message: 'Por favor ingresa tu dirección' }]}
          >
            <Input name='direccion' value={formData.direccion} onChange={handleChange} />
          </Form.Item>

          <Button 
          type='primary' 
          htmlType="submit" 
          onClick={handleSubmit} 
          disabled={isSubmitting} 
          className='m-2 bg-green-400 font-bold'>
            {isSubmitting ? 'Enviando...' : 'Finalizar Compra'}
            </Button>
        </Form>

        {saleId && (
          <div className='mt-4'>
            <p>Compra realizada con éxito.</p>
            <Link to={`/ticket/${saleId}`} className='text-blue-500 underline'>Ver ticket</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Checkout;
