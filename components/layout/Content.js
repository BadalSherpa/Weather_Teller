import { useState } from "react";
import { Spin } from "antd";
import styles from "./Content.module.css";
import { Button, Row, Col, Input, Form, Typography, Checkbox } from "antd";
import FormItem from "antd/lib/form/FormItem";
import Weather from "../common/Weather";
const { Title, Paragraph } = Typography;

/**
 * @author
 * @function Content
 **/

const Content = (props) => {
  const [submited, setSubmitted] = useState(false);
  const [location, setLocation] = useState("No Location found");
  const handleSubmit = (values) => {
    setLocation(values.location);
    setSubmitted(true);
  };
  return !submited ? (
    <div style={{ textAlign: "center", margin: "10vh 10vw" }}>
      <Col xl={24} lg={34} md={24} sm={24} xs={24}>
        <div className={styles.login__form}>
          <h1>Weather Teller</h1>
          <Title level={4}>Welcome back!</Title>
          <Paragraph>
            Enter the location and I will tell you the weather my Friend!
          </Paragraph>
          <Form onFinish={handleSubmit} layout='vertical'>
            <FormItem
              name='location'
              rules={[
                {
                  required: true,
                  type: "string",
                  message: "Please enter the location!",
                },
              ]}
              hasFeedback
            >
              <Input size='large' placeholder='location' />
            </FormItem>

            <Row>
              <Button
                style={{ backgroundColor: "lightgreen", color: "#fff" }}
                htmlType='submit'
                size='large'
                block
              >
                Tell The Weather
              </Button>
            </Row>
          </Form>
        </div>
      </Col>
    </div>
  ) : (
    <div>
      <Weather location={location} />
    </div>
  );
};

export default Content;
