import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

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
          <Menu.Item key={2}>
            <Link to={"/"}>Browse</Link>
          </Menu.Item>
          <Menu.Item key={3}>
            <Link to={"/watch-list"}>Watch List</Link>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key={4} title="Social">
          <Menu.Item key={5}>
            <Link to={"/friends"}>Friends</Link>
          </Menu.Item>
          <Menu.Item key={6}>
            <Link to={"/parties"}>Parties</Link>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </>
  );
}
