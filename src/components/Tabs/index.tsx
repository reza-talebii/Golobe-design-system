"use client";
import React from "react";
import { TabsProps } from "antd";
import { TabsContainer } from "./styles";
import { FC } from "react";

const TabsUi: FC<TabsProps> = (props) => {
  return <TabsContainer {...props} />;
};

export default TabsUi;
