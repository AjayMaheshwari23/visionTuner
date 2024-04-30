"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./dashboard.css";
import Logoutbtn from "@/components/buttons/Logoutbtn";
import { useAppContext } from "@/contexts/AppContext";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  SettingOutlined,
  AlertOutlined,
  CustomerServiceOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";

import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import "../../styles/Dashboard.css";

const { Header, Sider, Content } = Layout;

type SiderTheme = "light" | "dark";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { state, setState } = useAppContext();
  // console.log(state);
  const themeclrB = state.theme === "dark" ? "rgb(4,20,40)" : "white";
  const themeclrW = state.theme === "dark" ? "white" : "rgb(4,20,40)";
  const themeclrB2 = state.theme === "dark" ? "#001529" : "white";
  const borderClrW = state.theme === "dark" ? "rgb(160,150,150)" : "rgb(200,200,200)";

  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuItemClick = (key: string) => {

    switch (key) {
      case "1":
        router.push("/dashboard/profile");
        break;

      case "2":
        router.push("/dashboard/projects");
        break;

      case "3":
        router.push("/dashboard/settings");
        break;

      case "4":
        router.push("/dashboard/UpgradeToPro");
        break;

      case "5":
        router.push("/dashboard/HelpAndSupport");
        break;
      
        case "6":
        router.push("/dashboard/AboutUs");
        break;

      default:
        break;
    }
  };
 

 
  return (
    <Layout className="dashboard">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme={state.theme as SiderTheme}
        style={{ borderRight: `0.1px solid ${borderClrW}` }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme={state.theme as SiderTheme}
          mode="inline"
          defaultSelectedKeys={["1"]}
          onSelect={(e) => handleMenuItemClick(e.key)}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Profile",
            },
            {
              key: "2",
              icon: <UploadOutlined />,
              label: "Projects",
            },
            {
              key: "3",
              icon: <SettingOutlined />,
              label: "Settings",
            },
            {
              key: "4",
              icon: <AlertOutlined />,
              label: "Upgrade To Pro",
            },
            {
              key: "5",
              icon: <CustomerServiceOutlined />,
              label: "Support",
            },
            {
              key: "6",
              icon: <TeamOutlined />,
              label: "About Us",
            },
          ]}
        />
        <Logoutbtn props={collapsed} />
      </Sider>

      <Layout>
        <Header
          style={{
            padding: 0,
            background: themeclrB,
            borderBottom: `0.1px solid ${borderClrW}`,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
             marginLeft:"10px",
              color: themeclrW,
            }}
          />
        </Header>

        <Content style={{  backgroundColor: themeclrB2 }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
