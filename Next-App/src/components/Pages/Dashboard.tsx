"use client";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import "../../styles/Dashboard.css";
import Projects from "./ProjectPageIndividual";

const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = () => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [key, setkey] = useState("1");

  const loadComponent = () => {
    switch (key) {
      case "1":
        return <></>;

      case "2":
        return <h1> Key = 2 </h1>;

      default:
        return <h1> No Page found for this route </h1>;
    }
  };

  const handleMenuItemClick = (key: string) => {
    setkey(key);

    switch (key) {
      case "1":
        break;
      case "2":
        break;

      case "3":
        break;

      default:
        break;
    }
  };

  return (
    <Layout className="dashboard">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
          defaultSelectedKeys={["1"]}
          onSelect={(e) => handleMenuItemClick(e.key)}
          items={[
            {
              key: "1",
              icon: <VideoCameraOutlined />,
              label: "Projects",
            },
            {
              key: "2",
              icon: <UserOutlined />,
              label: "Profile",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>

      <Layout>
        <Header style={{ padding: 0, background: "white" }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content>{loadComponent()}</Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
