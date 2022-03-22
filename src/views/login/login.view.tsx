import React, { useContext } from "react";
import { Button, Col, Form, Input, Layout, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();

  const handleForm = (values: any) => {
    console.log("Success", values);

    navigate("/");
  };

  const handleError = (error: any) => {
    console.log("Failed:", error);
  };
  return (
    <>
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <Col span={4}>
          <Typography.Title>Login</Typography.Title>
          <Form
            name="Login"
            onFinish={handleForm}
            onFinishFailed={handleError}
            autoComplete="on"
            layout="vertical"
          >
            <Form.Item
              label="username"
              name="username"
              rules={[
                { required: true, message: "Please input your username" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="password"
              name="password"
              rules={[
                { required: true, message: "Please input your password" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}
