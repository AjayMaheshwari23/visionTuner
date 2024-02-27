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
import Projects from "./Projects";

const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = () => {

  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [key, setkey] = useState("1");

  const loadComponent = () => {
    switch (key) {
      case "1":
        return <Projects />;

      case "2":
        return <h1> Key = 2 </h1>;

      default:
        return <h1> No Page found for this route </h1>;
    }
  };

  const handleMenuItemClick = (key: string) => 
  {
    setkey(key);

    switch (key) {
      case "1":
        //router.push("/profile");
        break;
      case "2":

        // router.push("/projects");
        break;

      case "3":
        // router.push("/nav3");
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