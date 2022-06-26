import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import Styles from "./ChartHome.module.scss";
import Card from "src/Reusables/Components/Card";

interface IChartHome {
  series: ISeries[];
}

export interface ISeries {
  name: string;
  type: string;
  data: number[];
}

const ChartHome: React.FC<IChartHome> = ({ series }) => {
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
    labels: ["Mon", "Tue", "wed", "Thu", "Fri", "Sat", "Sun"],
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
