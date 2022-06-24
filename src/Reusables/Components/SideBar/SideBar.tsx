import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import DataListMenu from "./Constant.Sidebar";
import Styles from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <div className={Styles["container"]}>
      <button>
        <IoMenuOutline className={Styles["menu-icon"]} />
      </button>
      {DataListMenu.map((item, index) => {
        return (
          <div
            className={`${Styles["sidebar-list"]} ${
              index === 0 && Styles["sidebar-active"]
            }`}
            key={index}
          >
            {item.component}
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
