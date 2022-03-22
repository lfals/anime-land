import { Layout } from "antd";

import { SideNav } from "@components";

export default function Home() {
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
