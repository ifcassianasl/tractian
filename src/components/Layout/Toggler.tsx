import React from "react";
import { Layout } from "antd";
import { AlignLeftOutlined, AlignRightOutlined } from "@ant-design/icons";

const { Header } = Layout;

interface TogglerProps {
  collapsed: boolean;
  toggle: () => void;
}

const Toggler = ({ collapsed, toggle }: TogglerProps) => {
  return (
    <Header className="site-layout-background">
      {React.createElement(collapsed ? AlignRightOutlined : AlignLeftOutlined, {
        className: "trigger",
        onClick: toggle,
      })}
    </Header>
  );
};

export default Toggler;
