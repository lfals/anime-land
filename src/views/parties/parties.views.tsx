import { SideNav } from "@components";
import { Layout } from "antd";
import React from "react";
import { useParams } from "react-router-dom";

export default function Parties() {
  const id = useParams();
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Layout.Sider>
          <SideNav />
        </Layout.Sider>
        <Layout.Content style={{ padding: "0 50px" }}>
          <h1>{id}</h1>
        </Layout.Content>
      </Layout>
    </>
  );
}
