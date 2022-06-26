import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import Styles from "./ChartHome.module.scss";
import Card from "src/Reusables/Components/Card";

const ChartHome = () => {
  const series = [
    {
      name: "Gross",
      type: "column",
      data: [44000, 50500, 41400, 67100, 22700, 41300, 20100],
    },
    {
      name: "Net",
      type: "line",
      data: [23000, 42000, 35000, 20007, 43000, 22000, 17000],
    },
    {
      name: "Average Purchase Value",
      type: "column",
      data: [23000, 42000, 35000, 27000, 43000, 22000, 17000],
    },
    {
      name: "Unit per Transaction",
      type: "column",
      data: [1000, 1000, 1000, 1000, 1000, 1000, 1017],
    },
  ];
  const options: ApexOptions = {
    plotOptions: {
      bar: {
        columnWidth: "20%",
        dataLabels: {
          position: "top",
          maxItems: 100,
          hideOverflowingLabels: true,
        },
      },
    },
    chart: {
      height: 550,
      type: "line",
      stacked: true,
    },
    stroke: {
      width: [0, 3],
    },
    title: {
      text: "AVERAGE PURCHASE VALUE",
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: ["Jan 12", "Tue", "wed", "Thu", "Fri", "Sat", "Sun"],
    colors: ["#289E45", "#ffe854", "#7AE28C", "#707070"],
  };
  return (
    <Card>
      <div id="chart" className={Styles["container"]}>
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={550}
        />
      </div>
    </Card>
  );
};

export default ChartHome;
