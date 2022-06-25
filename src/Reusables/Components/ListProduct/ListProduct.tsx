import React from "react";
import Card from "../Card";
import Styles from "./ListProduct.module.scss";

const ListProduct = () => {
  return (
    <div className={Styles["container"]}>
      <Card>
        <div className={Styles["body"]}>
          <div className={Styles["title"]}>ListProduct</div>
          <div className={Styles["header"]}>
            <img
              src="https://ge.all.biz/img/ge/catalog/10213.jpeg"
              alt="product-header"
            />
            <div className={Styles["col"]}>
              <div className={Styles["title"]}>Nama Product</div>
              <div className={Styles["row"]}>
                <div>Rp. xxxxxx</div>
                <div>80</div>
              </div>
            </div>
          </div>
          <div className={Styles["body"]}>
            <img
              src="https://ge.all.biz/img/ge/catalog/10213.jpeg"
              alt="product-header"
            />
            <div className={Styles["col"]}>
              <div className={Styles["title"]}>Nama Product</div>
              <div className={Styles["row"]}>
                <div>Rp. xxxxxx</div>
                <div>80</div>
              </div>
            </div>
          </div>
          <div className={Styles["body"]}>
            <img
              src="https://ge.all.biz/img/ge/catalog/10213.jpeg"
              alt="product-header"
            />
            <div className={Styles["col"]}>
              <div className={Styles["title"]}>Nama Product</div>
              <div className={Styles["row"]}>
                <div>Rp. xxxxxx</div>
                <div>80</div>
              </div>
            </div>
          </div>
          <div className={Styles["body"]}>
            <img
              src="https://ge.all.biz/img/ge/catalog/10213.jpeg"
              alt="product-header"
            />
            <div className={Styles["col"]}>
              <div className={Styles["title"]}>Nama Product</div>
              <div className={Styles["row"]}>
                <div>Rp. xxxxxx</div>
                <div>80</div>
              </div>
            </div>
          </div>
          <div className={Styles["body"]}>
            <img
              src="https://ge.all.biz/img/ge/catalog/10213.jpeg"
              alt="product-header"
            />
            <div className={Styles["col"]}>
              <div className={Styles["title"]}>Nama Product</div>
              <div className={Styles["row"]}>
                <div>Rp. xxxxxx</div>
                <div>80</div>
              </div>
            </div>
          </div>
          <div className={Styles["icon-elipsis"]}>
            <img src="/assets/images/Icon-More-Filled.svg" alt="icon-elipsis" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ListProduct;
