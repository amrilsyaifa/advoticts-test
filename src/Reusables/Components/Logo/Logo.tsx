import React from "react";
import Styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={Styles["container"]}>
      <img
        data-testid="advotics-logo"
        alt="main-logo"
        src="/assets/images/advotics-logo.jpeg"
        className={Styles["main-logo"]}
      />
      <div className={Styles["second-content"]}>
        <div className={Styles["text"]}>powered by</div>
        <img
          alt="second-logo"
          src="/assets/images/advotics-logo.jpeg"
          className={Styles["second-logo"]}
        />
      </div>
    </div>
  );
};

export default Logo;
