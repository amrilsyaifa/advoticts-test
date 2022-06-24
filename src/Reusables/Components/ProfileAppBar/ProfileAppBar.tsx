import React from "react";
import Styles from "./ProfileAppBar.module.scss";

interface IProfileAppBar {
  name: string;
  companyName: string;
  url: string;
  onClick: () => void;
}

const ProfileAppBar: React.FC<IProfileAppBar> = ({
  name,
  companyName,
  url,
  onClick,
}) => {
  return (
    <div className={Styles["container"]}>
      <div className={Styles["profile"]}>
        <div>{name}</div>
        <div>{companyName}</div>
      </div>
      <img
        className={Styles["profile-image"]}
        alt="profile-picture"
        src="/assets/images/Profile.svg"
      />
      <button
        data-testid="btn-logout"
        className={Styles["button"]}
        onClick={onClick}
      >
        <img alt="profile-picture" src={url} />
      </button>
    </div>
  );
};

export default ProfileAppBar;
