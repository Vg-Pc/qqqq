import React, { useEffect, useState } from "react";
import "./header.css";
import { Row, Col, Input, Button } from "antd";
import "antd/dist/antd.css";
import { AudioFilled, UserOutlined, SearchOutlined } from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";

const { Search } = Input;

const onSearch = (value) => console.log(value);
function Header() {
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Row>
      <Row className="header">
        <Col className="logo"></Col>
        <div className="search">
          <div className="input_search">
            <Search placeholder="Search" allowClear onSearch={onSearch} />
          </div>
          <div className="button_search">
            <Button onClick={showModal}>
              <SearchOutlined />
            </Button>
            <Modal visible={visible} onOk={handleOk} onCancel={handleCancel}>
              <Input placeholder="Search" allowClear onSearch={onSearch} />
            </Modal>
          </div>
          <div className="button_audio">
            <Button type="text">
              <AudioFilled style={{ fontSize: "18px" }} />
            </Button>
          </div>
        </div>
        <Col>
          <Button
            type="default"
            style={{ color: "royalblue", fontWeight: 500 }}
          >
            <UserOutlined /> SIGN IN
          </Button>
        </Col>
      </Row>
      <Row
        style={{ width: "100%", height: 1, backgroundColor: "lightgrey" }}
      ></Row>
    </Row>
  );
}

export default Header;
