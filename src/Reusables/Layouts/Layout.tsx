import React from "react";
import AppBar from "../Components/AppBar";
import Styles from "./Layout.module.scss";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className={Styles["container"]}>
      <AppBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
