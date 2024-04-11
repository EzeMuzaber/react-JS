import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    /* agregar iconos a cada item para hacerlos mas copados con ant o la otra
    ejemplo: mundo thor (un martillo) o mundo flash (un rayo) 
    cambiar tambien el enlace de href mas adelante y ponerle el de la propia pagina*/
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item <SmileOutlined />
      </a>
    ),
    
    disabled: false,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item 
      </a>
    ),
    disabled: false,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
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
