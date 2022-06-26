import React, { useState, useEffect } from "react";

import DateRangePicker from "src/Reusables/Components/DateRangePicker";
import InfoBar from "src/Reusables/Components/InfoBar";
import ListProduct from "src/Reusables/Components/ListProduct";
import { ISKU } from "src/Reusables/Mock/DataDummy/best-selling-sku";
import ChartHome from "./Components/ChartHome/Chart.Home";
import HomeCard from "./Components/HomeCard/Home.Card";
import Styles from "./Home.module.scss";
import useHome from "./Hooks/useHome";

const start = new Date();
start.setDate(start.getDate() - 7);

const end = new Date();
end.setDate(end.getDate() - 1);

const Home = () => {
  const [dataBestSelling, setDataBestSelling] = useState<ISKU[]>([]);
  const [dataTopCompetitor, setDataTopCompetitor] = useState<ISKU[]>([]);
  const [startDate, setStartDate] = useState<Date>(start);
  const [endDate, setEndDate] = useState<Date>(end);

  const { onFetchData } = useHome();

  useEffect(() => {
    onFetchingData();
  }, [startDate, endDate]);

  const onFetchingData = () => {
    const { bestSelling, topCompetitor } = onFetchData(startDate, endDate);
    setDataBestSelling(bestSelling);
    setDataTopCompetitor(topCompetitor);
  };
  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

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
          <ListProduct title="Best Selling SKU" data={dataBestSelling} />
        </div>
        <div className={Styles["list"]}>
          <ListProduct title="TOP COMPETITOR SKU" data={dataTopCompetitor} />
        </div>
      </div>
    </div>
  );
};

export default Home;
