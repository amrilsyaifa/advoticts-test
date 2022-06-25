import React from "react";
import Styles from "./Card.module.scss";

interface ICard {
  children: React.ReactNode;
}

const Card: React.FC<ICard> = ({ children }) => {
  return <div className={Styles["container"]}>{children}</div>;
};

export default Card;
