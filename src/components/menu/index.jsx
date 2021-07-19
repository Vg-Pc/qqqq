import React, { useState, useLayoutEffect, useEffect } from "react";
import "./menu.css";
import { Menu, Button, Collapse, Space, Drawer, Switch } from "antd";
import {
  HomeFilled,
  CompassFilled,
  PlaySquareFilled,
  SnippetsFilled,
  RedoOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

// const { Panel } = Collapse;
const MenuLeft = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [visible, setVisible] = useState(false);
  // const [size, setSize] = useState([0, 0]);
  // useLayoutEffect(() => {
  //   function updateSize() {
  //     setSize(window.innerWidth);
  //   }
  //   window.addEventListener("resize", updateSize);
  //   return () => window.removeEventListener("resize", updateSize);
  // }, []);
  // useEffect(() => {
  //   if (size !== 0) {
  //     setCollapsed(!collapsed);
  //   }
  // }, [size]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onOpen = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const placement = "left";

  return (
    <div className="container">
      <div className="full_screen">
        <div className="button_menu">
          <Button
            type="default"
            onClick={toggleCollapsed}
            style={{ marginBottom: 16, color: "black" }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
            )}
          </Button>
        </div>
        <div className="button_drawer">
          <Button onClick={onOpen}>
            <MenuUnfoldOutlined />
          </Button>
        </div>
        <Menu
          className="menu"
          style={{ height: "100%" }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="/home" icon={<HomeFilled />}>
            <Link to="/main/home">
              <div className="text_menu">Home</div>
            </Link>
          </Menu.Item>
          <Menu.Item key="/explore" icon={<CompassFilled />}>
            <Link to="/main/explore">
              <div className="text_menu">Explore</div>
            </Link>
          </Menu.Item>
          <Menu.Item key="/subscriptions" icon={<PlaySquareFilled />}>
            <Link to="/main/subscriptions">
              <div className="text_menu">Subscriptions</div>
            </Link>
          </Menu.Item>
          <Menu.Item key="/library" icon={<SnippetsFilled />}>
            <Link to="/main/library">
              <div className="text_menu">Library</div>
            </Link>
          </Menu.Item>
          <Menu.Item key="/history" icon={<RedoOutlined />}>
            <Link to="/main/history">
              <div className="text_menu">History</div>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
      <div className="small_screen">
        <Drawer
          placement={placement}
          closable={false}
          onClose={onClose}
          visible={visible}
          key={placement}
        >
          <div
            style={{
              display: "flex",
              flexFlow: "nowrap",
              alignItems: "center",
            }}
          >
            <Button onClick={onClose}>
              <MenuFoldOutlined />
            </Button>
            <div className="logo"></div>
          </div>

          <Link to="/main/home">
            <div className="text_drawer">
              <HomeFilled />
              Home
            </div>
          </Link>
          <Link to="/main/explore">
            <div className="text_drawer">
              <CompassFilled />
              Explore
            </div>
          </Link>
          <Link to="/main/subscriptions">
            <div className="text_drawer">
              <PlaySquareFilled />
              Subscriptions
            </div>
          </Link>
          <Link to="/main/library">
            <div className="text_drawer">
              <SnippetsFilled />
              Library
            </div>
          </Link>
          <Link to="/main/history">
            <div className="text_drawer">
              {" "}
              <RedoOutlined />
              History
            </div>
          </Link>
        </Drawer>
      </div>
    </div>
  );
};

export default MenuLeft;
