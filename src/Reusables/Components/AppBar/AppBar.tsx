import React from "react";
import Logo from "../Logo";
import ProfileAppBar from "../ProfileAppBar";
import Styles from "./AppBar.module.scss";

const AppBar = () => {
  return (
    <header className={Styles["container"]}>
      <Logo />
      <ProfileAppBar
        name="Username"
        companyName="Company Name"
        url="/assets/images/logout.png"
        onClick={() => alert("logout")}
      />
    </header>
  );
};

export default AppBar;
