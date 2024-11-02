import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { PageRoute } from './../constant/PageRoute';

const { Header } = Layout;

const AppHeader: React.FC = () => {
  const location = useLocation();

  return (
    <Header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ color: 'white', fontSize: '20px' }}>M R</div>
      <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
        <Menu.Item key={PageRoute.HOME}>
          <Link to={PageRoute.HOME}>Home</Link>
        </Menu.Item>
        <Menu.Item key={PageRoute.POSTS.HOME}>
          <Link to={PageRoute.POSTS.HOME}>Posts</Link>
        </Menu.Item>
        <Menu.Item key={PageRoute.USERS.HOME}>
          <Link to={PageRoute.USERS.HOME}>Users</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
