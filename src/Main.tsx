import React from "react";
import { Tabs } from "antd";
import { AppleOutlined } from "@ant-design/icons";
import "./Main.css"
import { Wordle } from "./Wordle";
import { Snake } from "./Snake";

export const MainPage: React.FC = () => {
  return (
        <Tabs defaultActiveKey="1" >
      <Tabs.TabPane
        tab={
          <span>
            ⓦ
            Wordle tab
          </span>
        }
        key="2"
      >
        <Wordle/>
      </Tabs.TabPane>
      <Tabs.TabPane tab={
        <span>
          🐍
          Snake game
        </span>
      }>
        <Snake/>
      </Tabs.TabPane>
    </Tabs>
  );
};
