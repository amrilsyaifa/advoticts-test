import React from "react";
import Card from "src/Reusables/Components/Card";
import { formatCurrency } from "src/Reusables/Helpers/CurrencyHelper";
import Styles from "./HomeCard.module.scss";

export interface IHomeCard {
  price: number;
  percentage: number;
}

const HomeCard: React.FC<IHomeCard> = ({ price, percentage }) => {
  return (
    <div className={Styles["wrap-card"]}>
      <Card>
        <div className={Styles["wrap-body"]}>
          <div className={Styles["icon-elipsis"]}>
            <img src="/assets/images/Icon-More-Filled.svg" alt="icon-elipsis" />
          </div>
          <div className={Styles["title-card"]}>Sales Turnover</div>
          <div className={Styles["row"]}>
            <div className={Styles["col"]}>
              <div className={Styles["currency"]}>{formatCurrency(price)}</div>
              <div className={Styles["row"]}>
                <div className={Styles["red"]}>{percentage}%</div>
                <div className={Styles["normal"]}>
                  last period in products sold
                </div>
              </div>
            </div>
            <div className={Styles["icon"]}>
              <img src="/assets/images/Sales-Turnover.svg" alt="icon-basket" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HomeCard;
