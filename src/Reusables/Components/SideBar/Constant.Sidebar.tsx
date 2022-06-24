import React from "react";
import Styles from "./ConstantSidebar.module.scss";

export const ChartComponent = () => {
  return (
    <div className={Styles["chart"]}>
      <img src="/assets/images/Dashboard-icon.svg" alt="chart" />
    </div>
  );
};

export interface IDataListMenu {
  name: string;
  title: string;
  url: string;
  component: React.ReactNode;
}

const DataListMenu: IDataListMenu[] = [
  {
    name: "chart",
    title: "Chart",
    component: <ChartComponent />,
    url: "/",
  },
];

export default DataListMenu;
