import React from "react";
import Card from "src/Reusables/Components/Card";
import DateRangePicker from "src/Reusables/Components/DateRangePicker";
import InfoBar from "src/Reusables/Components/InfoBar";
import Styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={Styles["container"]}>
      <div className={Styles["header"]}>
        <div className={Styles["header-text"]}>Dashboard</div>
        <DateRangePicker />
      </div>
      <div className={Styles["wrap-info"]}>
        <InfoBar title="MARKET INSIGHTS" />
      </div>
      <div className={Styles["wrap-card"]}>
        <Card>
          <div className={Styles["wrap-body"]}>
            <div className={Styles["icon-elipsis"]}>
              <img
                src="/assets/images/Icon-More-Filled.svg"
                alt="icon-elipsis"
              />
            </div>
            <div className={Styles["title-card"]}>Sales Turnover</div>
            <div className={Styles["row"]}>
              <div className={Styles["col"]}>
                <div className={Styles["currency"]}>Rp 3,600,000</div>
                <div className={Styles["row"]}>
                  <div className={Styles["red"]}>13.8%</div>
                  <div className={Styles["normal"]}>
                    last period in products sold
                  </div>
                </div>
              </div>
              <div className={Styles["icon"]}>
                <img
                  src="/assets/images/Sales-Turnover.svg"
                  alt="icon-basket"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
