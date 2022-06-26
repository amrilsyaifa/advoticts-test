import React from "react";
import { formatCurrency } from "src/Reusables/Helpers/CurrencyHelper";
import { ISKU } from "src/Reusables/Mock/DataDummy/best-selling-sku";
import Card from "../Card";
import Styles from "./ListProduct.module.scss";

interface IListProduct {
  title: string;
  data: ISKU[];
}

const ListProduct: React.FC<IListProduct> = ({ title, data }) => {
  return (
    <div className={Styles["container"]}>
      <Card>
        <div className={Styles["body"]}>
          <div className={Styles["title"]}>{title}</div>
          {data?.map((item: ISKU, index) => {
            if (index === 0) {
              return (
                <div key={item.key} className={Styles["header"]}>
                  <img src={item.url} alt={item.key} />
                  <div className={Styles["col"]}>
                    <div className={Styles["title"]}>{item.name}</div>
                    <div className={Styles["row"]}>
                      <div>{formatCurrency(item.price)}</div>
                      <div>{item.quantitySell}</div>
                    </div>
                  </div>
                </div>
              );
            } else if (index < 7) {
              return (
                <div key={item.key} className={Styles["body"]}>
                  <img src={item.url} alt={item.key} />
                  <div className={Styles["col"]}>
                    <div className={Styles["title"]}>{item.name}</div>
                    <div className={Styles["row"]}>
                      <div>{formatCurrency(item.price)}</div>
                      <div>{item.quantitySell} item</div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
          <div className={Styles["icon-elipsis"]}>
            <img src="/assets/images/Icon-More-Filled.svg" alt="icon-elipsis" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ListProduct;
