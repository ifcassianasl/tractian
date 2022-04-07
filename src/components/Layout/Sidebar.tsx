import React from "react";
import { Dropdown, Layout, Menu } from "antd";
import { Link } from "react-router-dom";

import {
  SettingOutlined,
  UserOutlined,
  DatabaseOutlined,
  DownOutlined,
} from "@ant-design/icons";

import CompDropdown from "./CompDropdown";

import "./Layout.css";

const { Sider } = Layout;

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar = ({ collapsed }: SidebarProps) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      {!collapsed && <CompDropdown />}
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="/" icon={<SettingOutlined />}>
          <Link to="/">Assets</Link>
        </Menu.Item>
        <Menu.Item key="/users" icon={<UserOutlined />}>
          <Link to="/users">Users</Link>
        </Menu.Item>
        <Menu.Item key="/units" icon={<DatabaseOutlined />}>
          <Link to="/units">Units</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
