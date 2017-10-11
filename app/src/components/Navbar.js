import React from 'react';
import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;

const Navbar = () => (
  <div>
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode = "horizontal">
      <Menu.Item key="1" style = {styles.item}>
        <Icon type="user" />
      </Menu.Item>
      <Menu.Item key="2" style = {styles.item}>
        <Icon type="team" />
      </Menu.Item>
      <Menu.Item key="3" style = {styles.item}>
        <Icon type="inbox" />
      </Menu.Item>
    </Menu>
  </div>
);

const styles = {
  item: {
    width: '33vw',
    fontSize: '16px',
    textAlign: 'center'
  }
}

export default Navbar;