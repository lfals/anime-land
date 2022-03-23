import { SideNav } from "@components";
import { Layout } from "antd";
import React from "react";

export default function Friends() {
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Layout.Sider>
          <SideNav />
        </Layout.Sider>
        <Layout.Content style={{ padding: "0 50px" }}></Layout.Content>
      </Layout>
    </>
  );
}
