import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Checkbox, DatePicker, Form, Input, Radio,
  Switch, Upload, Button
} from 'antd';

const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const Contacto = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-zinc-700'>
      
      <Form className='p-12 border  mt-10 grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 bg-gray-200'>
      <h1 className='text-2xl font-bold'>Nos gustaria conocerte un poco</h1>
        <div className='grid gap-2'>
          <Form.Item label="Nombres">
            <Input />
          </Form.Item>

          <Form.Item label="Apellido">
            <Input />
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

          <Form.Item label="Sitio Web">
            <Input />
          </Form.Item>

          {/* fecha cumpleaños */}
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



          {/* carga de archivos */}
          <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload action="/upload.do" listType="picture-card">
              <button
                style={{
                  border: 0,
                  background: 'none',
                }}
                type="button"
              >
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </button>
            </Upload>
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
            <Button type="primary" htmlType="submit" className='bg-blue-500'>
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};
export default Contacto;