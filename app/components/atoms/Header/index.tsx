import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Layout, Menu } from 'antd';

const Header: FC = () => {
  const { Header } = Layout;
  const { Item } = Menu;

  const { query } = useRouter();

  const selectedKey = query.name ? query.name : '/';

  return (
    <Header>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={[selectedKey as string]}
        style={{ lineHeight: '64px' }}
      >
        <Item key="/">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Item>
        <Item key="tatooine">
          <Link href="/planets/[name]" as="/planets/tatooine">
            <a>Tatooine</a>
          </Link>
        </Item>
        <Item key="alderaan">
          <Link href="/planets/[name]" as="/planets/alderaan">
            <a>Alderaan</a>
          </Link>
        </Item>
        <Item key="yavin">
          <Link href="/planets/[name]" as="/planets/yavin">
            <a>Yavin</a>
          </Link>
        </Item>
      </Menu>
      <style jsx>{`
        background: #fff;
      `}</style>
    </Header>
  );
};

export default Header;
