import { Breadcrumb, Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export default function Home() {
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Layout.Sider>
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            style={{ padding: 16 }}
          >
            <Menu.ItemGroup key={1} title="Menu">
              <Menu.Item key={2}>Browse</Menu.Item>
              <Menu.Item key={3}>Whatch List</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key={4} title="Social">
              <Menu.Item key={5}>Friends</Menu.Item>
              <Menu.Item key={6}>Parties</Menu.Item>
            </Menu.ItemGroup>
          </Menu>
        </Layout.Sider>
        <Layout.Content style={{ padding: "0 50px" }}></Layout.Content>
      </Layout>
    </>
  );
}
