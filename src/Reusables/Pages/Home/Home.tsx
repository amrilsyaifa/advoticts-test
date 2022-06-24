import React from "react";
import DateRangePicker from "src/Reusables/Components/DateRangePicker";
import Styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={Styles["container"]}>
      <div className={Styles["header"]}>
        <div className={Styles["header-text"]}>Dashboard</div>
        <DateRangePicker />
      </div>
    </div>
  );
};

export default Home;
