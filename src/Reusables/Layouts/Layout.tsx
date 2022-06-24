import React from "react";
import AppBar from "../Components/AppBar";
import SideBar from "../Components/SideBar";
import Styles from "./Layout.module.scss";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className={Styles["container"]}>
      <AppBar />
      <div className={Styles["wrapper-content"]}>
        <SideBar />
        <div className={Styles["content"]}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
