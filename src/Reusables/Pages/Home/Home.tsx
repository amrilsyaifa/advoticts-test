import React, { useState } from "react";

import DateRangePicker from "src/Reusables/Components/DateRangePicker";
import InfoBar from "src/Reusables/Components/InfoBar";
import ListProduct from "src/Reusables/Components/ListProduct";
import ChartHome from "./components/ChartHome/Chart.Home";
import HomeCard from "./components/HomeCard/Home.Card";
import Styles from "./Home.module.scss";

const today = new Date();
today.setDate(today.getDate() - 7);

const Home = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(today);

  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  console.log("start ", startDate);
  console.log("endDate ", endDate);
  return (
    <div className={Styles["container"]}>
      <div className={Styles["header"]}>
        <div className={Styles["header-text"]}>Dashboard</div>
        <DateRangePicker
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      <div className={Styles["wrap-info"]}>
        <InfoBar title="MARKET INSIGHTS" />
      </div>
      <HomeCard />
      <div className={Styles["wrap-list"]}>
        <div className={Styles["chart"]}>
          <ChartHome />
        </div>
        <div className={Styles["list"]}>
          <ListProduct />
        </div>
        <div className={Styles["list"]}>
          <ListProduct />
        </div>
      </div>
    </div>
  );
};

export default Home;
