import React from "react";
import { AiOutlineBulb } from "react-icons/ai";
import { IoChevronDownOutline } from "react-icons/io5";
import Styles from "./InfoBar.module.scss";

interface IInfoBar {
  title: string;
}

const InfoBar: React.FC<IInfoBar> = ({ title }) => {
  return (
    <div className={Styles["container"]}>
      <div className={Styles["title"]}>{title}</div>
      <div className={Styles["row"]}>
        <AiOutlineBulb className={Styles["icon-lamp"]} />
        <button className={Styles["button"]}>
          <div className={Styles["text"]}>Click Here for Help</div>
        </button>
        <IoChevronDownOutline className={Styles["icon-chevron"]} />
      </div>
    </div>
  );
};

export default InfoBar;
