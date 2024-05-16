import React from 'react';
import { useState } from 'react';
import {
  Checkbox, DatePicker, Form, Input, Radio,
  Switch,Button
} from 'antd';
const { TextArea } = Input;

const Contacto = () => {
  const [nombreError, setNombreError] = useState(false);
  const [apellidoError, setApellidoError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleChangeNombre = (e) => {
    const inputValue = e.target.value;
    const onlyLettersAndSpacesRegex = /^[A-Za-z ]+$/;
  
    if (!onlyLettersAndSpacesRegex.test(inputValue)) {
      setNombreError(true);
    } else {
      setNombreError(false);
    }
  }
  const handleChangeApellido = (e) => {
    const inputValue = e.target.value;
    const onlyLettersAndSpacesRegex = /^[A-Za-z ]+$/;

    if (!onlyLettersAndSpacesRegex.test(inputValue)) {
      setApellidoError(true);
    } else {
      setApellidoError(false);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };
  return (
    <div className='flex justify-center items-center min-h-screen bg-zinc-700'>
      
      <Form 
      className='p-12 border  mt-10 grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 bg-gray-200'
      onFinish={handleSubmit}
      initialValues={{ newsletter: true }}>
      <h1 className='text-2xl font-bold'>Nos gustaria conocerte un poco</h1>
        <div className='grid gap-2'>

          <Form.Item label="Nombre" validateStatus={nombreError ? 'error' : ''} help={nombreError ? 'Solo letras' : ''}>
            <Input onChange={handleChangeNombre}/>
          </Form.Item>

          <Form.Item label="Apellido" validateStatus={apellidoError ? 'error' : ''} help={apellidoError ? 'Solo letras' : ''}>
            <Input onChange={handleChangeApellido}/>
          </Form.Item>

          <Form.Item
            label="Email"
            rules={[
              {
                type: 'email',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Fecha de Nacimiento">
            <DatePicker />
          </Form.Item>

          <Form.Item label="Genero">
            <Radio.Group>
              <Radio value="Hom"> Hombre </Radio>
              <Radio value="Muj"> Mujer </Radio>
              <Radio value="otro"> Otro </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Comentario">
            <TextArea rows={4} listType="picture-card"/>
          </Form.Item>

          <Form.Item label="Me gustaria recibir notificaciones via mail" valuePropName="checked">
            <Switch className='bg-slate-600'/>
          </Form.Item>

          <Form.Item label="" valuePropName="checked">
            <Checkbox>Soy Mayor de 21 años</Checkbox>
          </Form.Item>
          <Form.Item label="" valuePropName="checked">
            <Checkbox>Acepto las politicas de la pagina</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 24 }}>
            <Button type="primary" htmlType="submit" onClick={handleSubmit} className='bg-blue-500'>
              Enviar
            </Button>
          </Form.Item>
          {submitted && (
            <p className="text-center text-blue-700 font-bold text-lg">Información enviada. ¡Gracias por tu mensaje!</p>
          )}
        </div>
      </Form>
    </div>
  );
};
export default Contacto;