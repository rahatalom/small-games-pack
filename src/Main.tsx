import React from "react";
import { Tabs } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import { FileUpload } from "./FileUpload";
import "./Main.css"
import { Wordle } from "./Wordle";
import { Snake } from "./Snake";

export const MainPage: React.FC = () => {
  return (
        <Tabs defaultActiveKey="1" >
      <Tabs.TabPane
        tab={
          <span>
            <AndroidOutlined style={{padding:"3px"}}/>
            File tab
          </span>
        }
        key="1"
      >
        <FileUpload fileName="Excel" extension=".csv" />
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <span>
            <AppleOutlined style={{padding:"3px"}} />
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
