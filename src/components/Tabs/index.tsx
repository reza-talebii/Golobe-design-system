"use client";
import React from "react";
import { TabsProps } from "antd";
import { TabsContainer } from "./styles";
import { FC } from "react";

export const TabsUiKit: FC<TabsProps> = (props) => {
  return <TabsContainer {...props} />;
};
