import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

import './styles.css';

const Navbar = () => (
  <div>
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode = "horizontal">
      <Menu.Item key="1" className = "item">
        <Link to = "/"><Icon type="team" /></Link>
      </Menu.Item>
      <Menu.Item key="2" className = "item">
        <Link to = "/"><Icon type="inbox" /></Link>
      </Menu.Item>
      <Menu.Item key="3" className = "item">
        <Link to = "/"><Icon type="home" /></Link>
      </Menu.Item>
      <Menu.Item key="4" className = "item">
        <Link to = "/"><Icon type="environment" /></Link>
      </Menu.Item>
    </Menu>
  </div>
);

export default Navbar;