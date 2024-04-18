import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';

const items = [
  {
    key: '1',
    label: (
      <Link to="/Personajes">Personajes</Link>
      
    ),
  },
  {
    key: '2',
    /* agregar iconos a cada item para hacerlos mas copados con ant o la otra
    ejemplo: mundo thor (un martillo) o mundo flash (un rayo) 
    cambiar tambien el enlace de href mas adelante y ponerle el de la propia pagina*/
    label: (
      <Link to="/category/Human">Humanos  <SmileOutlined /></Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link to="/category/Alien">Aliens  <SmileOutlined /></Link>
      /* <Link to="/MundoSeries">Mundo Series  <SmileOutlined /></Link> */
    ),
  },
  /* {
    key: '4',
    danger: true,
    label: 'a danger item',
    disabled: true,
  }, */
];
const SubMenu = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Mundo
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default SubMenu;
