import { Menu } from "antd";
import React from "react";

export default function SideNav() {
  return (
    <>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        style={{ padding: 16 }}
      >
        <Menu.ItemGroup key={1} title="Menu">
          <Menu.Item key={2}>Browse</Menu.Item>
          <Menu.Item key={3}>Watch List</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key={4} title="Social">
          <Menu.Item key={5}>Friends</Menu.Item>
          <Menu.Item key={6}>Parties</Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </>
  );
}
