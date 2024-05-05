import { DownOutlined,} from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';

    const items = [
      {
        key: '1',
        label: (
          <Link to="/MundoPelis">Mundo Pelis </Link>
        ),
      },
      {
        key: '2',
        label: (
          <Link to="/MundoSeries">Mundo Series </Link>
        ),
      },
    ];
  
 const MundoSubMenu = () => (
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
  
  export default MundoSubMenu;