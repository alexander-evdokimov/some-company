"use client";

import { Container, Title } from "@/shared";
import { Button, Form, FormProps, Input } from "antd";
import { useState } from "react";
import styled from "styled-components";

interface FormContactValues {
  name: string;
  email: string;
  message: string;
}

export const ContactUs = () => {
  const [form] = Form.useForm<FormContactValues>();
  const [messageFromResponse, setMessageFromResponse] = useState("");

  const handleSuccessSubmit = async (values: FormContactValues) => {
    const res = await fetch("/api/contact-us", { method: "POST", body: JSON.stringify(values) });
    const message: string = await res.json();
    setMessageFromResponse(message);
  };

  const handleFailedSubmit: FormProps<FormContactValues>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
    const namePath = errorInfo.errorFields[0].name;
    form.getFieldInstance(namePath)?.focus();
  };

  if (messageFromResponse) {
    return (
      <ContactWrapper>
        <Container className="container">
          <Title className="title" level={1}>
            {messageFromResponse}
          </Title>
        </Container>
      </ContactWrapper>
    );
  }

  return (
    <ContactWrapper>
      <Container className="container">
        <Title className="title" level={1}>
          Only CTA on the page
        </Title>
        <div className="form-wrapper">
          <Form
            form={form}
            onFinish={handleSuccessSubmit}
            onFinishFailed={handleFailedSubmit}
            autoFocus
            layout="vertical"
          >
            <Form.Item
              required
              label="Name"
              name="name"
              rules={[{ required: true }, { type: "string", min: 3 }]}
            >
              <Input size="large" placeholder="Name..." />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ required: true }, { type: "email" }]}>
              <Input size="large" placeholder="Email..." />
            </Form.Item>
            <Form.Item label="Message" name="message" rules={[{ required: true }]}>
              <Input.TextArea size="large" placeholder="Message..." />
            </Form.Item>
            <Button className="submit" htmlType="submit" type="primary">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.div`
  background-color: ${(props) => `${props.theme.colors.bgPrimary}`};
  flex: 1; /* Занимает всю доступную высоту внутри main */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;

  .title {
    font-size: 60px;
    text-align: center;
  }

  .form-wrapper {
    justify-self: center;
    width: 100%;
    max-width: 340px;
    background-color: white;
    padding: 30px;
    border-radius: 12px;
    border: 1px solid #e4e4e4;

    .ant-form-item-label {
      padding: 0 0 4px 0 !important;

      label {
        font-size: 16px;
      }
    }

    .submit {
      margin-top: 10px;
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    .title {
      font-size: 30px;
    }
  }
`;
