import React, { useState } from "react";
import { Layout } from "antd";

import Sidebar from "./Sidebar";
import Toggler from "./Toggler";

import "./Layout.css";

const { Content } = Layout;

interface LayoutProps {
  children: React.ReactNode;
}

const SiderDemo = ({ children }: LayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sidebar collapsed={collapsed} />
      <Layout className="site-layout">
        <Toggler collapsed={collapsed} toggle={toggle} />
        <Content className="site-layout-background site-layout-content">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default SiderDemo;
